import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BarChart3, Search, Link as LinkIcon, TreePine, Network } from "lucide-react";

const topics = [
  {
    id: "sorting",
    title: "Sorting Algorithms",
    description: "Master fundamental sorting techniques with Java implementations",
    icon: BarChart3,
    algorithms: ["Quick Sort", "Merge Sort", "Heap Sort", "Bubble Sort"],
    difficulty: "Beginner to Advanced",
    count: 8
  },
  {
    id: "searching",
    title: "Searching Algorithms",
    description: "Efficient search strategies and their time complexities",
    icon: Search,
    algorithms: ["Binary Search", "Linear Search", "Depth-First Search", "Breadth-First Search"],
    difficulty: "Beginner to Intermediate",
    count: 6
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    description: "Dynamic data structures and pointer manipulation",
    icon: LinkIcon,
    algorithms: ["Singly Linked List", "Doubly Linked List", "Circular Linked List"],
    difficulty: "Beginner to Intermediate",
    count: 5
  },
  {
    id: "trees",
    title: "Trees & Binary Trees",
    description: "Hierarchical data structures and tree traversal algorithms",
    icon: TreePine,
    algorithms: ["Binary Search Tree", "AVL Tree", "Tree Traversals", "Heap"],
    difficulty: "Intermediate to Advanced",
    count: 10
  },
  {
    id: "graphs",
    title: "Graph Algorithms",
    description: "Complex network problems and pathfinding solutions",
    icon: Network,
    algorithms: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Topological Sort"],
    difficulty: "Advanced",
    count: 7
  }
];

const Topics = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Data Structures & Algorithms</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore comprehensive Java implementations of essential DSA concepts.
          Each topic includes detailed explanations, code examples, and test cases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => {
          const IconComponent = topic.icon;
          return (
            <Card key={topic.id} className="group shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {topic.count} algorithms
                  </span>
                </div>
                <CardTitle className="text-xl">{topic.title}</CardTitle>
                <CardDescription className="text-base">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {topic.difficulty}
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Featured Algorithms:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.algorithms.slice(0, 3).map((algorithm) => (
                      <span
                        key={algorithm}
                        className="px-2 py-1 text-xs bg-secondary rounded-md font-mono"
                      >
                        {algorithm}
                      </span>
                    ))}
                    {topic.algorithms.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                        +{topic.algorithms.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  asChild
                >
                  <Link to={`/topics/${topic.id}`} className="flex items-center justify-center">
                    Explore Topic
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;