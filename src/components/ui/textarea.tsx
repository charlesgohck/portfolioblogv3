import { cn } from "@/lib/utils"
import * as React from "react"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(className, "textarea border-1 w-auto")}
      {...props}
    />
  )
}

export { Textarea }
