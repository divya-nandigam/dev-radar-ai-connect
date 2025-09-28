import { cn } from "@/lib/utils";
import devRadarLogo from "@/assets/devradar-logo.svg";

interface DevRadarLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const DevRadarLogo = ({ 
  className, 
  showText = true, 
  size = "md" 
}: DevRadarLogoProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src={devRadarLogo} 
        alt="DevRadar Logo" 
        className={cn("object-contain", sizeClasses[size])}
      />
      {showText && (
        <span className={cn(
          "font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
          textSizeClasses[size]
        )}>
          DevRadar
        </span>
      )}
    </div>
  );
};