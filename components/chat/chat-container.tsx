"use client";

import React, { useState } from "react";
import { ChatHeader } from "./chat-header";
import { ChatSidebar } from "./chat-sidebar";
import { ChatDashboard } from "./chat-dashboard";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { StandardsDialog } from "./standards-dialog";
import { SettingsDialog } from "./settings-dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useChatStore } from "@/lib/use-chat-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatContainerProps {
  onBackHome: () => void;
  initialQuery?: string;
}

export function ChatContainer({ onBackHome, initialQuery }: ChatContainerProps) {
  const {
    sessions,
    activeSession,
    activeSessionId,
    language,
    setLanguage,
    isTyping,
    createNewChat,
    switchChat,
    deleteChat,
    clearAllChats,
    sendMessage,
    toggleChecklistItem,
  } = useChatStore();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [standardsDialogOpen, setStandardsDialogOpen] = useState(false);
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);

  // Auto-send initial query if launched from hero prompt chip
  const initialSentRef = React.useRef(false);
  React.useEffect(() => {
    if (initialQuery && !initialSentRef.current) {
      initialSentRef.current = true;
      // Slight timeout to ensure store has initialized
      const timer = setTimeout(() => {
        sendMessage(initialQuery);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [initialQuery, sendMessage]);

  const messages = activeSession?.messages || [];
  const hasMessages = messages.length > 0;

  return (
    <div className="flex h-full w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Desktop Sidebar (hidden on mobile, smoothly collapsible on desktop) */}
      <div
        className={cn(
          "hidden md:block h-full flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden",
          isSidebarCollapsed ? "w-0" : "w-72"
        )}
      >
        <div className="w-72 h-full">
          <ChatSidebar
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={switchChat}
            onNewChat={createNewChat}
            onDeleteSession={deleteChat}
            onToggleCollapse={() => setIsSidebarCollapsed(true)}
            onOpenSettings={() => setSettingsDialogOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Drawer / Sheet */}
      <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
        <SheetContent side="left" className="p-0 w-80 bg-slate-900 border-r border-slate-800">
          <ChatSidebar
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={switchChat}
            onNewChat={createNewChat}
            onDeleteSession={deleteChat}
            onCloseMobile={() => setMobileSidebarOpen(false)}
            onOpenSettings={() => {
              setMobileSidebarOpen(false);
              setSettingsDialogOpen(true);
            }}
          />
        </SheetContent>
      </Sheet>

      {/* Main Chat Work Area */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        <ChatHeader
          language={language}
          onLanguageChange={setLanguage}
          onBackHome={onBackHome}
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
          onOpenStandards={() => setStandardsDialogOpen(true)}
          onOpenSettings={() => setSettingsDialogOpen(true)}
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
          onClearAllChats={clearAllChats}
        />

        <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
          {hasMessages ? (
            <ChatMessages
              messages={messages}
              isTyping={isTyping}
              language={language}
              onToggleChecklist={toggleChecklistItem}
            />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center min-h-0 overflow-y-auto px-4 py-4">
              <ChatDashboard
                language={language}
                onSelectPrompt={(query) => sendMessage(query)}
              />
            </div>
          )}

          <ChatInput
            onSendMessage={(text) => sendMessage(text)}
            onOpenStandards={() => setStandardsDialogOpen(true)}
            disabled={isTyping}
            language={language}
          />
        </main>
      </div>

      {/* Dedicated Indian Standards Directory & Inquiries Modal */}
      <StandardsDialog
        open={standardsDialogOpen}
        onOpenChange={setStandardsDialogOpen}
        onSelectPrompt={(query) => sendMessage(query)}
      />

      {/* Settings & User Account Modal */}
      <SettingsDialog
        open={settingsDialogOpen}
        onOpenChange={setSettingsDialogOpen}
        language={language}
        onLanguageChange={setLanguage}
        onClearAllChats={clearAllChats}
      />
    </div>
  );
}
