import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Calendar, Github, Trophy, Target } from "lucide-react";

const problems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode",
    difficulty: "Easy",
    topic: "Array",
    date: "2024-01-15",
    description: "Find two numbers in an array that add up to a target sum.",
    approach: "Hash Map for O(n) solution",
    githubUrl: "https://github.com/vishalsharma/dsa-solutions/blob/main/arrays/TwoSum.java",
    problemUrl: "https://leetcode.com/problems/two-sum/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)"
  },
  {
    id: 2,
    title: "Binary Tree Inorder Traversal",
    platform: "LeetCode",
    difficulty: "Easy",
    topic: "Tree",
    date: "2024-01-18",
    description: "Return the inorder traversal of a binary tree's nodes' values.",
    approach: "Recursive and Iterative solutions",
    githubUrl: "https://github.com/vishalsharma/dsa-solutions/blob/main/trees/InorderTraversal.java",
    problemUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)"
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    platform: "LeetCode",
    difficulty: "Easy",
    topic: "Linked List",
    date: "2024-01-20",
    description: "Merge two sorted linked lists and return as a new sorted list.",
    approach: "Two-pointer technique with dummy node",
    githubUrl: "https://github.com/vishalsharma/dsa-solutions/blob/main/linkedlist/MergeTwoLists.java",
    problemUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
    timeComplexity: "O(n+m)",
    spaceComplexity: "O(1)"
  },
  {
    id: 4,
    title: "Longest Substring Without Repeating Characters",
    platform: "LeetCode",
    difficulty: "Medium",
    topic: "String",
    date: "2024-01-25",
    description: "Find the length of the longest substring without repeating characters.",
    approach: "Sliding window with hash set",
    githubUrl: "https://github.com/vishalsharma/dsa-solutions/blob/main/strings/LongestSubstring.java",
    problemUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(m,n))"
  },
  {
    id: 5,
    title: "Valid Parentheses",
    platform: "LeetCode",
    difficulty: "Easy",
    topic: "Stack",
    date: "2024-01-28",
    description: "Determine if the input string of parentheses is valid.",
    approach: "Stack-based solution for matching pairs",
    githubUrl: "https://github.com/vishalsharma/dsa-solutions/blob/main/stacks/ValidParentheses.java",
    problemUrl: "https://leetcode.com/problems/valid-parentheses/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)"
  },
  {
    id: 6,
    title: "Maximum Subarray",
    platform: "LeetCode",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    date: "2024-02-01",
    description: "Find the contiguous subarray with the largest sum.",
    approach: "Kadane's Algorithm for optimal solution",
    githubUrl: "https://github.com/vishalsharma/dsa-solutions/blob/main/dp/MaxSubarray.java",
    problemUrl: "https://leetcode.com/problems/maximum-subarray/",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)"
  }
];

const difficultyColors = {
  Easy: "bg-green-500/10 text-green-500 border-green-500/20",
  Medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Hard: "bg-red-500/10 text-red-500 border-red-500/20"
};

const Problems = () => {
  const totalProblems = problems.length;
  const easyCount = problems.filter(p => p.difficulty === "Easy").length;
  const mediumCount = problems.filter(p => p.difficulty === "Medium").length;
  const hardCount = problems.filter(p => p.difficulty === "Hard").length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/10">
            <Trophy className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Problems Solved</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of Data Structure and Algorithm problems I've solved on various platforms,
          with detailed solutions and explanations available on GitHub.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center shadow-card">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-primary mb-1">{totalProblems}</div>
            <div className="text-sm text-muted-foreground">Total Solved</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-green-500 mb-1">{easyCount}</div>
            <div className="text-sm text-muted-foreground">Easy</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-yellow-500 mb-1">{mediumCount}</div>
            <div className="text-sm text-muted-foreground">Medium</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card">
          <CardContent className="py-4">
            <div className="text-2xl font-bold text-red-500 mb-1">{hardCount}</div>
            <div className="text-sm text-muted-foreground">Hard</div>
          </CardContent>
        </Card>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {problems.map((problem) => (
          <Card key={problem.id} className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <Badge 
                      variant="outline" 
                      className={difficultyColors[problem.difficulty as keyof typeof difficultyColors]}
                    >
                      {problem.difficulty}
                    </Badge>
                    <Badge variant="secondary">{problem.topic}</Badge>
                    <Badge variant="outline">{problem.platform}</Badge>
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </div>
                <div className="p-2 rounded-lg bg-accent/10">
                  <Code className="h-6 w-6 text-accent" />
                </div>
              </div>
              <CardDescription className="text-base">
                {problem.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Approach:</p>
                <p className="text-sm text-muted-foreground">{problem.approach}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Time: </span>
                  <span className="font-mono text-accent">{problem.timeComplexity}</span>
                </div>
                <div>
                  <span className="font-medium">Space: </span>
                  <span className="font-mono text-accent">{problem.spaceComplexity}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Solved on {new Date(problem.date).toLocaleDateString()}</span>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a 
                    href={problem.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a 
                    href={problem.problemUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Problem
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* GitHub CTA */}
      <Card className="text-center shadow-card">
        <CardContent className="py-8">
          <h3 className="text-xl font-semibold mb-4">Explore More Solutions</h3>
          <p className="text-muted-foreground mb-6">
            Check out my complete repository of DSA solutions with detailed explanations,
            test cases, and multiple approaches for each problem.
          </p>
          <Button variant="hero" asChild>
            <a 
              href="https://github.com/vishalsharma/dsa-solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Solutions on GitHub
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Problems;