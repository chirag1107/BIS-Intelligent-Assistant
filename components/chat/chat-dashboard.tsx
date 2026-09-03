"use client";

import React from "react";
import {
  Bot,
  Plug,
  Utensils,
  Lightbulb,
  Gamepad2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface ChatDashboardProps {
  language: Language;
  onSelectPrompt: (query: string) => void;
}

export function ChatDashboard({ language, onSelectPrompt }: ChatDashboardProps) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Curated 4 top conversational prompt cards
  const featuredPrompts = [
    {
      icon: Plug,
      category: "Household Electrical",
      title: "Electric Kettle",
      standard: "IS 302-2-15",
      description: "Mandatory high-voltage insulation & dry-boil safety tests under Scheme-I",
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200/60 dark:border-blue-800/60",
      query: "I want to manufacture an electric kettle in India. What BIS requirements and standards do I need to follow?",
    },
    {
      icon: Utensils,
      category: "Kitchen Utensils",
      title: "Pressure Cooker",
      standard: "IS 2347",
      description: "Hydrostatic proof pressure testing & QCO statutory certification requirements",
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/60",
      query: "What are the mandatory BIS standards, testing procedures, and documents needed for domestic pressure cookers?",
    },
    {
      icon: Lightbulb,
      category: "Electronics & IT",
      title: "LED Lamps (CRS)",
      standard: "IS 16102",
      description: "Self-declaration of conformity & photometric efficacy limits under CRS",
      color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200/60 dark:border-purple-800/60",
      query: "I want to import or manufacture LED lamps. What BIS CRS certification and test reports are required?",
    },
    {
      icon: Gamepad2,
      category: "Toys & Child Safety",
      title: "Children's Toys",
      standard: "IS 9873",
      description: "Mechanical physical hazards, flammability & heavy metal toxicity screening",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-800/60",
      query: "What BIS ISI mark safety standards apply for manufacturing children's toys in India?",
    },
  ];

  // Quick horizontal prompt pills for secondary popular standards
  const secondaryPills = [
    { label: "🪖 Safety Helmets (IS 4151)", query: "What BIS IS 4151 testing requirements apply for two-wheeler protective helmets?" },
    { label: "💧 Packaged Water (IS 14543)", query: "What BIS standards and in-house laboratory setup are mandatory for setting up a packaged drinking water plant?" },
    { label: "🏗️ Steel Pipes (IS 1161)", query: "I want to manufacture steel pipes for structural purposes. What BIS requirements apply?" },
    { label: "☀️ Solar PV Modules (IS 14286)", query: "What BIS CRS registration and test parameters are required for solar photovoltaic modules?" },
  ];

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 flex flex-col items-center text-center">
      {/* Robot badge */}
      <div className="mb-3 w-14 h-14 rounded-2xl bg-gradient-to-tr from-bis-navy via-blue-600 to-bis-saffron flex items-center justify-center text-white shadow-lg shadow-bis-navy/20 ring-4 ring-blue-50 dark:ring-slate-800">
        <Bot className="w-7 h-7" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-200/60 dark:border-slate-700 text-xs font-semibold text-bis-navy dark:text-blue-300 mb-2">
        <Sparkles className="w-3.5 h-3.5 text-bis-saffron" />
        <span>BIS AI Knowledge Engine</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1.5">
        {t.ask_heading}
      </h2>

      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
        {t.ask_subheading}
      </p>

      {/* 4 Featured Conversational Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-4">
        {featuredPrompts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectPrompt(item.query)}
              className="group relative p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/60 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-bis-navy dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item.standard}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-semibold text-bis-navy dark:text-blue-400">
                <span>Ask AI Assistant</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Secondary Quick Pill Strip */}
      <div className="w-full flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span>More Standards:</span>
        </span>
        {secondaryPills.map((pill, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectPrompt(pill.query)}
            className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-bis-navy dark:hover:text-blue-400 text-[11px] font-medium transition-all shadow-2xs hover:scale-102 cursor-pointer"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}
