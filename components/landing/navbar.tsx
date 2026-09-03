"use client";

import React from "react";
import { Sparkles, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Language } from "@/types";

interface LandingNavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onGetStarted: () => void;
}

export function LandingNavbar({
  language,
  onLanguageChange,
  onGetStarted,
}: LandingNavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: BIS Official Branding */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-bis-navy via-[#1e4480] to-blue-700 text-white shadow-md shadow-bis-navy/20">
            <Shield className="w-5 h-5 text-bis-saffron" />
            <span className="sr-only">BIS</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-white">
                BIS
              </span>
              <span className="font-bold text-sm text-bis-navy dark:text-blue-400">
                Intelligent Assistant
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
              Bureau of Indian Standards • SIH 2026
            </p>
          </div>
        </div>

        {/* Center: SIH Innovation Badge (hidden on smallest screens) */}
        <div className="hidden md:flex items-center gap-2">
          <Badge
            variant="outline"
            className="bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-300/40 dark:border-amber-700/40 px-3 py-1 rounded-full text-xs font-semibold gap-1.5 shadow-sm"
          >
            <Crown className="w-3.5 h-3.5 text-amber-500" />
            <span>Smart India Hackathon 2026</span>
          </Badge>
        </div>

        {/* Right: Language Selector & Launch CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Segmented Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                language === "en"
                  ? "bg-white dark:bg-slate-800 text-bis-navy dark:text-white shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("hi")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                language === "hi"
                  ? "bg-white dark:bg-slate-800 text-bis-navy dark:text-white shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              हिंदी
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("mr")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                language === "mr"
                  ? "bg-white dark:bg-slate-800 text-bis-navy dark:text-white shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              मराठी
            </button>
          </div>

          {/* Launch Assistant CTA */}
          <Button
            onClick={onGetStarted}
            size="sm"
            className="bg-gradient-to-r from-bis-navy to-blue-700 hover:from-bis-navy-light hover:to-blue-800 text-white font-semibold text-xs rounded-xl shadow-md shadow-bis-navy/20 gap-1.5 h-9 px-3.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-bis-saffron" />
            <span className="hidden sm:inline">Launch</span>
            <span>Assistant</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
