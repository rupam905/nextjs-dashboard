"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { AnimatedProgress } from "./AnimatedProgress";
import { Course } from "@/lib/types";
import * as LucideIcons from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen: LucideIcons.BookOpen,
  Code2: LucideIcons.Code2,
  Zap: LucideIcons.Zap,
  Lightbulb: LucideIcons.Lightbulb,
  HelpCircle: LucideIcons.HelpCircle,
  Palette: LucideIcons.Palette,
  Database: LucideIcons.Database,
  Cog: LucideIcons.Cog,
};

const cardAccents = [
  {
    icon: "text-blue-300",
    glow: "from-blue-500/20 via-cyan-400/5 to-transparent",
    ring: "group-hover:border-blue-400/40",
  },
  {
    icon: "text-violet-300",
    glow: "from-violet-500/20 via-fuchsia-400/5 to-transparent",
    ring: "group-hover:border-violet-400/40",
  },
  {
    icon: "text-emerald-300",
    glow: "from-emerald-500/20 via-teal-400/5 to-transparent",
    ring: "group-hover:border-emerald-400/40",
  },
  {
    icon: "text-amber-300",
    glow: "from-amber-500/20 via-orange-400/5 to-transparent",
    ring: "group-hover:border-amber-400/40",
  },
];

function getAccentIndex(value: string) {
  return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] || iconMap.HelpCircle;
  const accent = cardAccents[getAccentIndex(course.id) % cardAccents.length];

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-xl border border-neutral-800 bg-linear-to-br from-neutral-900 to-neutral-800 p-6 transition-colors ${accent.ring}`}
      variants={itemVariants}
      whileHover="hover"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${accent.glow} opacity-60 transition-opacity group-hover:opacity-100`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      <div className="relative space-y-5">
        <div className="flex items-start justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="shrink-0 rounded-lg bg-neutral-800 p-3 shadow-inner shadow-white/5">
              <Icon className={`h-5 w-5 ${accent.icon}`} />
            </div>
            <h3 className="text-pretty font-semibold text-neutral-100">
              {course.title}
            </h3>
          </div>
          <span className="shrink-0 text-sm text-neutral-400">
            {course.progress}%
          </span>
        </div>

        <AnimatedProgress progress={course.progress} />
      </div>
    </motion.article>
  );
}
