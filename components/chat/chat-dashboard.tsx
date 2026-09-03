"use client";

import React from "react";
import {
  Bot,
  Plug,
  Utensils,
  Lightbulb,
  Gamepad2,
  Building2,
  Sun,
  Pipette,
  HardHat,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { QUICK_PROMPTS, TRANSLATIONS } from "@/lib/bis-data";
import { Language } from "@/types";

interface ChatDashboardProps {
  language: Language;
  onSelectPrompt: (query: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Plug,
  Utensils,
  Lightbulb,
  Gamepad2,
  Building2,
  Sun,
  Pipette,
  HardHat,
};

export function ChatDashboard({ language, onSelectPrompt }: ChatDashboardProps) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 text-center">
      {/* Robot badge */}
      <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-tr from-bis-navy via-blue-600 to-bis-saffron flex items-center justify-center text-white shadow-lg shadow-bis-navy/25 ring-4 ring-blue-50 dark:ring-slate-800">
        <Bot className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-200/60 dark:border-slate-700 text-xs font-semibold text-bis-navy dark:text-blue-300 mb-3">
        <Sparkles className="w-3.5 h-3.5 text-bis-saffron" />
        <span>BIS AI Knowledge Engine</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
        {t.ask_heading}
      </h2>

      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
        {t.ask_subheading}
      </p>

      {/* Quick Prompt Cards */}
      <div className="text-left mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Frequently Searched BIS Standards
        </span>
        <span className="text-[11px] text-slate-400">Click to run inquiry</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {QUICK_PROMPTS.map((item, idx) => {
          const IconComponent = ICON_MAP[item.icon] || Plug;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectPrompt(item.query)}
              className="group relative p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400/80 dark:hover:border-blue-500/60 shadow-sm hover:shadow-md transition-all duration-200 flex items-start justify-between gap-3 text-left"
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-slate-800 text-bis-navy dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:bg-bis-navy group-hover:text-white transition-colors duration-200">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-bis-navy dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    {item.standard}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-bis-saffron group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
