"use client";

import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Layers,
  Globe,
  Clock,
  Sparkles,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface HeroSectionProps {
  onGetStarted: (initialQuery?: string) => void;
  language: Language;
}

export function HeroSection({ onGetStarted, language }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const quickPills = [
    { label: "⚡ Electric Kettle", query: "What are the BIS requirements for an electric kettle?" },
    { label: "🍲 Pressure Cooker", query: "What BIS certification is required for pressure cookers?" },
    { label: "💡 LED Lamps (CRS)", query: "What BIS standards apply to LED lamps under CRS?" },
    { label: "🧸 Children's Toys", query: "What are the mandatory BIS standards for toys?" },
    { label: "🪖 Safety Helmets", query: "What BIS standards apply to two-wheeler helmets?" },
  ];

  const stats = [
    { number: "500+", label: "BIS Standards", icon: ShieldCheck },
    { number: "5", label: "Certification Schemes", icon: Layers },
    { number: "3", label: "Languages Supported", icon: Globe },
    { number: "24/7", label: "Instant AI Responses", icon: Clock },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGetStarted(searchQuery.trim() || undefined);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[380px] bg-gradient-to-tr from-blue-100/60 via-amber-50/40 to-slate-100/50 dark:from-blue-950/30 dark:via-slate-900/30 dark:to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-6 shadow-xs">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Smart India Hackathon 2026</span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="text-bis-navy dark:text-blue-400">BIS Intelligent Engine</span>
        </div>

        {/* Clean, high-impact Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
          BIS Intelligent{" "}
          <span className="bg-gradient-to-r from-bis-navy via-blue-600 to-bis-saffron bg-clip-text text-transparent">
            Assistant
          </span>
        </h1>

        {/* Clean, readable Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
          {t.hero_subtitle}
        </p>

        {/* Direct Interactive Search Box (Perplexity style - Clean & Focused) */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl relative flex items-center bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500/70 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 dark:focus-within:ring-blue-950/50 shadow-lg shadow-slate-200/50 dark:shadow-black/40 transition-all p-2 mb-4"
        >
          <div className="pl-3 pr-2 text-slate-400">
            <Search className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask about any product, IS code, or testing procedure..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 outline-none px-2 py-2"
          />

          <Button
            type="submit"
            className="rounded-xl px-5 py-2.5 bg-gradient-to-r from-bis-navy to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-bis-navy/20 gap-1.5 flex-shrink-0"
          >
            <span>Ask AI</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl text-xs">
          <span className="text-slate-400 dark:text-slate-500 font-medium">Try asking:</span>
          {quickPills.map((pill, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onGetStarted(pill.query)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-bis-navy dark:hover:text-blue-400 transition-all shadow-xs"
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Minimal, Connected Stats Bar */}
        <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs backdrop-blur-sm">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-2">
                <div className="flex items-center gap-1.5 text-bis-navy dark:text-blue-400 mb-1">
                  <Icon className="w-4 h-4 text-bis-saffron" />
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    {stat.number}
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
