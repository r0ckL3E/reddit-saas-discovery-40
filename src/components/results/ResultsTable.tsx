
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Result {
  id: number;
  opportunity: string;
  date: string;
  category: string;
  subreddit: string;
  snippet: string;
  secondarySoftware: string;
  rank: "High" | "Medium" | "Low";
}

const mockResults: Result[] = [
  {
    id: 1,
    opportunity: "Photo Management Solution",
    date: "2024-02-15",
    category: "Content Management",
    subreddit: "r/Photography",
    snippet: "Looking for a better way to organize and share photos with clients...",
    secondarySoftware: "Dropbox",
    rank: "High",
  },
  {
    id: 2,
    opportunity: "Team Collaboration Tool",
    date: "2024-02-14",
    category: "Productivity",
    subreddit: "r/Freelance",
    snippet: "Need a tool for managing project timelines and communication...",
    secondarySoftware: "Slack",
    rank: "Medium",
  },
];

export const ResultsTable = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const toggleRow = (id: number) => {
    setExpandedRows((current) =>
      current.includes(id)
        ? current.filter((rowId) => rowId !== id)
        : [...current, id]
    );
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  const getRankColor = (rank: string) => {
    const colors = {
      High: "bg-priority-high",
      Medium: "bg-priority-medium",
      Low: "bg-priority-low",
    };
    return colors[rank as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="rounded-lg border bg-white">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSort("date")}
            className="flex items-center gap-1"
          >
            Date
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Opportunity</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Subreddit</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockResults.map((result) => (
            <>
              <TableRow key={result.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{result.opportunity}</TableCell>
                <TableCell>{result.date}</TableCell>
                <TableCell>{result.category}</TableCell>
                <TableCell>{result.subreddit}</TableCell>
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
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleRow(result.id)}
                  >
                    {expandedRows.includes(result.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
              {expandedRows.includes(result.id) && (
                <TableRow>
                  <TableCell colSpan={6} className="bg-gray-50">
                    <div className="p-4 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Text Snippet</h4>
                        <p className="text-gray-600">{result.snippet}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Secondary Software</h4>
                        <p className="text-gray-600">{result.secondarySoftware}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700"
                        onClick={() => window.open("https://reddit.com", "_blank")}
                      >
                        View Original Post
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
