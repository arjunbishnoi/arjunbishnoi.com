export type HeroSnapTransition =
  | { duration: number }
  | {
      type: "spring"
      stiffness: number
      damping: number
      mass: number
    }
