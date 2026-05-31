"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

interface DataNoticeProps {
  message: string;
}

export function DataNotice({ message }: DataNoticeProps) {
  return (
    <motion.section
      className="col-span-full rounded-lg border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-amber-100"
      variants={itemVariants}
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <AlertCircle className="h-5 w-5 shrink-0 text-amber-300" />
        <p className="text-sm">{message}</p>
      </div>
    </motion.section>
  );
}
