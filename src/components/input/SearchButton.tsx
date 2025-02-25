
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const SearchButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation after 2 seconds
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <Button 
      onClick={handleClick}
      className="relative w-32 h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
    >
      <span className="relative z-10">Search</span>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,50 L 20,50 L 25,20 L 30,80 L 35,50 L 40,50 L 45,40 L 50,60 L 55,50 L 60,50 L 65,50 L 70,50 L 75,50 L 80,50 L 100,50"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className={`transition-all duration-300 ${
            isAnimating
              ? "animate-[heartbeat_2s_ease-in-out]"
              : ""
          }`}
        />
      </svg>
    </Button>
  );
};
