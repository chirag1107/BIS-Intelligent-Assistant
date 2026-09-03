"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  onOpenStandards?: () => void;
  disabled?: boolean;
  language: Language;
}

export function ChatInput({
  onSendMessage,
  onOpenStandards,
  disabled = false,
  language,
}: ChatInputProps) {
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
    <div className="w-full px-4 pt-2 pb-6 sm:pb-8 bg-gradient-to-t from-slate-100/90 via-slate-50/60 to-transparent dark:from-slate-950 dark:via-slate-950/60">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50 focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 dark:focus-within:ring-blue-950/50 p-2 sm:p-2.5 gap-2 transition-all duration-200"
        >
          {/* Search Icon & Prompt Input */}
          <div className="flex-1 flex items-center pl-2 sm:pl-3 min-w-0">
            <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-2.5 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about any product, IS standard, test requirement, or BIS scheme..."
              disabled={disabled}
              className="w-full h-11 bg-transparent text-slate-900 dark:text-slate-100 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none pr-2"
            />
          </div>

          {/* Explore Standards Button (Positioned in input bar) */}
          {onOpenStandards && (
            <Button
              type="button"
              variant="outline"
              onClick={onOpenStandards}
              className="h-11 px-3 sm:px-4 rounded-xl sm:rounded-2xl border-2 border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-bis-navy dark:text-blue-300 font-bold text-xs sm:text-sm gap-2 shadow-2xs hover:shadow-sm transition-all flex-shrink-0 cursor-pointer"
              title="Browse Indian Standards Directory & Pre-built Inquiries"
            >
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">Explorer</span>
              <span className="sm:hidden">Standards</span>
            </Button>
          )}

          {/* Send Button */}
          <Button
            type="submit"
            disabled={!input.trim() || disabled}
            className="h-11 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-bis-navy to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-bis-navy/20 gap-1.5 flex-shrink-0 transition-all cursor-pointer"
          >
            <span className="hidden sm:inline">Send</span>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
