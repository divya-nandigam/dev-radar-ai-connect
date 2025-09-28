import { DevRadarCard } from "@/components/DevRadarCard";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/SkillBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Plus, TrendingUp, Users, Code2 } from "lucide-react";
import { useState } from "react";

export function Community() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        role: "Full-Stack Developer",
        avatar: "/placeholder-avatar.png",
        initials: "SC"
      },
      content: "Just shipped my first React Native app! 🚀 The journey from web to mobile development has been incredible. Here are 5 key lessons I learned...",
      skills: ["React Native", "JavaScript", "Mobile Dev"],
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      type: "achievement"
    },
    {
      id: 2,
      author: {
        name: "Alex Rodriguez",
        role: "DevOps Engineer",
        avatar: "/placeholder-avatar.png",
        initials: "AR"
      },
      content: "💡 Pro tip: Always use Docker multi-stage builds for production deployments. It reduced our image size by 60% and improved deployment speed significantly!",
      skills: ["Docker", "DevOps", "Performance"],
      timestamp: "4 hours ago",
      likes: 45,
      comments: 12,
      type: "tip"
    },
    {
      id: 3,
      author: {
        name: "Maya Patel",
        role: "AI/ML Engineer",
        avatar: "/placeholder-avatar.png",
        initials: "MP"
      },
      content: "Looking for collaborators on an open-source ML project! Building a sentiment analysis tool for social media. DM me if interested! 🤖",
      skills: ["Python", "Machine Learning", "NLP"],
      timestamp: "6 hours ago",
      likes: 18,
      comments: 15,
      type: "collaboration"
    }
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const getPostIcon = (type: string) => {
    switch (type) {
      case "achievement": return TrendingUp;
      case "tip": return Code2;
      case "collaboration": return Users;
      default: return MessageCircle;
    }
  };

  const getPostColor = (type: string) => {
    switch (type) {
      case "achievement": return "text-success";
      case "tip": return "text-primary";
      case "collaboration": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-6">
      <div className="max-w-lg mx-auto px-4 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Community</h1>
          <Button size="icon" variant="gradient">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-3 gap-3">
          <DevRadarCard className="text-center">
            <Users className="h-5 w-5 text-primary mx-auto mb-1" />
            <div className="text-lg font-bold">2.4k</div>
            <div className="text-xs text-muted-foreground">Members</div>
          </DevRadarCard>
          <DevRadarCard className="text-center">
            <MessageCircle className="h-5 w-5 text-accent mx-auto mb-1" />
            <div className="text-lg font-bold">156</div>
            <div className="text-xs text-muted-foreground">Posts Today</div>
          </DevRadarCard>
          <DevRadarCard className="text-center">
            <TrendingUp className="h-5 w-5 text-success mx-auto mb-1" />
            <div className="text-lg font-bold">89%</div>
            <div className="text-xs text-muted-foreground">Active Rate</div>
          </DevRadarCard>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Latest", "Trending", "Following", "Questions"].map((tab, index) => (
            <Button
              key={tab}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => {
            const PostIcon = getPostIcon(post.type);
            const isLiked = likedPosts.includes(post.id);
            
            return (
              <DevRadarCard key={post.id}>
                <div className="space-y-3">
                  {/* Post Header */}
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.initials}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium truncate">{post.author.name}</h4>
                        <PostIcon className={`h-4 w-4 ${getPostColor(post.type)}`} />
                      </div>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                      <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed">{post.content}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {post.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} size="sm" />
                      ))}
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-card-border">
                    <div className="flex gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(post.id)}
                        className={`gap-2 ${isLiked ? "text-destructive" : "text-muted-foreground"}`}
                      >
                        <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                        {post.likes + (isLiked ? 1 : 0)}
                      </Button>
                      
                      <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </Button>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </DevRadarCard>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center pt-4">
          <Button variant="outline" className="w-full">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
}