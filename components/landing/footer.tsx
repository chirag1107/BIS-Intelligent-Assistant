import React from "react";
import { Building2, Code2, AlertTriangle, ExternalLink, ShieldCheck } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="mt-auto py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Quick Links to official BIS portals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <a
            href="https://www.manakonline.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bis-navy dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            Manakonline Portal <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href="https://www.bis.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bis-navy dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            Official BIS Portal <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href="https://www.services.bis.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bis-navy dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            e-BIS Online Services <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Attribution & Hackathon Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-bis-navy dark:text-blue-400" />
            Bureau of Indian Standards (BIS) Knowledge Platform
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-bis-saffron" />
            Built for <strong>Smart India Hackathon (SIH 2026)</strong>
          </span>
        </div>

        {/* Disclaimer */}
        <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 max-w-xl leading-relaxed">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
          This is an AI-powered advisory platform based on published Bureau of Indian Standards data. Always consult the official Manakonline portal for binding statutory conformity filings.
        </p>
      </div>
    </footer>
  );
}
