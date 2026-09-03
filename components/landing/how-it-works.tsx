import React from "react";
import { ArrowRight, FileText, Cpu, CheckCircle2 } from "lucide-react";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface HowItWorksProps {
  language: Language;
}

export function HowItWorks({ language }: HowItWorksProps) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Describe Your Product",
      desc: "Type your product specifications, raw materials, or intended industrial use in conversational terms.",
    },
    {
      num: "02",
      icon: Cpu,
      title: "AI Analysis & Cross-Referencing",
      desc: "The assistant matches Indian Standards (IS), mandatory Quality Control Orders (QCOs), and testing schemes.",
    },
    {
      num: "03",
      icon: CheckCircle2,
      title: "Get Structured Roadmap",
      desc: "Receive specific test lists, required laboratory documentation, and an actionable interactive checklist.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          {t.how_it_works}
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          From product concept to certified BIS compliance in three simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-center text-center group hover:border-bis-navy/40 transition-all"
            >
              <div className="absolute -top-3.5 left-6 bg-bis-navy text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                {step.num}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-bis-navy dark:text-blue-400 mb-4 group-hover:bg-bis-navy group-hover:text-white transition-colors duration-300">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center text-slate-400 border border-slate-200 dark:border-slate-700">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
