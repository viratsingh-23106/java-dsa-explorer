import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Java Programming Fundamentals",
    issuer: "Oracle Academy",
    date: "2024",
    type: "Programming",
    description: "Comprehensive Java programming course covering OOP principles, exception handling, and collections framework.",
    skills: ["Java", "OOP", "Collections", "Exception Handling"],
    credentialUrl: "#",
    verified: true
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    issuer: "Coding Ninjas",
    date: "2024",
    type: "DSA",
    description: "In-depth course on data structures and algorithms with hands-on coding problems and optimization techniques.",
    skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"],
    credentialUrl: "#",
    verified: true
  },
  {
    id: 3,
    title: "Web Development with Java",
    issuer: "Coursera",
    date: "2023",
    type: "Web Development",
    description: "Full-stack web development using Java, Spring Boot, and modern web technologies.",
    skills: ["Spring Boot", "REST APIs", "Database Integration", "Web Security"],
    credentialUrl: "#",
    verified: true
  },
  {
    id: 4,
    title: "Database Management Systems",
    issuer: "University Course",
    date: "2024",
    type: "Database",
    description: "Academic course covering database design, SQL, normalization, and database optimization.",
    skills: ["SQL", "Database Design", "MySQL", "Data Modeling"],
    credentialUrl: "#",
    verified: true
  }
];

const academicInfo = {
  university: "Maharishi University of Information Technology",
  degree: "Bachelor of Computer Applications (BCA)",
  batch: "2023-2026",
  currentSemester: "5th Semester",
  cgpa: "8.5/10",
  relevantCourses: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming with Java",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks",
    "Web Technologies"
  ]
};

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-accent/10">
            <Award className="h-12 w-12 text-accent" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Education & Certifications</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Academic background, professional certifications, and continuous learning journey
          in computer science and software development.
        </p>
      </div>

      {/* Academic Information */}
      <Card className="mb-8 shadow-elegant gradient-card">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-primary/20">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Academic Background</CardTitle>
              <CardDescription className="text-lg">Current Education & Studies</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">{academicInfo.degree}</h4>
                <p className="text-muted-foreground">{academicInfo.university}</p>
                <p className="text-sm text-muted-foreground">{academicInfo.batch}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Current: </span>
                  <span>{academicInfo.currentSemester}</span>
                </div>
                <div>
                  <span className="font-medium">CGPA: </span>
                  <span className="text-accent font-medium">{academicInfo.cgpa}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Relevant Coursework</h4>
              <div className="grid grid-cols-1 gap-2">
                {academicInfo.relevantCourses.map((course, index) => (
                  <div 
                    key={index}
                    className="px-3 py-2 text-sm bg-secondary/50 rounded-md border border-border/50"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
          <h3 className="text-xl font-semibold mb-4">Continuous Learning Journey</h3>
          <p className="text-muted-foreground mb-6">
            As a dedicated BCA student, I'm constantly expanding my knowledge through coursework,
            online certifications, and hands-on projects. My goal is to become a skilled software developer
            with strong fundamentals in computer science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="/resume.pdf" download>
                Download Full Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:vishal.sharma@example.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Certificates;