"use client";

import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 scroll-smooth overflow-auto p-4 pb-24 md:pb-4 lg:p-8">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {children}
      </motion.div>
    </main>
  );
}
