import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Dashboard } from "./Dashboard";
import { Projects } from "./Projects";
import { Community } from "./Community";
import { Profile } from "./Profile";
import devRadarHero from "@/assets/devradar-hero.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        return <Projects />;
      case "community":
        return <Community />;
      case "chat":
        return (
          <div className="min-h-screen bg-background pb-20 pt-6 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Chat Coming Soon</h2>
              <p className="text-muted-foreground">Connect with mentors and peers</p>
            </div>
          </div>
        );
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
