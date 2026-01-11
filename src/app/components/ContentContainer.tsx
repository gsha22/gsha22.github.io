import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl pb-48 px-8 sm:px-8 md:px-16 lg:px-12", className)}>
      {children}
    </div>
  );
}
