"use client";

import React from "react";
import {
  Bot,
  Sparkles,
  Plug,
  Utensils,
  Lightbulb,
  Gamepad2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Language } from "@/types";

interface ChatDashboardProps {
  language?: Language;
  onSelectPrompt?: (query: string) => void;
}

export function ChatDashboard({ onSelectPrompt }: ChatDashboardProps) {
  const quickPrompts = [
    {
      icon: Plug,
      category: "Household Electrical",
      title: "Electric Kettle",
      standard: "IS 302-2-15",
      description: "High-voltage surge insulation, earthing continuity & dry-boil safety tests.",
      badgeColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200/80 dark:border-blue-800/80",
      iconColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800",
      query: "I want to manufacture an electric kettle in India. What BIS requirements and standards do I need to follow?",
    },
    {
      icon: Utensils,
      category: "Kitchen Utensils",
      title: "Pressure Cooker",
      standard: "IS 2347",
      description: "Hydrostatic proof pressure resistance, safety relief valves & mandatory QCO certification.",
      badgeColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200/80 dark:border-amber-800/80",
      iconColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800",
      query: "What are the mandatory BIS standards, testing procedures, and documents needed for domestic pressure cookers?",
    },
    {
      icon: Lightbulb,
      category: "Electronics & CRS",
      title: "LED Lamps & CRS",
      standard: "IS 16102",
      description: "Photometric efficacy limits, lumen maintenance & Self-Declaration of Conformity.",
      badgeColor: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border-purple-200/80 dark:border-purple-800/80",
      iconColor: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800",
      query: "I want to import or manufacture LED lamps. What BIS CRS certification and test reports are required?",
    },
    {
      icon: Gamepad2,
      category: "Toys & Child Safety",
      title: "Children's Toys",
      standard: "IS 9873",
      description: "Physical sharp edges, drop impact resistance, flammability & non-toxic testing.",
      badgeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200/80 dark:border-emerald-800/80",
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800",
      query: "What BIS ISI mark safety standards apply for manufacturing children's toys in India?",
    },
  ];

  return (
    <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center select-none py-2 sm:py-4 animate-in fade-in duration-500">
      {/* 1. Futuristic Animated AI Core */}
      <div className="relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 mb-2">
        {/* Layer 1: Ambient Rotating Aurora Glow */}
        <div className="absolute inset-2 rounded-full bg-[conic-gradient(from_0deg,#1e40af,#3b82f6,#ff9933,#38bdf8,#1e40af)] blur-2xl opacity-50 dark:opacity-65 animate-spin-aurora pointer-events-none" />

        {/* Layer 2: Expanding Radar Wave 1 */}
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-blue-400/60 dark:border-blue-400/40 bg-blue-500/10 dark:bg-blue-400/5 animate-pulse-radar-1 pointer-events-none" />

        {/* Layer 3: Expanding Radar Wave 2 (Delayed) */}
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-amber-400/50 dark:border-amber-400/30 bg-amber-500/10 dark:bg-amber-400/5 animate-pulse-radar-2 pointer-events-none" />

        {/* Layer 4: Orbital Track with Orbiting Saffron Spark */}
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-blue-300/30 dark:border-slate-700/60 pointer-events-none flex items-center justify-center">
          <div className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_12px_#ff9933] animate-orbit-1" />
        </div>

        {/* Layer 5: Orbital Track with Orbiting Cyan Spark */}
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-slate-300/40 dark:border-slate-700/40 pointer-events-none flex items-center justify-center">
          <div className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_12px_#38bdf8] animate-orbit-2" />
        </div>

        {/* Layer 6: Central Floating AI Avatar with Dynamic Equalizer */}
        <div className="relative z-10 animate-float-smooth cursor-pointer group">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl sm:rounded-[2rem] bg-gradient-to-tr from-bis-navy via-blue-600 to-bis-saffron p-1 animate-core-glow group-hover:scale-105 transition-transform duration-300">
            {/* Inner Glass Core with Bot Logo & Sparkle */}
            <div className="w-full h-full rounded-[1.4rem] sm:rounded-[1.8rem] bg-gradient-to-br from-blue-900/95 via-blue-700/85 to-[#1e3a8a]/95 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden border border-white/25">
              {/* Sparkle in top right */}
              <Sparkles className="absolute top-2.5 right-2.5 w-3.5 h-3.5 text-white/90 animate-pulse drop-shadow-sm" />

              {/* Bot Icon - Perfectly Centered */}
              <div className="flex items-center justify-center select-none transition-transform duration-300 group-hover:scale-110">
                <Bot className="w-11 h-11 sm:w-13 sm:h-13 text-white stroke-[2.3] drop-shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 dark:bg-slate-800/90 border border-blue-200/60 dark:border-slate-700 text-xs font-semibold text-bis-navy dark:text-blue-300 mb-5 shadow-2xs">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        <span>BIS AI Knowledge Engine • Ready</span>
      </div>

      {/* 3. Curated Quick Inquiries Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {quickPrompts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectPrompt?.(item.query)}
              className="group p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/60 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${item.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-bis-navy dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${item.badgeColor}`}>
                    {item.standard}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mb-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-bis-navy dark:text-blue-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>Click to Ask AI</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
