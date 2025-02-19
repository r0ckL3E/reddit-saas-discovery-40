
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const SubredditInput = () => {
  const [subreddits, setSubreddits] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddSubreddit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.trim()) {
      const formattedInput = input.startsWith("r/") ? input : `r/${input}`;
      setSubreddits([...subreddits, formattedInput]);
      setInput("");
    }
  };

  const handleRemoveSubreddit = (subreddit: string) => {
    setSubreddits(subreddits.filter((s) => s !== subreddit));
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {subreddits.map((subreddit) => (
          <div
            key={subreddit}
            className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md hover:bg-blue-100"
          >
            {subreddit}
            <button
              onClick={() => handleRemoveSubreddit(subreddit)}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddSubreddit}
        placeholder="Add subreddits (e.g., r/Photography)"
        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/80 transition-all shadow-sm placeholder:text-gray-400"
      />
    </div>
  );
};
