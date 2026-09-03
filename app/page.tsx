"use client";

import React, { useState, useEffect } from "react";
import { LandingNavbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LandingFooter } from "@/components/landing/footer";
import { ChatContainer } from "@/components/chat/chat-container";
import { Language } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function HomePage() {
  const [view, setView] = useState<"landing" | "chat">("landing");
  const [language, setLanguage] = useState<Language>("en");
  const [pendingQuery, setPendingQuery] = useState<string | undefined>(undefined);

  // Sync with stored language preference
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("bis_chat_lang_v2") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "hi" || savedLang === "mr")) {
        setLanguage(savedLang);
      }
    } catch {}
  }, [view]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("bis_chat_lang_v2", lang);
    } catch {}
  };

  const handleLaunchChat = (query?: string) => {
    setPendingQuery(query);
    setView("chat");
  };

  const handleBackHome = () => {
    setPendingQuery(undefined);
    setView("landing");
  };

  return (
    <div className="w-full h-[100dvh] bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      {view === "landing" ? (
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Top Sticky Modern Official Navbar */}
          <LandingNavbar
            language={language}
            onLanguageChange={handleLanguageChange}
            onGetStarted={() => handleLaunchChat()}
          />

          {/* Smooth Scrollable Main Content */}
          <ScrollArea className="flex-1 h-full w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="flex flex-col min-h-full">
              <HeroSection
                onGetStarted={handleLaunchChat}
                language={language}
              />
              <FeaturesGrid language={language} />
              <HowItWorks language={language} />
              <LandingFooter />
            </div>
          </ScrollArea>
        </div>
      ) : (
        <ChatContainer
          onBackHome={handleBackHome}
          initialQuery={pendingQuery}
        />
      )}
    </div>
  );
}
