"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";
import { heroSkills } from "@/lib/content/skills";

const skillTileBackgrounds: Record<string, string> = {
  "React Native": "#D9F7FF",
  Python: "#FFE08A",
  Figma: "#C6FF9B",
  Swift: "#F05138",
  Kotlin: "#F5F3FF",
  Typescript: "#3178C6",
  Expo: "#F3F4F6",
  TensorFlow: "#FFE7C2",
  "Rest APIs": "#D5F5E8",
  "AI/ML": "#FDE2E2",
  Firebase: "#FFF1B8",
  Git: "#FFE1D6",
  "Next.js": "#FFFFFF",
  "Node.js": "#DCF6D9",
  Docker: "#DCEEFB",
  PostgreSQL: "#DCE7F7",
  MongoDB: "#D9F0DB",
  Supabase: "#D7F8E8",
};

const skillIconColors: Record<string, string> = {
  "React Native": "#61DAFB",
  Python: "#3776AB",
  Figma: "#A259FF",
  Swift: "#FFFFFF",
  Kotlin: "#7F52FF",
  Typescript: "#FFFFFF",
  Expo: "#111111",
  TensorFlow: "#FF6F00",
  "Rest APIs": "#16A34A",
  "AI/ML": "#EE4C2C",
  Firebase: "#FFCA28",
  Git: "#F05032",
  "Next.js": "#111111",
  "Node.js": "#339933",
  Docker: "#2496ED",
  PostgreSQL: "#336791",
  MongoDB: "#47A248",
  Supabase: "#3ECF8E",
};

const icons = heroSkills.map((skill) => ({
  ...skill,
  bg: skillTileBackgrounds[skill.name] ?? "#F3F4F6",
  iconColor: skillIconColors[skill.name] ?? "#111111",
}));

type StackIcon = (typeof icons)[number];

type StackSlot = "front" | "middle" | "back";
type StackVisualRole = StackSlot | "exiting";

const STACK_SLOTS: StackSlot[] = ["front", "middle", "back"];

const SLOT_DEPTH: Record<StackSlot, number> = {
  front: 0,
  middle: 1,
  back: 2,
};

const SLOT_Z_INDEX: Record<StackSlot, number> = {
  front: 36,
  middle: 28,
  back: 20,
};

const VISUAL_ICON_OPACITY: Record<StackVisualRole, number> = {
  front: 1,
  middle: 1,
  back: 1,
  exiting: 1,
};

const VISUAL_ICON_SCALE: Record<StackVisualRole, number> = {
  front: 1,
  middle: 1,
  back: 1,
  exiting: 1,
};

const VISUAL_OVERLAY_OPACITY: Record<StackVisualRole, number> = {
  front: 0,
  middle: 0.76,
  back: 0.88,
  exiting: 0,
};

const VISIBLE_CARD_COUNT = 3;
const STACK_SCALE_STEP = 0.18;
const CYCLE_INTERVAL_MS = 2000;
const EXIT_FADE_DURATION_MS = 200;

const STACK_LAYOUT_TRANSITION = {
  type: "spring" as const,
  duration: 0.8,
  bounce: 0,
};

const STACK_FADE_TRANSITION = {
  duration: 0.26,
  ease: [0.33, 1, 0.68, 1] as const,
};

const STACK_CARD_TRANSITION = {
  layout: STACK_LAYOUT_TRANSITION,
  opacity: STACK_FADE_TRANSITION,
} as const;

const STACK_EXIT_TRANSITION = {
  layout: STACK_LAYOUT_TRANSITION,
  opacity: STACK_FADE_TRANSITION,
  y: STACK_FADE_TRANSITION,
} as const;

type ExitingCard = {
  id: number;
  icon: StackIcon;
};

function maskStyles(logoUrl: string, iconColor: string) {
  return {
    backgroundColor: iconColor,
    maskImage: `url(${logoUrl})`,
    WebkitMaskImage: `url(${logoUrl})`,
    maskRepeat: "no-repeat" as const,
    WebkitMaskRepeat: "no-repeat" as const,
    maskPosition: "center" as const,
    WebkitMaskPosition: "center" as const,
    maskSize: "contain" as const,
    WebkitMaskSize: "contain" as const,
  };
}

function getScale(depth: number) {
  return 1 - STACK_SCALE_STEP * depth;
}

function getBackEntryAnimation() {
  return {
    opacity: 0,
    y: "calc(var(--mobbin-icon-offset) * -2.2)",
    scale: getScale(2),
  };
}

function getSlotFrameStyle(slot: StackSlot): React.CSSProperties {
  const depth = SLOT_DEPTH[slot];
  const scale = getScale(depth);
  const insetPercent = (1 - scale) * 50;

  return {
    left: `${insetPercent}%`,
    top: `calc(var(--mobbin-icon-offset) * ${-depth})`,
    width: `${scale * 100}%`,
    height: `${scale * 100}%`,
    zIndex: SLOT_Z_INDEX[slot],
  };
}

function getExitFrameStyle(): React.CSSProperties {
  return {
    left: "0%",
    top: "calc(var(--mobbin-icon-offset) * 1)",
    width: "100%",
    height: "100%",
    zIndex: 44,
  };
}

function StackCardFace({
  icon,
  role,
  prefersReducedMotion,
}: {
  icon: StackIcon;
  role: StackVisualRole;
  prefersReducedMotion: boolean;
}) {
  const overlayColor =
    role === "middle"
      ? "var(--mobbin-stack-mid-bg)"
      : "var(--mobbin-stack-back-bg)";

  return (
    <>
      <div className="absolute inset-0" style={{ backgroundColor: icon.bg }} />

      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
        animate={{ opacity: VISUAL_OVERLAY_OPACITY[role] }}
        transition={
          prefersReducedMotion ? { duration: 0 } : STACK_FADE_TRANSITION
        }
        initial={false}
      />

      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        animate={{
          opacity: VISUAL_ICON_OPACITY[role],
          scale: VISUAL_ICON_SCALE[role],
        }}
        transition={
          prefersReducedMotion ? { duration: 0 } : STACK_FADE_TRANSITION
        }
        initial={false}
      >
        <div
          aria-label={icon.name}
          role="img"
          className="h-[58%] w-[58%] md:h-[56%] md:w-[56%]"
          style={maskStyles(icon.logoUrl, icon.iconColor)}
        />
      </motion.div>
    </>
  );
}

export function MobbinIconStack() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [exitingCard, setExitingCard] = useState<ExitingCard | null>(null);
  const prefersReducedMotion = !!useReducedMotion();
  const cycleIdRef = useRef(0);
  const canCycle = icons.length > VISIBLE_CARD_COUNT;

  useEffect(() => {
    if (!canCycle) return;

    const timer = window.setInterval(() => {
      setFrontIndex((previous) => {
        cycleIdRef.current += 1;
        setExitingCard({
          id: cycleIdRef.current,
          icon: icons[previous % icons.length],
        });

        return (previous + 1) % icons.length;
      });
    }, CYCLE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [canCycle]);

  useEffect(() => {
    if (!exitingCard) return;

    const timer = window.setTimeout(
      () => {
        setExitingCard((current) =>
          current?.id === exitingCard.id ? null : current,
        );
      },
      prefersReducedMotion ? 0 : EXIT_FADE_DURATION_MS,
    );

    return () => window.clearTimeout(timer);
  }, [exitingCard, prefersReducedMotion]);

  const slotAssignments = useMemo<Record<StackSlot, StackIcon> | null>(() => {
    if (icons.length === 0) return null;

    return {
      front: icons[frontIndex % icons.length],
      middle: icons[(frontIndex + 1) % icons.length],
      back: icons[(frontIndex + 2) % icons.length],
    };
  }, [frontIndex]);

  const preloadIcon =
    canCycle && icons.length > 0
      ? icons[(frontIndex + VISIBLE_CARD_COUNT) % icons.length]
      : null;

  useEffect(() => {
    if (!preloadIcon) return;

    const image = new window.Image();
    image.src = preloadIcon.logoUrl;
  }, [preloadIcon]);

  if (!slotAssignments) return null;

  return (
    <div className="mobbin-icon-stack pointer-events-none relative flex h-14 w-14 select-none items-center justify-center overflow-visible md:h-[88px] md:w-[88px] lg:h-[68px] lg:w-[68px] xl:h-16 xl:w-16">
      <LayoutGroup id="hero-app-icon-stack">
        {STACK_SLOTS.map((slot) => {
          const icon = slotAssignments[slot];

          return (
            <div
              key={slot}
              className="absolute overflow-visible"
              style={getSlotFrameStyle(slot)}
            >
              <motion.div
                key={icon.name}
                layoutId={`hero-app-icon-card-${icon.name}`}
                initial={
                  slot === "back" && !prefersReducedMotion
                    ? getBackEntryAnimation()
                    : false
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={
                  prefersReducedMotion ? { duration: 0 } : STACK_CARD_TRANSITION
                }
                style={{ transformOrigin: "top center" }}
                className="absolute inset-0 overflow-hidden rounded-[18px] shadow-sm md:rounded-[26.4px] lg:rounded-[20px] xl:rounded-[18px]"
              >
                <StackCardFace
                  icon={icon}
                  role={slot}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </motion.div>
            </div>
          );
        })}

        <AnimatePresence initial={false}>
          {exitingCard ? (
            <div
              className="absolute overflow-visible"
              style={getExitFrameStyle()}
            >
              <motion.div
                key={`exit-${exitingCard.id}`}
                layoutId={`hero-app-icon-card-${exitingCard.icon.name}`}
                initial={false}
                animate={{
                  opacity: 0,
                  y: prefersReducedMotion
                    ? 0
                    : "calc(var(--mobbin-icon-offset) * 0.45)",
                }}
                transition={
                  prefersReducedMotion ? { duration: 0 } : STACK_EXIT_TRANSITION
                }
                style={{ transformOrigin: "top center" }}
                className="absolute inset-0 overflow-hidden rounded-[18px] shadow-sm md:rounded-[26.4px] lg:rounded-[20px] xl:rounded-[18px]"
              >
                <StackCardFace
                  icon={exitingCard.icon}
                  role="exiting"
                  prefersReducedMotion={prefersReducedMotion}
                />
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
