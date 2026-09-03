"use client";

import React, { useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import { ChatMessage, Language } from "@/types";
import { ChatMessageItem } from "./chat-message-item";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isTyping: boolean;
  language: Language;
  onToggleChecklist: (messageId: string, checklistItemId: string) => void;
}

export function ChatMessages({
  messages,
  isTyping,
  language,
  onToggleChecklist,
}: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <ScrollArea className="flex-1 px-4 sm:px-6 py-4">
      <div className="max-w-3xl mx-auto space-y-4">
        {messages.map((message) => (
          <ChatMessageItem
            key={message.id}
            message={message}
            language={language}
            onToggleChecklist={onToggleChecklist}
          />
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-start gap-2.5 mb-4 animate-in fade-in-50 duration-200">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-bis-navy to-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-900/20">
              <Bot className="w-4 h-4" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
            </div>
          </div>
        )}

        <div ref={bottomRef} className="h-2" />
      </div>
    </ScrollArea>
  );
}
