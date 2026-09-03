"use client";

import React from "react";
import { Shield } from "lucide-react";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
      </div>
    </header>
  );
}
