"use client";

import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  return (
    <div className="flex min-h-screen bg-neutral-950 md:h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
