"use client";

import React, { useState } from "react";
import { Menu, Home, Settings, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { SettingsDialog } from "./settings-dialog";

interface ChatHeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBackHome: () => void;
  onOpenMobileSidebar: () => void;
  onOpenStandards?: () => void;
  onOpenSettings?: () => void;
  isSidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
  onClearAllChats?: () => void;
}

export function ChatHeader({
  language,
  onLanguageChange,
  onBackHome,
  onOpenMobileSidebar,
  onOpenStandards,
  onOpenSettings,
  isSidebarCollapsed,
  onToggleSidebar,
  onClearAllChats,
}: ChatHeaderProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <header className="h-16 border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 flex items-center justify-between gap-2 z-10">
      {/* Left: Sidebar Toggles & Brand */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mobile Sidebar Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenMobileSidebar}
          className="md:hidden text-slate-600 dark:text-slate-300"
          title="Open history sidebar"
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Desktop Sidebar Restore Toggle (when collapsed) */}
        {isSidebarCollapsed && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="hidden md:flex h-9 w-9 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Show sidebar"
          >
            <PanelLeftOpen className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </Button>
        )}

        <div
          className="flex items-center gap-2.5 cursor-pointer select-none"
          onClick={onBackHome}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-bis-navy to-blue-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-bis-navy/20">
            BIS
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
              BIS Intelligent Assistant
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              National Standards AI Engine
            </p>
          </div>
        </div>
      </div>

      {/* Right: Home & Settings Option */}
      <div className="flex items-center gap-2">

        {/* Back to Home */}
        <Button
          variant="outline"
          size="sm"
          onClick={onBackHome}
          className="rounded-xl text-xs font-semibold gap-1.5 h-9 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Home className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">Home</span>
        </Button>

        {/* Settings Option */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => (onOpenSettings ? onOpenSettings() : setSettingsOpen(true))}
          className="rounded-xl text-xs font-semibold gap-1.5 h-9 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm cursor-pointer"
        >
          <Settings className="w-4 h-4 text-bis-navy dark:text-blue-400" />
          <span>Settings</span>
        </Button>
      </div>

      {/* Internal Settings Dialog Modal (if not controlled externally) */}
      {!onOpenSettings && (
        <SettingsDialog
          open={settingsOpen}
          onOpenChange={setSettingsOpen}
          language={language}
          onLanguageChange={onLanguageChange}
          onClearAllChats={onClearAllChats}
        />
      )}
    </header>
  );
}
