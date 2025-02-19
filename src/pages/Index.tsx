
import { Header } from "@/components/layout/Header";
import { StatsBanner } from "@/components/stats/StatsBanner";
import { SubredditInput } from "@/components/input/SubredditInput";
import { BusinessContext } from "@/components/input/BusinessContext";
import { TargetQuery } from "@/components/input/TargetQuery";
import { ResultsTable } from "@/components/results/ResultsTable";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <StatsBanner />
      
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Subreddits</span>
                <SubredditInput />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Business Context</span>
                <BusinessContext />
              </label>
            </div>
            <div className="space-y-6">
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Target Query</span>
                <TargetQuery />
              </label>
              <div className="pt-6">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/20" size="lg">
                  Search
                </Button>
              </div>
            </div>
          </div>

          <ScrollArea className="h-[600px] rounded-xl border bg-white/80 backdrop-blur-sm shadow-xl shadow-gray-200/50">
            <ResultsTable />
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default Index;
