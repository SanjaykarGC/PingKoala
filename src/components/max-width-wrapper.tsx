import { cn } from "@/utils"
import React from "react"
interface MaxWidthWrapperprops {
  className?: string
  children: React.ReactNode
}
const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperprops) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
