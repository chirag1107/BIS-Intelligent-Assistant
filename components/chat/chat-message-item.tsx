"use client";

import React, { useState } from "react";
import {
  Bot,
  User,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  ShieldAlert,
  FileCheck,
  FlaskConical,
  ListTodo,
  Milestone,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChatMessage, Language } from "@/types";
import { TRANSLATIONS } from "@/lib/bis-data";

interface ChatMessageItemProps {
  message: ChatMessage;
  language: Language;
  onToggleChecklist: (messageId: string, checklistItemId: string) => void;
}

export function ChatMessageItem({
  message,
  language,
  onToggleChecklist,
}: ChatMessageItemProps) {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const isUser = message.type === "user";
  const standard = message.standardData;

  const handleCopy = () => {
    if (!message.text && !standard) return;
    let contentToCopy = message.text;
    if (standard) {
      contentToCopy = `BIS Standard: ${standard.standard} (${standard.name})
Scheme: ${standard.scheme}
Status: ${standard.certification_status}
Testing: ${standard.testing.join(", ")}
Documents: ${standard.documents.join(", ")}
Process: ${standard.process}
Source: ${standard.source_url}`;
    }
    navigator.clipboard.writeText(contentToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isUser) {
    return (
      <div className="flex justify-end mb-4 animate-in fade-in-50 duration-200">
        <div className="flex items-end gap-2 max-w-[85%] sm:max-w-[75%]">
          <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-bis-navy to-bis-navy-light text-white px-4 py-3 shadow-md text-xs sm:text-sm">
            <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
            <span className="block text-[10px] text-blue-200 text-right mt-1 opacity-80">
              {message.timestamp}
            </span>
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 flex-shrink-0 mb-1">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-6 animate-in fade-in-50 duration-200">
      <div className="flex items-start gap-2.5 max-w-[95%] sm:max-w-[90%] w-full">
        {/* Bot Avatar */}
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-bis-navy to-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-900/20 mt-1">
          <Bot className="w-4 h-4" />
        </div>

        {/* Bot Card */}
        <div className="flex-1 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-4 sm:p-5 text-slate-800 dark:text-slate-100">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-bis-navy dark:text-blue-400">
                BIS Intelligent Assistant
              </span>
              {standard?.category && (
                <Badge variant="secondary" className="text-[10px] font-medium py-0 px-2">
                  {standard.category}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 px-2 text-[11px] text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 gap-1 rounded-lg"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>{t.copy}</span>
                  </>
                )}
              </Button>
              <span className="text-[10px] text-slate-400 font-mono">{message.timestamp}</span>
            </div>
          </div>

          {/* Standard Highlights (If identified) */}
          {standard ? (
            <div className="space-y-4 text-xs sm:text-sm">
              {/* Status and Scheme Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="saffron"
                  className="font-bold tracking-wide text-xs px-3 py-1 rounded-lg flex items-center gap-1.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-bis-saffron" />
                  <span>{standard.certification_status === "MANDATORY" ? t.cert_required : t.cert_not_required}</span>
                </Badge>

                <Badge
                  variant="scheme"
                  className="font-semibold text-xs px-3 py-1 rounded-lg"
                >
                  {standard.scheme}
                </Badge>
              </div>

              {/* Summary */}
              <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <h4 className="text-xs font-bold text-bis-navy dark:text-blue-300 flex items-center gap-1.5 mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-bis-saffron" />
                  {t.summary}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {standard.summary}
                </p>
              </div>

              {/* Standard Identification */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  {t.applicable_standard}
                </h4>
                <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <p>
                    <strong className="text-slate-900 dark:text-white">Standard Code:</strong>{" "}
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                      {standard.standard}
                    </span>
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-white">Full Title:</strong>{" "}
                    {standard.standard_full}
                  </p>
                </div>
              </div>

              {/* Testing Requirements */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-2">
                  <FlaskConical className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  {t.testing_requirements}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-medium">
                  {standard.testing_simple}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {standard.testing.map((test, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 flex items-center"
                    >
                      {test}
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-2">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {t.documents_required}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {standard.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-mono text-[10px] mt-0.5">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Steps */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1.5">
                  <Milestone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  {t.process}
                </h4>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {standard.process}
                </p>
              </div>

              {/* Interactive Compliance Checklist */}
              {message.checklist && message.checklist.length > 0 && (
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-800/80 dark:to-orange-950/20 border border-orange-200/60 dark:border-orange-900/40">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-2.5">
                    <ListTodo className="w-4 h-4 text-bis-saffron" />
                    <span>{t.compliance_checklist}</span>
                  </h4>
                  <div className="space-y-2">
                    {message.checklist.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all cursor-pointer text-xs select-none"
                      >
                        <input
                          type="checkbox"
                          checked={item.completed}
                          onChange={() => onToggleChecklist(message.id, item.id)}
                          className="w-4 h-4 rounded text-bis-navy focus:ring-bis-navy rounded-sm cursor-pointer accent-bis-saffron"
                        />
                        <span
                          className={
                            item.completed
                              ? "line-through text-slate-400 dark:text-slate-500 font-normal"
                              : "text-slate-800 dark:text-slate-200 font-medium"
                          }
                        >
                          {item.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {message.text}
            </p>
          )}

          {/* Source Link */}
          {message.sources && (
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">{t.source}:</span>
              <a
                href={message.sources.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-bis-navy dark:text-blue-400 hover:underline font-semibold text-xs"
              >
                <span>{message.sources.title}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Statutory Disclaimer */}
          <div className="mt-3 p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-[11px] text-amber-800 dark:text-amber-400 leading-normal">
            {t.disclaimer}
          </div>
        </div>
      </div>
    </div>
  );
}
