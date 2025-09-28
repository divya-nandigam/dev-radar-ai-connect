interface SkillBadgeProps {
  skill: string;
  level?: "beginner" | "intermediate" | "advanced";
  size?: "sm" | "md" | "lg";
}

export function SkillBadge({ skill, level = "intermediate", size = "md" }: SkillBadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  const levelClasses = {
    beginner: "bg-secondary text-secondary-foreground border-secondary",
    intermediate: "bg-primary/20 text-primary border-primary/30",
    advanced: "gradient-success text-success-foreground border-success/30"
  };

  return (
    <span className={`
      inline-flex items-center rounded-full font-medium transition-smooth border
      ${sizeClasses[size]} ${levelClasses[level]}
      hover:scale-105 hover:shadow-sm
    `}>
      {skill}
    </span>
  );
}