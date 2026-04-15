"use client";

import { useEffect, useState } from "react";
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
  const displayColumns = columns.slice(1); // remove leftmost partial-week column
  const monthLabels = displayColumns.map((column, index) => {
    const currentMonth = getMonthLabel(column.key);
    // For the first displayed column, compare against the removed column so we
    // still show a month label if a new month starts right after the removed week.
    const previousColumn = index === 0 ? columns[0] : displayColumns[index - 1];
    const previousMonth = getMonthLabel(previousColumn.key);
    return currentMonth !== previousMonth ? currentMonth : "";
  });

  const todayStr = new Date().toISOString().slice(0, 10);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full flex justify-center items-center mb-5 lg:mb-5">
        <span className="hero-copy-unified text-zinc-900 dark:text-white leading-[1.6] tracking-[-0.015em] font-[600]">
          GitHub activity
        </span>
      </div>
      <div className="flex flex-col gap-1.5 w-fit mx-auto">
        <div className="grid grid-flow-col auto-cols-max gap-[5px] lg:gap-[6px]">
          {displayColumns.map((column) => (
            <div
              key={column.key}
              className="grid grid-rows-7 gap-[5px] lg:gap-[6px]"
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
                      "h-[16px] w-[16px] rounded-[4px] lg:h-[16px] lg:w-[16px]",
                      LEVEL_CLASSNAMES[day.level]
                    )}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-11 gap-[6px] w-full px-[1px] pt-1.5">
          {monthLabels.map((label, index) => (
            <div key={`month-${index}`} className="col-span-1">
              <div className="w-0 overflow-visible flex items-start">
                <span className="whitespace-nowrap hero-copy-unified font-normal leading-[1.6] text-[#636366] dark:text-zinc-400">
                  {label}
                </span>
              </div>
            </div>
          ))}
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
    <div className="group relative flex h-full items-center justify-center rounded-[40px]">
      <div className={cn("h-full w-full", variant === "naked" ? "" : "px-5 py-8 xl:px-6 xl:py-9")}>
        <ActivityGrid columns={columns} />
      </div>
    </div>
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
