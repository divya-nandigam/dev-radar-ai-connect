import { Home, Search, Users, MessageCircle, User } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: "dashboard", icon: Home, label: "Home" },
    { id: "projects", icon: Search, label: "Projects" },
    { id: "community", icon: Users, label: "Community" },
    { id: "chat", icon: MessageCircle, label: "Chat" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 gradient-card border-t border-card-border backdrop-blur-lg z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 py-3 px-2 min-w-0 transition-all duration-300",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5 transition-transform", isActive && "scale-110")} />
              <span className="text-xs font-medium">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}