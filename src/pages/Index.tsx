import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code, BarChart3, Search, Link as LinkIcon, TreePine, Network, Play, CheckCircle } from "lucide-react";

const Index = () => {
  const featuredTopics = [
    { id: "sorting", title: "Sorting", icon: BarChart3, count: 8 },
    { id: "searching", title: "Searching", icon: Search, count: 6 },
    { id: "linked-lists", title: "Linked Lists", icon: LinkIcon, count: 5 },
    { id: "trees", title: "Trees", icon: TreePine, count: 10 },
    { id: "graphs", title: "Graphs", icon: Network, count: 7 }
  ];

  const stats = [
    { label: "Problems Solved", value: "150+" },
    { label: "GitHub Repositories", value: "25+" },
    { label: "Current Semester", value: "5th" },
    { label: "DSA Rating", value: "1600+" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full gradient-hero shadow-elegant">
              <Code className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Vishal Sharma
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            BCA Student & Java Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about Data Structures & Algorithms. Currently pursuing BCA from 
            <span className="text-accent font-medium"> Maharishi University of Information Technology</span> (2023-2026).
            Solving problems, building solutions, and sharing knowledge through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/problems" className="flex items-center">
                View Problems Solved
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download className="flex items-center">
                Download Resume
                <CheckCircle className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://github.com/vishalsharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/vishalsharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:vishal.sharma@example.com"
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="py-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Topics */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Topics</h2>
          <p className="text-lg text-muted-foreground">
            Master essential data structures and algorithms with hands-on Java implementations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Link key={topic.id} to={`/topics/${topic.id}`}>
                <Card className="group cursor-pointer shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">{topic.count} algorithms</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why This Portfolio?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just code - a comprehensive learning platform with interactive features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <div className="p-3 rounded-lg bg-accent/10 w-fit">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Clean Code</CardTitle>
              <CardDescription>
                Well-documented Java implementations following best practices and industry standards
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <div className="p-3 rounded-lg bg-primary/10 w-fit">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Interactive Testing</CardTitle>
              <CardDescription>
                Run algorithms with custom inputs and see real-time output with performance metrics
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <div className="p-3 rounded-lg bg-code-function/10 w-fit">
                <CheckCircle className="h-6 w-6 text-code-function" />
              </div>
              <CardTitle>Comprehensive Tests</CardTitle>
              <CardDescription>
                Extensive unit tests and edge cases to ensure algorithm correctness and reliability
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="text-center shadow-elegant gradient-card">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive into the world of data structures and algorithms. Start with any topic
              that interests you and build your understanding step by step.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/topics" className="flex items-center justify-center">
                Start Learning Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
