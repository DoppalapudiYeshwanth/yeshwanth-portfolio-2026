import React from "react";
import { Sparkle } from "lucide-react";
import { marqueeItems } from "../data/portfolioData";

export default function Marquee() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-[#1A1A1A] text-white py-3.5 overflow-hidden border-y border-neutral-800">
      <div className="animate-marquee items-center gap-8">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="text-sm sm:text-base font-bold tracking-tight whitespace-nowrap">
              {item}
            </span>
            <Sparkle className="w-4 h-4 text-[#F5A623] fill-[#F5A623] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}