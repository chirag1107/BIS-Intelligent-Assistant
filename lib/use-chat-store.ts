"use client";

import { useState, useEffect, useCallback } from "react";
import { ChatMessage, ChatSession, Language } from "@/types";
import { generateBotResponse, findBestStandard } from "./bis-engine";

const STORAGE_KEY_SESSIONS = "bis_chat_sessions_v2";
const STORAGE_KEY_ACTIVE_ID = "bis_active_chat_id_v2";
const STORAGE_KEY_LANG = "bis_chat_lang_v2";
const MAX_SESSIONS = 8;

export function useChatStore() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("en");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load from local storage
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY_LANG) as Language;
      if (savedLang && (savedLang === "en" || savedLang === "hi" || savedLang === "mr")) {
        setLanguage(savedLang);
      }

      const savedSessions = localStorage.getItem(STORAGE_KEY_SESSIONS);
      if (savedSessions) {
        const parsed: ChatSession[] = JSON.parse(savedSessions);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSessions(parsed);
          const savedActiveId = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
          const exists = parsed.some((s) => s.id === savedActiveId);
          setActiveSessionId(exists && savedActiveId ? savedActiveId : parsed[0].id);
          setIsLoaded(true);
          return;
        }
      }
    } catch (err) {
      console.error("Failed to load BIS chat sessions:", err);
    }

    // Default initial session if none found
    const initialSession: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      preview: "Start a new conversation...",
      date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      messages: [],
      createdAt: Date.now(),
    };
    setSessions([initialSession]);
    setActiveSessionId(initialSession.id);
    setIsLoaded(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(sessions));
      if (activeSessionId) {
        localStorage.setItem(STORAGE_KEY_ACTIVE_ID, activeSessionId);
      }
      localStorage.setItem(STORAGE_KEY_LANG, language);
    } catch (err) {
      console.error("Failed to save BIS chat sessions:", err);
    }
  }, [sessions, activeSessionId, language, isLoaded]);

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0] || null;

  const createNewChat = useCallback(() => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      preview: "Start a new conversation...",
      date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      messages: [],
      createdAt: Date.now(),
    };

    setSessions((prev) => {
      const updated = [newSession, ...prev];
      return updated.slice(0, MAX_SESSIONS);
    });
    setActiveSessionId(newSession.id);
    return newSession.id;
  }, []);

  const switchChat = useCallback((id: string) => {
    setActiveSessionId(id);
  }, []);

  const deleteChat = useCallback(
    (id: string) => {
      setSessions((prev) => {
        const remaining = prev.filter((s) => s.id !== id);
        if (remaining.length === 0) {
          const freshSession: ChatSession = {
            id: Date.now().toString(),
            title: "New Chat",
            preview: "Start a new conversation...",
            date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
            messages: [],
            createdAt: Date.now(),
          };
          setActiveSessionId(freshSession.id);
          return [freshSession];
        }
        if (activeSessionId === id) {
          setActiveSessionId(remaining[0].id);
        }
        return remaining;
      });
    },
    [activeSessionId]
  );

  const toggleChecklistItem = useCallback(
    (messageId: string, checklistItemId: string) => {
      setSessions((prev) =>
        prev.map((session) => {
          if (session.id !== activeSessionId) return session;
          return {
            ...session,
            messages: session.messages.map((msg) => {
              if (msg.id !== messageId || !msg.checklist) return msg;
              return {
                ...msg,
                checklist: msg.checklist.map((item) =>
                  item.id === checklistItemId ? { ...item, completed: !item.completed } : item
                ),
              };
            }),
          };
        })
      );
    },
    [activeSessionId]
  );

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      const userMsg: ChatMessage = {
        id: "msg-user-" + Date.now(),
        type: "user",
        text: trimmed,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      // Extract title if this is the first message
      let detectedTitle: string | null = null;
      const matched = findBestStandard(trimmed);
      if (matched) {
        detectedTitle = matched.name;
      } else {
        detectedTitle = trimmed.slice(0, 24) + (trimmed.length > 24 ? "..." : "");
      }

      setSessions((prev) =>
        prev.map((s) => {
          if (s.id !== activeSessionId) return s;
          const shouldUpdateTitle = s.messages.length === 0;
          return {
            ...s,
            title: shouldUpdateTitle && detectedTitle ? detectedTitle : s.title,
            preview: trimmed,
            messages: [...s.messages, userMsg],
          };
        })
      );

      setIsTyping(true);

      // Simulate realistic AI thought and retrieval latency
      setTimeout(() => {
        const responseData = generateBotResponse(trimmed, language);

        const botMsg: ChatMessage = {
          id: "msg-bot-" + Date.now(),
          type: "bot",
          text: responseData.text,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          sources: responseData.sources,
          checklist: responseData.checklist,
          standardData: responseData.standardData,
        };

        setSessions((prev) =>
          prev.map((s) => {
            if (s.id !== activeSessionId) return s;
            return {
              ...s,
              messages: [...s.messages, botMsg],
            };
          })
        );
        setIsTyping(false);
      }, 700 + Math.random() * 400);
    },
    [activeSessionId, isTyping, language]
  );

  const clearAllChats = useCallback(() => {
    const freshSession: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      preview: "Start a new conversation...",
      date: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      messages: [],
      createdAt: Date.now(),
    };
    setSessions([freshSession]);
    setActiveSessionId(freshSession.id);
    try {
      localStorage.removeItem(STORAGE_KEY_SESSIONS);
      localStorage.removeItem(STORAGE_KEY_ACTIVE_ID);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return {
    sessions,
    activeSession,
    activeSessionId,
    language,
    setLanguage,
    isTyping,
    isLoaded,
    createNewChat,
    switchChat,
    deleteChat,
    clearAllChats,
    sendMessage,
    toggleChecklistItem,
  };
}
