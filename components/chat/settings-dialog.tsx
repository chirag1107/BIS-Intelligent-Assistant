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
import { Globe, Trash2, Shield, Info, Check, Sparkles } from "lucide-react";

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
    label: string;
    native: string;
    flag: string;
    desc: string;
  }> = [
    {
      code: "en",
      label: "English",
      native: "English",
      flag: "🇬🇧",
      desc: "Default institutional English for Indian Standards",
    },
    {
      code: "hi",
      label: "Hindi",
      native: "हिन्दी",
      flag: "🇮🇳",
      desc: "भारतीय मानक ब्यूरो प्रमाणन व प्रक्रिया मार्गदर्शन",
    },
    {
      code: "mr",
      label: "Marathi",
      native: "मराठी",
      flag: "🇮🇳",
      desc: "भारतीय मानके, चाचणी पद्धती व नियमावली",
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
      <DialogContent className="max-w-md p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl">
        <DialogHeader className="space-y-1 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-bis-navy dark:text-blue-400">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-bis-navy dark:text-blue-400">
              <Sparkles className="w-5 h-5 text-bis-saffron" />
            </div>
            <div>
              <DialogTitle className="text-base font-bold text-slate-900 dark:text-white">
                Settings & Preferences
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">
                Manage language, interface and standards intelligence
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 py-2">
          {/* Language Selection */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Language / भाषा / भाषा निवडा</span>
            </label>
            <div className="grid grid-cols-1 gap-2">
              {languages.map((item) => {
                const isSelected = language === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => onLanguageChange(item.code)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-slate-900 dark:text-white shadow-sm ring-1 ring-blue-500"
                        : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl leading-none">{item.flag}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold">{item.native}</span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            ({item.label})
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chat Data & Storage */}
          {onClearAllChats && (
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Clear Conversations
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Remove all local stored chat sessions
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClear}
                  className="h-8 text-xs text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 dark:hover:bg-rose-950/40 gap-1.5 rounded-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{clearedNotice ? "Cleared!" : "Clear All"}</span>
                </Button>
              </div>
            </div>
          )}

          {/* About / Credits */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-xs">
                <Shield className="w-3.5 h-3.5 text-bis-saffron" />
                <span>BIS Intelligent Assistant</span>
              </div>
              <Badge variant="outline" className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
                v1.0 • SIH
              </Badge>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
              National Standards AI Engine for ISI certification schemes, CRS registration, and laboratory workflows.
            </p>
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
              <span>Developed by</span>
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
