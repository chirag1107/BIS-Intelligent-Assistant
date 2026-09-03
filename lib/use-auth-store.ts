"use client";

import { useState, useEffect } from "react";

export interface UserProfile {
  isLoggedIn: boolean;
  name: string;
  email: string;
  role: "Manufacturer / Importer" | "Testing Laboratory" | "BIS Officer" | "SIH Participant" | "Compliance Consultant";
  organization: string;
}

const STORAGE_KEY = "bis_auth_user_v1";

const DEFAULT_USER: UserProfile = {
  isLoggedIn: true,
  name: "SIH Participant",
  email: "participant@sih2026.gov.in",
  role: "SIH Participant",
  organization: "LYNOX Solutions",
};

export function useAuthStore() {
  const [user, setUser] = useState<UserProfile>(DEFAULT_USER);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load auth user:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const login = (name: string, email: string, role: UserProfile["role"], organization: string) => {
    const newUser: UserProfile = {
      isLoggedIn: true,
      name: name || "Authorized User",
      email: email || "user@bis-assistant.gov.in",
      role: role || "Manufacturer / Importer",
      organization: organization || "Industrial Compliance Ltd",
    };
    setUser(newUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    const loggedOutUser: UserProfile = {
      isLoggedIn: false,
      name: "Guest User",
      email: "guest@bis.gov.in",
      role: "Manufacturer / Importer",
      organization: "Public Visitor",
    };
    setUser(loggedOutUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedOutUser));
    } catch (e) {
      console.error(e);
    }
  };

  return {
    user,
    isLoaded,
    login,
    logout,
  };
}
