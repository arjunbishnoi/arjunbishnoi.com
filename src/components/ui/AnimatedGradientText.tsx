import React from "react"
import { cn } from "@/lib/utils"

export interface AnimatedGradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function AnimatedGradientText({ children, className, ...props }: AnimatedGradientTextProps) {
  return (
    <span 
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient bg-[length:200%_auto]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
