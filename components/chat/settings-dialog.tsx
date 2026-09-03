"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Language } from "@/types";
import {
  Globe,
  Trash2,
  Shield,
  Check,
  Sparkles,
} from "lucide-react";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onClearAllChats?: () => void;
}

export function SettingsDialog({
  open,
  onOpenChange,
  language,
  onLanguageChange,
  onClearAllChats,
}: SettingsDialogProps) {
  const [clearedNotice, setClearedNotice] = useState(false);

  const languages: Array<{
    code: Language;
    short: string;
    label: string;
    native: string;
    sub: string;
  }> = [
    {
      code: "en",
      short: "EN",
      label: "English",
      native: "English",
      sub: "Standard English",
    },
    {
      code: "hi",
      short: "हिं",
      label: "Hindi",
      native: "हिन्दी",
      sub: "भारतीय मानक",
    },
    {
      code: "mr",
      short: "म",
      label: "Marathi",
      native: "मराठी",
      sub: "मानके व नियम",
    },
  ];

  const handleClear = () => {
    if (confirm("Are you sure you want to delete all saved conversations?")) {
      if (onClearAllChats) {
        onClearAllChats();
      }
      setClearedNotice(true);
      setTimeout(() => setClearedNotice(false), 2500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-3xl">
        {/* Header with subtle gradient */}
        <div className="px-6 pt-6 pb-4 bg-gradient-to-b from-blue-50/60 via-slate-50/30 to-transparent dark:from-slate-800/40 dark:to-transparent border-b border-slate-100 dark:border-slate-800/80">
          <DialogHeader className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-bis-navy via-[#1e4480] to-blue-700 text-white flex items-center justify-center shadow-md shadow-bis-navy/20">
                <Sparkles className="w-5 h-5 text-bis-saffron" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-slate-900 dark:text-white">
                  Settings & Preferences
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">
                  Manage language, AI engine stack, and conversation data
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* 1. Language Selection (Clean 3-Grid Cards) */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Language / भाषा / भाषा निवडा</span>
              </label>
              <span className="text-[11px] text-slate-400 font-medium">3 Supported</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {languages.map((item) => {
                const isSelected = language === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => onLanguageChange(item.code)}
                    className={`relative flex flex-col items-center justify-between p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? "border-blue-600 bg-blue-50/80 dark:bg-blue-950/40 text-slate-900 dark:text-white shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 hover:border-slate-300 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {/* Selected Check Badge */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                    )}

                    {/* Short Badge */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs mb-2 transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700"
                      }`}
                    >
                      {item.short}
                    </div>

                    {/* Label & Subtitle */}
                    <div className="w-full">
                      <div className="text-xs font-bold leading-tight truncate">
                        {item.native}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                        {item.label}
                      </div>
                      <div className="text-[9px] text-slate-400 dark:text-slate-500 mt-1 font-medium truncate">
                        {item.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Chat Data Management */}
          {onClearAllChats && (
            <div className="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 flex items-center justify-between gap-3">
              <div>
                <h4 className="text-xs font-bold text-rose-950 dark:text-rose-200">
                  Clear All Chat Sessions
                </h4>
                <p className="text-[11px] text-rose-600/80 dark:text-rose-400 mt-0.5">
                  Reset local conversations and checklist status
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleClear}
                className="h-8 px-3 text-xs font-bold text-rose-600 dark:text-rose-300 border-rose-300 dark:border-rose-800 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-700 transition-colors gap-1.5 rounded-xl shadow-2xs flex-shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{clearedNotice ? "Deleted!" : "Clear All"}</span>
              </Button>
            </div>
          )}

          {/* 4. Official BIS & SIH 2026 Credits */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-bis-navy/5 via-blue-50/30 to-amber-50/20 dark:from-slate-800/60 dark:to-slate-800/30 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-bis-navy text-white flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-bis-saffron" />
                </div>
                <div>
                  <span className="font-bold text-xs text-slate-900 dark:text-white">
                    BIS Intelligent Assistant
                  </span>
                  <span className="text-[10px] text-slate-400 ml-1.5">v1.0</span>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-300/40 text-[10px] font-bold py-0.5 px-2 rounded-lg"
              >
                SIH 2026
              </Badge>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Automated Indian Standards discovery, ISI mark compliance guidance, and statutory testing advisory.
            </p>
            <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Team</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                <span className="text-bis-saffron">⚡</span> LYNOX
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
