"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { itemVariants } from "@/lib/animations";
import { User } from "@/lib/types";

interface HeroProps {
  user: User | null;
}

export function Hero({ user }: HeroProps) {
  return (
    <motion.article
      id="overview"
      className="col-span-full scroll-mt-6 rounded-xl border border-neutral-800 bg-linear-to-br from-neutral-900 to-neutral-800 p-8 transition-colors hover:border-neutral-700 lg:col-span-2"
      variants={itemVariants}
      whileHover="hover"
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-neutral-100 mb-2">
            Welcome back, {user?.name || "Student"}
          </h1>
          <p className="text-neutral-400">Ready to continue learning?</p>
        </div>

        <div className="flex items-center gap-3 bg-neutral-800/50 rounded-lg p-4 w-fit">
          <Flame className="w-6 h-6 text-orange-500" />
          <div>
            <p className="text-sm text-neutral-400">Learning Streak</p>
            <p className="text-2xl font-bold text-orange-400">
              {user?.streak || 0} days
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
