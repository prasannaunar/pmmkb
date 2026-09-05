"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
  mobileSlot: ReactNode;
  setMobileSlot: (v: ReactNode) => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mobileSlot, setMobileSlot] = useState<ReactNode>(null);

  return (
    <SidebarContext.Provider value={{ open, setOpen, mobileSlot, setMobileSlot }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext(): SidebarContextValue {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebarContext must be used within SidebarProvider");
  return ctx;
}
