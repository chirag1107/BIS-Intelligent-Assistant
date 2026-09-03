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
  User,
  LogOut,
  LogIn,
  KeyRound,
  Mail,
  Building,
  ShieldCheck,
  Briefcase,
  Eye,
  EyeOff,
} from "lucide-react";
import { useAuthStore, UserProfile } from "@/lib/use-auth-store";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onClearAllChats?: () => void;
  initialTab?: "account" | "language" | "data";
}

export function SettingsDialog({
  open,
  onOpenChange,
  language,
  onLanguageChange,
  onClearAllChats,
  initialTab = "account",
}: SettingsDialogProps) {
  const { user, login, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState<"account" | "language" | "data">(initialTab);
  const [clearedNotice, setClearedNotice] = useState(false);

  // Login form state
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRole, setLoginRole] = useState<UserProfile["role"]>("Manufacturer / Importer");
  const [loginOrg, setLoginOrg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

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

  const handleLoginFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = loginName.trim() || "Authorized User";
    const finalEmail = loginEmail.trim() || "user@bis-assistant.gov.in";
    const finalOrg = loginOrg.trim() || "BIS Industrial Partner";

    login(finalName, finalEmail, loginRole, finalOrg);
    setLoginMessage("Logged in successfully!");
    setTimeout(() => setLoginMessage(null), 3000);
  };

  const handleDemoLogin = () => {
    login(
      "SIH Participant",
      "participant@sih2026.gov.in",
      "SIH Participant",
      "LYNOX Solutions"
    );
    setLoginMessage("Logged in as SIH Participant!");
    setTimeout(() => setLoginMessage(null), 3000);
  };

  const handleLogoutClick = () => {
    logout();
    setLoginMessage("Logged out successfully.");
    setTimeout(() => setLoginMessage(null), 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-[92vw] max-h-[85vh] h-auto p-0 !gap-0 !flex !flex-col overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xl rounded-2xl sm:rounded-3xl z-50">
        {/* Header with Title & Navigation Tabs */}
        <div className="px-6 pt-5 pb-0 bg-gradient-to-b from-blue-50/70 via-slate-50/30 to-transparent dark:from-slate-800/50 dark:to-transparent border-b border-slate-200/80 dark:border-slate-800 flex-shrink-0">
          <DialogHeader className="space-y-1 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-bis-navy via-[#1e4480] to-blue-700 text-white flex items-center justify-center font-black text-xs shadow-md shadow-bis-navy/20">
                BIS
              </div>
              <div>
                <DialogTitle className="text-base font-bold text-slate-900 dark:text-white">
                  Settings & Preferences
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">
                  Manage user authentication, language, and conversation data
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 border-b border-slate-200/80 dark:border-slate-800 -mb-px">
            <button
              type="button"
              onClick={() => setActiveTab("account")}
              className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "account"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Account & Login</span>
              {user.isLoggedIn ? (
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("language")}
              className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "language"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Language ({language.toUpperCase()})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("data")}
              className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "data"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Data & Info</span>
            </button>
          </div>
        </div>

        {/* Scrollable Tab Content Body */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-4">
          {/* Notification Alert */}
          {loginMessage && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{loginMessage}</span>
            </div>
          )}

          {/* TAB 1: ACCOUNT & AUTHENTICATION */}
          {activeTab === "account" && (
            <div className="space-y-5">
              {user.isLoggedIn ? (
                /* Logged In State: Premium User Profile Card */
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 dark:from-slate-800/90 dark:via-slate-800/50 dark:to-slate-900 border-2 border-blue-200/80 dark:border-slate-700 shadow-sm relative overflow-hidden">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        {/* User Avatar Circle */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-bis-navy via-blue-600 to-bis-saffron flex items-center justify-center text-white text-xl font-black shadow-md shadow-bis-navy/25">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">
                              {user.name}
                            </h3>
                            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Active
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span>{user.email}</span>
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                            <Building className="w-3 h-3 text-slate-400" />
                            <span>{user.organization}</span>
                          </p>
                        </div>
                      </div>

                      <Badge
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-950/60 text-bis-navy dark:text-blue-300 border-blue-300 dark:border-blue-800 text-[11px] font-semibold py-1 px-2.5 rounded-xl hidden sm:inline-flex"
                      >
                        {user.role}
                      </Badge>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-slate-200/70 dark:border-slate-700/70 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="font-medium">Role: <strong className="text-slate-800 dark:text-slate-200">{user.role}</strong></span>
                      </div>

                      {/* Log Out Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogoutClick}
                        className="h-8 px-3.5 rounded-xl border-rose-200 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-700 text-xs font-bold gap-1.5 transition-all cursor-pointer shadow-2xs"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Log Out</span>
                      </Button>
                    </div>
                  </div>

                  {/* Account Permissions / Features */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs space-y-2">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Authenticated Session Privileges</span>
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                      Your current session grants access to statutory BIS standards analysis, interactive compliance audit checklists, and laboratory test report generation.
                    </p>
                  </div>
                </div>
              ) : (
                /* Logged Out State: Login / Sign In Form */
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                        <LogIn className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          Sign In to BIS Assistant
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Log in to save standard checklists and compliance records
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleLoginFormSubmit} className="space-y-3 mt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={loginName}
                            onChange={(e) => setLoginName(e.target.value)}
                            placeholder="e.g. Chirag Patil"
                            className="w-full h-9 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            placeholder="e.g. user@bis.gov.in"
                            className="w-full h-9 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Stakeholder Role
                          </label>
                          <select
                            value={loginRole}
                            onChange={(e) => setLoginRole(e.target.value as any)}
                            className="w-full h-9 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Manufacturer / Importer">Manufacturer / Importer</option>
                            <option value="Testing Laboratory">Testing Laboratory (NABL/BIS)</option>
                            <option value="BIS Officer">BIS Regulatory Officer</option>
                            <option value="SIH Participant">SIH Participant (Smart India Hackathon)</option>
                            <option value="Compliance Consultant">Compliance Consultant</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Organization / Company
                          </label>
                          <input
                            type="text"
                            value={loginOrg}
                            onChange={(e) => setLoginOrg(e.target.value)}
                            placeholder="e.g. Acme Industries Ltd"
                            className="w-full h-9 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="Enter password (optional for demo)"
                            className="w-full h-9 pl-3 pr-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                          >
                            {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                        <Button
                          type="submit"
                          className="w-full sm:w-auto h-9 px-5 rounded-xl bg-gradient-to-r from-bis-navy to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-bold text-xs gap-1.5 shadow-md shadow-bis-navy/20 cursor-pointer"
                        >
                          <LogIn className="w-3.5 h-3.5" />
                          <span>Sign In</span>
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleDemoLogin}
                          className="w-full sm:w-auto h-9 px-4 rounded-xl border-blue-200 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-950/40 text-bis-navy dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 font-semibold text-xs gap-1.5 cursor-pointer"
                        >
                          <KeyRound className="w-3.5 h-3.5 text-bis-saffron" />
                          <span>1-Click Demo Login</span>
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LANGUAGE SELECTION */}
          {activeTab === "language" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Select Preferred Language</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Responses, checklists, and compliance cards will adapt to your language
                  </p>
                </div>
                <Badge variant="outline" className="text-[10px] font-bold">
                  3 Supported
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {languages.map((item) => {
                  const isSelected = language === item.code;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => onLanguageChange(item.code)}
                      className={`relative flex flex-col items-center justify-between p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/80 dark:bg-blue-950/50 text-slate-900 dark:text-white shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-300 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}

                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm mb-2.5 transition-colors ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-xs"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        {item.short}
                      </div>

                      <div className="w-full">
                        <div className="text-sm font-bold leading-tight">
                          {item.native}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.label}
                        </div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium">
                          {item.sub}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: DATA MANAGEMENT & SYSTEM INFO */}
          {activeTab === "data" && (
            <div className="space-y-4">
              {/* Reset Conversations */}
              {onClearAllChats && (
                <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-rose-950 dark:text-rose-200">
                      Clear All Chat Sessions
                    </h4>
                    <p className="text-[11px] text-rose-600/90 dark:text-rose-400 mt-0.5">
                      Permanently delete local chat history and reset active checklists
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClear}
                    className="h-8 px-3.5 text-xs font-bold text-rose-600 dark:text-rose-300 border-rose-300 dark:border-rose-800 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-700 transition-colors gap-1.5 rounded-xl shadow-2xs flex-shrink-0 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{clearedNotice ? "Deleted!" : "Clear All Chats"}</span>
                  </Button>
                </div>
              )}

              {/* Official BIS & SIH 2026 Credits */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-bis-navy/5 via-blue-50/30 to-amber-50/20 dark:from-slate-800/60 dark:to-slate-800/30 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-bis-navy text-white flex items-center justify-center font-black text-xs">
                      BIS
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
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Team</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                    <span className="text-bis-saffron">⚡</span> LYNOX Solutions
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

