import React from "react";
import { MessageSquare, Search, ShieldCheck, ExternalLink, Globe2, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface FeaturesGridProps {
  language: Language;
}

export function FeaturesGrid({ language }: FeaturesGridProps) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Interaction",
      desc: "Ask queries in plain English, Hindi, or Marathi without complex legal or engineering terminology.",
      color: "text-blue-600 bg-blue-50 dark:bg-blue-950/50 dark:text-blue-400",
    },
    {
      icon: Search,
      title: "Smart Product Search",
      desc: "Describe your product characteristics to instantly identify applicable Indian Standards (IS codes).",
      color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-400",
    },
    {
      icon: ShieldCheck,
      title: "Certification Guidance",
      desc: "Get crystal-clear requirements for ISI Mark (Scheme-I) vs Compulsory Registration Scheme (Scheme-II CRS).",
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400",
    },
    {
      icon: ExternalLink,
      title: "Source-Backed Intelligence",
      desc: "Every answer contains direct verification references and official URLs to Bureau of Indian Standards portals.",
      color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 dark:text-indigo-400",
    },
    {
      icon: Globe2,
      title: "Multilingual Support",
      desc: "Instant language toggles across English, Hindi (हिंदी), and Marathi (मराठी) with localized terminology.",
      color: "text-orange-600 bg-orange-50 dark:bg-orange-950/50 dark:text-orange-400",
    },
    {
      icon: CheckSquare,
      title: "Actionable Compliance Checklists",
      desc: "Interactive step-by-step checklists for testing labs, audits, and Manakonline portal submissions.",
      color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/50 dark:text-cyan-400",
    },
  ];

  return (
    <section id="features-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          {t.why_bis}
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Tailored tools and intelligence for manufacturers, startups, importers, and quality engineers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card
              key={idx}
              className="border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-md hover:border-bis-navy/40 dark:hover:border-blue-500/40 transition-all duration-200 group"
            >
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.desc}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
