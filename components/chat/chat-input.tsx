"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, CornerDownLeft } from "lucide-react";
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
    <div className="p-4 border-t border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
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
          className="h-12 px-5 rounded-2xl bg-gradient-to-r from-bis-navy to-bis-navy-light hover:from-bis-navy-light hover:to-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-bis-navy/20 gap-2 flex-shrink-0 transition-all"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Send</span>
        </Button>
      </form>
    </div>
  );
}
