import { DevRadarCard } from "@/components/DevRadarCard";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/SkillBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Settings, Github, Linkedin, Mail, Trophy, Star, Code2, Calendar } from "lucide-react";

export function Profile() {
  const skills = [
    { name: "React", level: "advanced" as const },
    { name: "TypeScript", level: "advanced" as const },
    { name: "Node.js", level: "intermediate" as const },
    { name: "Python", level: "intermediate" as const },
    { name: "Docker", level: "beginner" as const },
    { name: "AWS", level: "beginner" as const },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack React app with payment integration",
      status: "completed",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management System",
      description: "Team collaboration tool with real-time updates",
      status: "in-progress",
      tech: ["TypeScript", "Socket.io", "PostgreSQL"]
    }
  ];

  const achievements = [
    { title: "First Project", description: "Completed your first project", icon: Trophy },
    { title: "Skill Master", description: "Added 5+ skills to profile", icon: Star },
    { title: "Community Member", description: "Made first community post", icon: Code2 },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-6">
      <div className="max-w-lg mx-auto px-4 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button size="icon" variant="ghost">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* Profile Card */}
        <DevRadarCard gradient className="text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4">
            <AvatarImage src="/placeholder-avatar.png" />
            <AvatarFallback className="text-xl">JD</AvatarFallback>
          </Avatar>
          
          <h2 className="text-xl font-bold text-card-foreground">John Developer</h2>
          <p className="text-muted-foreground mb-4">Full-Stack Developer • 2 years experience</p>
          
          <div className="flex justify-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
              <Trophy className="h-3 w-3 mr-1" />
              Active
            </Badge>
            <Badge variant="outline">Level 3</Badge>
          </div>

          <div className="flex justify-center gap-2">
            <Button size="sm" variant="ghost">
              <Github className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </DevRadarCard>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Skills</h3>
          <DevRadarCard>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              Add New Skill
            </Button>
          </DevRadarCard>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <DevRadarCard key={index}>
                  <div className="flex items-center gap-3">
                    <div className="bg-accent/20 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                </DevRadarCard>
              );
            })}
          </div>
        </div>

        {/* Recent Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <DevRadarCard key={index}>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{project.title}</h4>
                    <Badge
                      variant={project.status === "completed" ? "secondary" : "outline"}
                      className={project.status === "completed" ? "bg-success/20 text-success border-success/30" : ""}
                    >
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <SkillBadge key={tech} skill={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </DevRadarCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}