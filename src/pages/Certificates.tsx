import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Java Programming Masterclass",
    issuer: "Oracle",
    date: "2024",
    type: "Programming",
    description: "Comprehensive Java programming certification covering OOP, data structures, and advanced concepts.",
    skills: ["Java", "OOP", "Collections", "Multithreading"],
    credentialUrl: "#",
    verified: true
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    issuer: "LeetCode",
    date: "2024",
    type: "Algorithms",
    description: "Advanced certification in algorithmic problem solving and data structure implementation.",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Time Complexity"],
    credentialUrl: "#",
    verified: true
  },
  {
    id: 3,
    title: "Software Engineering Principles",
    issuer: "MIT OpenCourseWare",
    date: "2023",
    type: "Engineering",
    description: "Fundamentals of software engineering, design patterns, and best practices.",
    skills: ["Design Patterns", "Software Architecture", "Testing", "Debugging"],
    credentialUrl: "#",
    verified: true
  }
];

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-accent/10">
            <Award className="h-12 w-12 text-accent" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Certifications & Achievements</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional certifications and achievements in Java programming,
          data structures, algorithms, and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {certificates.map((cert) => (
          <Card key={cert.id} className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{cert.type}</Badge>
                    {cert.verified && (
                      <Badge variant="default" className="bg-accent text-accent-foreground">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </div>
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardDescription className="text-base">
                {cert.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Skills Covered:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-secondary rounded-md font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  View Credential
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="text-center shadow-card">
        <CardContent className="py-8">
          <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground mb-6">
            I'm constantly expanding my knowledge and earning new certifications.
            Check back regularly for updates on my latest achievements.
          </p>
          <Button variant="hero">
            Contact Me for Latest Updates
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Certificates;