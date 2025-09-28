import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DevRadarCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
}

export function DevRadarCard({ children, className, gradient = false, hover = true }: DevRadarCardProps) {
  return (
    <div 
      className={cn(
        "rounded-xl border border-card-border p-4 transition-smooth",
        gradient ? "gradient-card" : "bg-card",
        hover && "hover:shadow-card hover:scale-[1.02] hover:border-primary/20",
        className
      )}
    >
      {children}
    </div>
  );
}