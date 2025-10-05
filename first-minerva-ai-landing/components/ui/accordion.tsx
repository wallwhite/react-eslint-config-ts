"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline"
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-sm text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}

const Accordion = ({ items, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export { Accordion };
