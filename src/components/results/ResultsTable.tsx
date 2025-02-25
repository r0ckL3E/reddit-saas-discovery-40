
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

interface Result {
  id: number;
  title: string;
  author: string;
  score: number;
  comments: number;
  created: string;
  url: string;
  why: string;
  rank: "High" | "Medium" | "Low";
}

const mockResults: Result[] = [
  {
    id: 1,
    title: "Looking for a better way to manage client photos",
    author: "photographyPro",
    score: 264,
    comments: 45,
    created: "2024-02-15, 8:33:27 PM",
    url: "https://reddit.com/r/photography/post1",
    why: "User explicitly mentions struggling with current photo management solutions. High engagement suggests common pain point.",
    rank: "High",
  },
  {
    id: 2,
    title: "Need recommendations for team collaboration software",
    author: "projectManager",
    score: 157,
    comments: 32,
    created: "2024-02-14, 3:15:12 PM",
    url: "https://reddit.com/r/freelance/post2",
    why: "Active discussion about collaboration tools indicates market opportunity. Multiple pain points mentioned.",
    rank: "Medium",
  },
];

export const ResultsTable = () => {
  const getRankColor = (rank: string) => {
    const colors = {
      High: "bg-priority-high",
      Medium: "bg-priority-medium",
      Low: "bg-priority-low",
    };
    return colors[rank as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-gray-600">Title</TableHead>
            <TableHead className="text-gray-600">Author</TableHead>
            <TableHead className="text-gray-600 text-right">Score</TableHead>
            <TableHead className="text-gray-600 text-right">Comments</TableHead>
            <TableHead className="text-gray-600">Created</TableHead>
            <TableHead className="text-gray-600">Why</TableHead>
            <TableHead className="text-gray-600">Priority</TableHead>
            <TableHead className="text-gray-600">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockResults.map((result) => (
            <TableRow key={result.id} className="hover:bg-gray-50/50">
              <TableCell className="font-medium">
                <a 
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {result.title}
                </a>
              </TableCell>
              <TableCell>{result.author}</TableCell>
              <TableCell className="text-right">{result.score}</TableCell>
              <TableCell className="text-right">{result.comments}</TableCell>
              <TableCell>{result.created}</TableCell>
              <TableCell>
                <HoverCard>
                  <HoverCardTrigger>
                    <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        {result.why}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell>
                <Badge
                  className={`${getRankColor(
                    result.rank
                  )} text-white hover:opacity-90`}
                >
                  {result.rank}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Mark as Checked
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
