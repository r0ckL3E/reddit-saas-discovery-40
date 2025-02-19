
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <StatsBanner />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-1">Subreddits</span>
                <SubredditInput />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-1">Business Context</span>
                <BusinessContext />
              </label>
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-1">Target Query</span>
                <TargetQuery />
              </label>
              <div className="pt-6">
                <Button className="w-full" size="lg">
                  Search
                </Button>
              </div>
            </div>
          </div>

          <ScrollArea className="h-[600px] rounded-lg border bg-white">
            <ResultsTable />
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default Index;
