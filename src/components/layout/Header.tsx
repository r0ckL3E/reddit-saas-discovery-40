
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200/80 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8 flex-1">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Reddit SaaS Discovery
          </h1>
          <div className="hidden md:flex relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search subreddits..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50/80 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/80 transition-all"
            />
          </div>
        </div>
        <Button variant="outline" className="ml-4 rounded-full hover:bg-gray-50/80">
          Sign in
        </Button>
      </div>
    </header>
  );
};
