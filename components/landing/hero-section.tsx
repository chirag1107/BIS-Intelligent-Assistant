"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Globe,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface HeroSectionProps {
  onGetStarted: () => void;
  language: Language;
}

export function HeroSection({ onGetStarted, language }: HeroSectionProps) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const stats = [
    { number: "500+", label: "BIS Standards", icon: ShieldCheck },
    { number: "5", label: "Certification Schemes", icon: Layers },
    { number: "3", label: "Languages Supported", icon: Globe },
    { number: "24/7", label: "Instant AI Responses", icon: Clock },
  ];

  return (
    <section className="relative overflow-hidden pt-14 pb-16 px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[380px] bg-gradient-to-tr from-blue-100/60 via-amber-50/40 to-slate-100/50 dark:from-blue-950/30 dark:via-slate-900/30 dark:to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle SIH pill tag */}
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
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed">
          {t.hero_subtitle}
        </p>

        {/* Prominent Launch Assistant CTA Button (placed in the central yellow position) */}
        <div className="mb-14">
          <Button
            size="lg"
            onClick={() => onGetStarted()}
            className="h-14 px-8 sm:px-10 rounded-2xl bg-gradient-to-r from-bis-navy via-[#1e4480] to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-bold text-base sm:text-lg shadow-xl shadow-bis-navy/25 hover:shadow-2xl hover:shadow-bis-navy/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 gap-3 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-bis-saffron group-hover:rotate-12 transition-transform" />
            <span>Launch Assistant</span>
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
          </Button>
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
