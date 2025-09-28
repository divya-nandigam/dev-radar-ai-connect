import { DevRadarCard } from "@/components/DevRadarCard";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/SkillBadge";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Clock, Users, Zap, Star, Bookmark } from "lucide-react";

export function Projects() {
  const categories = ["All", "Web Dev", "Mobile", "AI/ML", "Open Source", "Hackathon"];
  
  const projectSuggestions = [
    {
      id: 1,
      title: "Real-time Collaborative Code Editor",
      description: "Build a web-based code editor with live collaboration features, syntax highlighting, and chat functionality.",
      difficulty: "Advanced",
      duration: "4-6 weeks",
      skills: ["React", "Node.js", "Socket.io", "Monaco Editor"],
      category: "Web Dev",
      participants: 3,
      isBookmarked: true,
      isAISuggested: true,
      matchScore: 95
    },
    {
      id: 2,
      title: "Mobile Expense Tracker",
      description: "Create a cross-platform mobile app for tracking personal expenses with charts and budget alerts.",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      skills: ["React Native", "SQLite", "Chart.js"],
      category: "Mobile",
      participants: 1,
      isBookmarked: false,
      isAISuggested: true,
      matchScore: 87
    },
    {
      id: 3,
      title: "AI-Powered News Summarizer",
      description: "Develop a tool that uses natural language processing to summarize news articles automatically.",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      skills: ["Python", "NLP", "FastAPI", "React"],
      category: "AI/ML",
      participants: 2,
      isBookmarked: false,
      isAISuggested: false,
      matchScore: 78
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner": return "bg-success/20 text-success border-success/30";
      case "intermediate": return "bg-primary/20 text-primary border-primary/30";
      case "advanced": return "bg-accent/20 text-accent border-accent/30";
      default: return "bg-secondary/20 text-secondary-foreground border-secondary/30";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-6">
      <div className="max-w-lg mx-auto px-4 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Project Radar</h1>
            <Button size="icon" variant="ghost">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-10 bg-card border-card-border"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* AI Suggestions Banner */}
        <DevRadarCard gradient className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-accent" />
            <span className="font-semibold text-accent">AI-Powered Suggestions</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Projects tailored to your skills and career goals
          </p>
        </DevRadarCard>

        {/* Project Cards */}
        <div className="space-y-4">
          {projectSuggestions.map((project) => (
            <DevRadarCard key={project.id} className="relative">
              {/* AI Badge */}
              {project.isAISuggested && (
                <div className="absolute top-3 right-3 flex gap-1">
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    <Zap className="h-3 w-3 mr-1" />
                    {project.matchScore}%
                  </Badge>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-start justify-between pr-16">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} size="sm" />
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.participants} {project.participants === 1 ? "person" : "people"}
                  </div>
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" variant="gradient">
                    Start Project
                  </Button>
                  <Button size="icon" variant="outline">
                    <Bookmark className={`h-4 w-4 ${project.isBookmarked ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </div>
            </DevRadarCard>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-4">
          <Button variant="outline" className="w-full">
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  );
}