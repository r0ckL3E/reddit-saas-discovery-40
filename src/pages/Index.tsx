
import { Header } from "@/components/layout/Header";
import { StatsBanner } from "@/components/stats/StatsBanner";
import { SubredditInput } from "@/components/input/SubredditInput";
import { BusinessContext } from "@/components/input/BusinessContext";
import { TargetQuery } from "@/components/input/TargetQuery";
import { ResultsTable } from "@/components/results/ResultsTable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchButton } from "@/components/input/SearchButton";

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
              <div className="flex gap-4 items-start mt-[72px]">
                <div className="flex-1">
                  <span className="block text-sm font-medium text-gray-700 mb-2">Business Context</span>
                  <BusinessContext />
                </div>
                <div className="pt-8">
                  <SearchButton />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <label className="block mt-[72px]">
                <span className="block text-sm font-medium text-gray-700 mb-2">Target Query</span>
                <TargetQuery />
              </label>
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
