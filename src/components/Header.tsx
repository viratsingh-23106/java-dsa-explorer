import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Code, Home, BookOpen, Award } from "lucide-react";

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-primary p-2">
            <Code className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">Java DSA Portfolio</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium ml-8">
          <Link
            to="/"
            className={`transition-colors hover:text-foreground/80 ${
              isActive("/") ? "text-foreground" : "text-foreground/60"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </div>
          </Link>
          <Link
            to="/topics"
            className={`transition-colors hover:text-foreground/80 ${
              isActive("/topics") ? "text-foreground" : "text-foreground/60"
            }`}
          >
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Topics</span>
            </div>
          </Link>
          <Link
            to="/certificates"
            className={`transition-colors hover:text-foreground/80 ${
              isActive("/certificates") ? "text-foreground" : "text-foreground/60"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Certificates</span>
            </div>
          </Link>
        </nav>

        <div className="ml-auto">
          <Button variant="hero" asChild>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <span>View on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};