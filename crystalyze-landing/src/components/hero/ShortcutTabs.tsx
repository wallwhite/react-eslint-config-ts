"use client";

import { motion } from "framer-motion";
import { shortcuts } from "@/data/shortcuts";

interface ShortcutTabsProps {
  onTabClick: (prompt: string) => void;
}

export const ShortcutTabs = ({ onTabClick }: ShortcutTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {shortcuts.map((shortcut, index) => (
        <motion.button
          key={shortcut.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onTabClick(shortcut.prompt)}
          className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
        >
          {shortcut.label}
        </motion.button>
      ))}
    </div>
  );
};
