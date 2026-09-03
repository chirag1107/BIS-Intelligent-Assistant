"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, CornerDownLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  disabled?: boolean;
  language: Language;
}

export function ChatInput({ onSendMessage, disabled = false, language }: ChatInputProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const quickChips = [
    { label: "⚡ Electric Kettle", query: "What are the BIS requirements for an electric kettle?" },
    { label: "🍲 Pressure Cooker", query: "What BIS certification is required for pressure cookers?" },
    { label: "💡 LED Lamps (CRS)", query: "What BIS standards apply to LED lamps under CRS?" },
    { label: "🧸 Children's Toys", query: "What are the mandatory BIS standards for toys?" },
    { label: "🪖 Safety Helmets", query: "What BIS standards apply to two-wheeler helmets?" },
  ];

  useEffect(() => {
    inputRef.current?.focus();
  }, [language]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="p-3 sm:p-4 border-t border-slate-200/80 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md">
      {/* Quick Suggestion Chips directly above input */}
      <div className="max-w-3xl mx-auto mb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider flex-shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-bis-saffron" />
          <span>Quick Ask:</span>
        </span>
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSendMessage(chip.query)}
            disabled={disabled}
            className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-bis-navy dark:hover:text-blue-300 text-slate-600 dark:text-slate-300 text-[11px] font-medium border border-slate-200/60 dark:border-slate-700/60 transition-all flex-shrink-0 shadow-2xs cursor-pointer hover:border-blue-400"
          >
            {chip.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex items-center gap-2">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.placeholder}
            disabled={disabled}
            className="w-full h-12 pl-4 pr-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-bis-navy dark:focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-[10px] text-slate-400 pointer-events-none">
            <CornerDownLeft className="w-3 h-3" />
          </div>
        </div>

        <Button
          type="submit"
          disabled={!input.trim() || disabled}
          className="h-12 px-5 rounded-2xl bg-gradient-to-r from-bis-navy to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-bis-navy/20 gap-2 flex-shrink-0 transition-all cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Send</span>
        </Button>
      </form>
    </div>
  );
}
