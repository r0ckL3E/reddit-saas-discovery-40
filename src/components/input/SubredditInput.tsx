
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
            className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {subreddit}
            <button
              onClick={() => handleRemoveSubreddit(subreddit)}
              className="text-blue-600 hover:text-blue-800 transition-colors"
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
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};
