"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { shortcuts } from "@/data/shortcuts";
import { motion } from "framer-motion";

interface ShortcutTabsProps {
  onShortcutClick: (prompt: string) => void;
}

export const ShortcutTabs = ({ onShortcutClick }: ShortcutTabsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-6"
    >
      <p className="mb-3 text-center text-sm text-zinc-500">
        Try these examples:
      </p>
      <Tabs defaultValue={shortcuts[0].id} className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-transparent md:grid-cols-3 lg:grid-cols-6">
          {shortcuts.map((shortcut, index) => (
            <motion.div
              key={shortcut.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              <TabsTrigger
                value={shortcut.id}
                onClick={() => onShortcutClick(shortcut.prompt)}
                className="h-auto whitespace-normal px-3 py-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {shortcut.label}
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>
      </Tabs>
    </motion.div>
  );
};
