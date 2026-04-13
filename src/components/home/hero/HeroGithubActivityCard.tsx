"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/content/social-links";
import { cn } from "@/lib/utils";
import {
  type GithubActivityDay,
  type GithubActivitySummary,
} from "@/lib/github-activity";

type GridDay = {
  key: string;
  level: GithubActivityDay["level"];
  isPadding: boolean;
  label: string;
};

type GridColumn = {
  key: string;
  days: GridDay[];
};

const TARGET_COLUMNS = 12;

const PLACEHOLDER_COLUMNS: GridColumn[] = Array.from(
  { length: TARGET_COLUMNS },
  (_, index) => ({
    key: `placeholder-${index}`,
    days: Array.from({ length: 7 }, (_, dayIndex) => ({
      key: `placeholder-${index}-${dayIndex}`,
      level: (
        index === 1 && dayIndex < 3
          ? 3
          : index === 3 && dayIndex > 3
            ? 4
            : (index + dayIndex) % 4 === 0
              ? 0
              : ((index + dayIndex) % 3) + 1
      ) as GithubActivityDay["level"],
      isPadding: false,
      label: "Loading GitHub activity",
    })),
  })
);

const LEVEL_CLASSNAMES = [
  "bg-zinc-200 dark:bg-zinc-800/80",
  "bg-[#a7ecac]",
  "bg-[#7fdb82]",
  "bg-[#58be59]",
  "bg-[#367f35]",
] as const;

type ActivityState =
  | { status: "loading" }
  | { status: "ready"; data: GithubActivitySummary }
  | { status: "error" };

function getMonthLabel(key: string) {
  if (!key || key.startsWith("placeholder")) return "";
  const parts = key.split("-");
  if (parts.length !== 3) return "";
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return date.toLocaleString('en-US', { month: 'short' });
}

function ActivityGrid({ columns }: { columns: GridColumn[] }) {
  const monthLabels = columns.map((column, index) => {
    if (index === 0) return ""; // GitHub doesn't label the bleeding-edge starting month chunk
    const currentMonth = getMonthLabel(column.key);
    const previousMonth = getMonthLabel(columns[index - 1].key);
    return currentMonth !== previousMonth ? currentMonth : "";
  });

  const todayStr = new Date().toISOString().slice(0, 10);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col gap-1.5 w-fit mx-auto">
        <div className="grid grid-flow-col auto-cols-max gap-[6px]">
          {columns.map((column) => (
            <div
              key={column.key}
              className="grid grid-rows-7 gap-[6px]"
            >
              {column.days.map((day) => {
                // Completely hide future days to match GitHub behavior
                if (day.key > todayStr) return null;

                return (
                  <div
                    key={day.key}
                    title={day.label}
                    aria-label={day.label}
                    className={cn(
                      "h-[18px] w-[18px] rounded-[4px] lg:h-[16px] lg:w-[16px]",
                      LEVEL_CLASSNAMES[day.level]
                    )}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-[6px] w-full px-[1px] pt-1.5">
          {monthLabels.map((label, index) => (
            <div key={`month-${index}`} className="col-span-1">
              <div className="w-0 overflow-visible flex items-start">
                <span className="whitespace-nowrap hero-education-secondary font-normal leading-none text-[#636366] dark:text-zinc-400">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full flex justify-center items-end mt-6 lg:mt-0">
        <div className="bg-[#b8b8b8] lg:bg-[#cacaca] dark:bg-[#676770] lg:dark:bg-zinc-500 rounded-full flex items-center gap-1.5 px-5 py-2.5 transition-colors group-hover:bg-[#acacac] lg:group-hover:bg-[#b8b8b8] dark:group-hover:bg-zinc-500 lg:dark:group-hover:bg-zinc-400">
          <span className="hero-copy-unified font-medium text-zinc-900 dark:text-white">
            GitHub activity
          </span>
          <ArrowUpRight 
            className="w-4 h-4 text-zinc-900 dark:text-white" 
            strokeWidth={2.5} 
          />
        </div>
      </div>
    </div>
  );
}

export function HeroGithubActivityCard({ variant = "default" }: { variant?: "default" | "naked" }) {
  const [activityState, setActivityState] = useState<ActivityState>({
    status: "loading",
  });

  useEffect(() => {
    let isMounted = true;

    async function loadActivity() {
      try {
        const response = await fetch("/api/github-activity");

        if (!response.ok) {
          throw new Error("GitHub activity request failed.");
        }

        const data = (await response.json()) as GithubActivitySummary;

        if (isMounted) {
          setActivityState({ status: "ready", data });
        }
      } catch {
        if (isMounted) {
          setActivityState({ status: "error" });
        }
      }
    }

    void loadActivity();

    return () => {
      isMounted = false;
    };
  }, []);

  const columns = activityState.status === "ready"
    ? activityState.data.weeks.slice(-TARGET_COLUMNS).map((week) => ({
        key: week.key,
        days: week.days.map((day) => ({
          key: day.date,
          level: day.level,
          isPadding: day.isPadding,
          label: day.label,
        })),
      }))
    : PLACEHOLDER_COLUMNS;

  const content = (
    <Link
      href={socialLinks.github}
      aria-label="Open GitHub profile"
      className="group relative flex h-full items-center justify-center rounded-[40px]"
    >
      <div className={cn("h-full w-full", variant === "naked" ? "" : "px-5 py-8 xl:px-6 xl:py-9")}>
        <ActivityGrid columns={columns} />
      </div>
    </Link>
  );

  if (variant === "naked") {
    return content;
  }

  return (
    <div className="hero-education-card relative flex aspect-square w-full flex-col overflow-hidden rounded-[40px] border-none">
      {content}
    </div>
  );
}
