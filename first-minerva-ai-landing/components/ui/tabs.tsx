"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const Tabs = ({ tabs, activeTab, onTabChange, className }: TabsProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-all",
            activeTab === tab
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export { Tabs };
