"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

const activityDays = [
  1, 0, 2, 3, 1, 4, 2, 0, 1, 3, 5, 2, 4, 1, 0, 2, 3, 4, 5, 3, 1, 2, 4, 5,
  3, 2, 4, 6,
];

const intensityClass = [
  "bg-neutral-800",
  "bg-blue-950",
  "bg-blue-800",
  "bg-cyan-700",
  "bg-emerald-500",
  "bg-lime-400",
  "bg-amber-300",
];

export function ActivityTile() {
  const totalActivities = activityDays.reduce((sum, value) => sum + value, 0);

  return (
    <motion.article
      id="activity"
      className="relative scroll-mt-6 overflow-hidden rounded-xl border border-neutral-800 bg-linear-to-br from-neutral-900 to-neutral-800 p-6 transition-colors hover:border-cyan-400/40"
      variants={itemVariants}
      whileHover="hover"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(132,204,22,0.12),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-neutral-100">Activity</h3>
            <p className="text-sm text-neutral-400">Last 4 weeks</p>
          </div>
          <div className="rounded-lg border border-neutral-700/70 bg-neutral-950/50 px-3 py-2 text-right">
            <p className="text-lg font-semibold text-neutral-100">
              {totalActivities}
            </p>
            <p className="text-xs text-neutral-500">sessions</p>
          </div>
        </div>

        <div
          className="grid grid-cols-7 gap-2"
          role="img"
          aria-label={`${totalActivities} learning sessions across the last 4 weeks`}
        >
          {activityDays.map((count, i) => (
            <motion.span
              key={i}
              className={`h-7 rounded ${intensityClass[count]} ring-cyan-300/60 transition-shadow hover:ring-2`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.018,
                type: "spring",
                stiffness: 300,
                damping: 22,
              }}
              title={`${count} sessions`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>Less</span>
          <div className="flex gap-1">
            {intensityClass.slice(0, 5).map((className) => (
              <span key={className} className={`h-3 w-3 rounded ${className}`} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </motion.article>
  );
}
