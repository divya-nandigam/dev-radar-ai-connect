import { DevRadarCard } from "@/components/DevRadarCard";
import { DevRadarLogo } from "@/components/DevRadarLogo";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/SkillBadge";
import { Zap, Target, Users, TrendingUp, Code2, Lightbulb } from "lucide-react";

export function Dashboard() {
  const aiSuggestions = [
    {
      type: "project",
      title: "Build a Real-time Chat App",
      description: "Perfect for your React & Node.js skills",
      skills: ["React", "Node.js", "Socket.io"],
      difficulty: "intermediate" as const,
      icon: Code2
    },
    {
      type: "skill",
      title: "Learn TypeScript",
      description: "Enhance your JavaScript development",
      skills: ["TypeScript", "JavaScript"],
      difficulty: "beginner" as const,
      icon: Lightbulb
    }
  ];

  const stats = [
    { label: "Projects", value: 12, icon: Target, change: "+3 this month" },
    { label: "Connections", value: 47, icon: Users, change: "+8 this week" },
    { label: "Skills", value: 18, icon: TrendingUp, change: "+2 recently" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-6">
      <div className="max-w-lg mx-auto px-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <DevRadarLogo size="lg" className="justify-center" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome back, Developer! 👋
          </h1>
          <p className="text-muted-foreground">Let's continue building your tech journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <DevRadarCard key={stat.label} className="text-center">
                <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-success mt-1">{stat.change}</div>
              </DevRadarCard>
            );
          })}
        </div>

        {/* AI Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold">AI Recommendations</h2>
          </div>
          
          <div className="space-y-4">
            {aiSuggestions.map((suggestion, index) => {
              const Icon = suggestion.icon;
              return (
                <DevRadarCard key={index} gradient>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-card-foreground">{suggestion.title}</h3>
                      <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {suggestion.skills.map((skill) => (
                          <SkillBadge
                            key={skill}
                            skill={skill}
                            level={suggestion.difficulty}
                            size="sm"
                          />
                        ))}
                      </div>
                      
                      <div className="pt-2">
                        <Button size="sm" variant="gradient">
                          {suggestion.type === "project" ? "Start Building" : "Start Learning"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </DevRadarCard>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <Target className="h-6 w-6" />
              <span>Find Projects</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <Users className="h-6 w-6" />
              <span>Find Mentors</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}