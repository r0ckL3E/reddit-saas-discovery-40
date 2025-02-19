
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8 flex-1">
          <h1 className="text-xl font-semibold text-gray-900">Reddit SaaS Discovery</h1>
          <div className="hidden md:flex relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search subreddits..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <Button variant="outline" className="ml-4">
          Sign in
        </Button>
      </div>
    </header>
  );
};
