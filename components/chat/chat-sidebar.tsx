"use client";

import React from "react";
import { Plus, MessageSquare, Trash2, Shield, User, PanelLeftClose, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChatSession } from "@/types";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/lib/use-auth-store";

interface ChatSidebarProps {
  sessions: ChatSession[];
  activeSessionId: string | null;
  onSelectSession: (id: string) => void;
  onNewChat: () => void;
  onDeleteSession: (id: string) => void;
  onCloseMobile?: () => void;
  onToggleCollapse?: () => void;
  onOpenSettings?: () => void;
}

export function ChatSidebar({
  sessions,
  activeSessionId,
  onSelectSession,
  onNewChat,
  onDeleteSession,
  onCloseMobile,
  onToggleCollapse,
  onOpenSettings,
}: ChatSidebarProps) {
  const { user } = useAuthStore();
  return (
    <aside className="flex flex-col h-full w-full bg-slate-900 text-slate-100 border-r border-slate-800">
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bis-navy to-blue-600 flex items-center justify-center font-black text-xs tracking-wider text-white shadow-md shadow-blue-900/50">
            BIS
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-tight text-white">Chat History</h2>
            <p className="text-[10px] text-slate-400 font-medium">Standards Intelligence</p>
          </div>
        </div>

        {onToggleCollapse && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="Hide sidebar"
          >
            <PanelLeftClose className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* New Chat Button */}
      <div className="px-3 pb-3">
        <Button
          onClick={() => {
            onNewChat();
            if (onCloseMobile) onCloseMobile();
          }}
          className="w-full justify-start gap-2 bg-gradient-to-r from-blue-600 to-bis-navy hover:from-blue-500 hover:to-bis-navy-light text-white rounded-xl shadow-md shadow-blue-950/40 text-xs font-semibold h-10 border border-blue-500/20"
        >
          <Plus className="w-4 h-4 text-bis-saffron" />
          <span>New Conversation</span>
        </Button>
      </div>

      <Separator className="bg-slate-800/80" />

      {/* Chat Sessions List */}
      <ScrollArea className="flex-1 px-2 py-3">
        <div className="space-y-1">
          {sessions.length === 0 ? (
            <div className="text-center py-8 px-4 text-slate-500">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-xs">No conversations yet</p>
            </div>
          ) : (
            sessions.map((session) => {
              const isActive = session.id === activeSessionId;
              return (
                <div
                  key={session.id}
                  onClick={() => {
                    onSelectSession(session.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={cn(
                    "group relative flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium cursor-pointer transition-all duration-150 border",
                    isActive
                      ? "bg-slate-800/90 text-white border-blue-500/40 shadow-sm shadow-blue-900/20"
                      : "text-slate-300 border-transparent hover:bg-slate-800/50 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <MessageSquare
                      className={cn(
                        "w-4 h-4 flex-shrink-0 transition-colors",
                        isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"
                      )}
                    />
                    <div className="truncate">
                      <p className="truncate font-semibold">{session.title || "New Chat"}</p>
                      <p className="text-[10px] text-slate-400 font-normal truncate">
                        {session.date}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm("Delete this conversation?")) {
                        onDeleteSession(session.id);
                      }
                    }}
                    title="Delete chat"
                    className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-slate-400 hover:text-rose-400 hover:bg-slate-700/60 transition-all flex-shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </ScrollArea>

      <Separator className="bg-slate-800/80" />

      {/* Sidebar Footer: Connected to User Profile / Authentication */}
      <div className="p-3 bg-slate-950/60">
        <div
          onClick={onOpenSettings}
          className="flex items-center justify-between rounded-xl p-2.5 bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/60 hover:bg-slate-800/80 text-xs text-slate-300 transition-all cursor-pointer group shadow-2xs"
          title={user.isLoggedIn ? "Manage account & settings" : "Click to Sign In"}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {user.isLoggedIn ? (
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-bis-navy via-blue-600 to-bis-saffron flex items-center justify-center text-white font-black text-xs shadow-xs">
                {user.name.charAt(0).toUpperCase()}
              </div>
            ) : (
              <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                <LogIn className="w-3.5 h-3.5 text-blue-400" />
              </div>
            )}

            <div className="truncate">
              <p className="font-semibold text-white text-[11px] truncate group-hover:text-blue-400 transition-colors">
                {user.isLoggedIn ? user.name : "Guest User"}
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                {user.isLoggedIn ? user.organization : "Click to Sign In"}
              </p>
            </div>
          </div>

          <Shield className="w-4 h-4 text-bis-saffron flex-shrink-0 group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </aside>
  );
}
