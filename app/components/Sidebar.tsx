"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  Home,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  targetId: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Overview", targetId: "overview" },
  { icon: BookOpen, label: "Courses", targetId: "courses" },
  { icon: BarChart3, label: "Activity", targetId: "activity" },
];

interface NavButtonProps {
  item: NavItem;
  active: boolean;
  layoutId: string;
  compact?: boolean;
  onSelect: (item: NavItem) => void;
}

function NavButton({
  item,
  active,
  layoutId,
  compact = false,
  onSelect,
}: NavButtonProps) {
  const Icon = item.icon;

  return (
    <motion.a
      href={`#${item.targetId}`}
      onClick={(event) => {
        event.preventDefault();
        onSelect(item);
      }}
      className={`relative flex items-center rounded-lg text-sm transition-colors ${
        compact
          ? "h-14 flex-1 justify-center"
          : "h-12 w-full justify-center gap-3 px-3 lg:justify-start lg:px-4"
      } ${active ? "text-neutral-50" : "text-neutral-400 hover:text-neutral-100"}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-lg border border-blue-400/20 bg-neutral-800 shadow-[0_0_24px_rgba(59,130,246,0.14)]"
          transition={{ type: "spring", stiffness: 360, damping: 32 }}
        />
      )}
      <Icon className="relative h-5 w-5" />
      {!compact && (
        <span className="relative hidden truncate lg:inline">{item.label}</span>
      )}
    </motion.a>
  );
}

export function Sidebar() {
  const [activeItem, setActiveItem] = useState(navItems[0].label);

  function handleSelect(item: NavItem) {
    setActiveItem(item.label);
    window.history.replaceState(null, "", `#${item.targetId}`);
    document.getElementById(item.targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <motion.aside
        className="hidden shrink-0 border-r border-neutral-800 bg-neutral-900/95 px-3 py-6 md:flex md:w-20 md:flex-col lg:w-64 lg:px-5"
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="mb-8 flex h-12 items-center justify-center gap-3 lg:justify-start lg:px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h1 className="hidden text-xl font-bold text-neutral-100 lg:block">
            LearnHub
          </h1>
        </div>

        <nav className="space-y-2" aria-label="Dashboard sections">
          {navItems.map((item) => (
            <NavButton
              key={item.label}
              item={item}
              active={activeItem === item.label}
              layoutId="desktop-active-nav"
              onSelect={handleSelect}
            />
          ))}
        </nav>
      </motion.aside>

      <motion.nav
        className="fixed inset-x-3 bottom-3 z-50 flex rounded-xl border border-neutral-800 bg-neutral-900/95 p-1 shadow-2xl shadow-black/30 backdrop-blur md:hidden"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        aria-label="Dashboard sections"
      >
        {navItems.map((item) => (
          <NavButton
            key={item.label}
            item={item}
            active={activeItem === item.label}
            layoutId="mobile-active-nav"
            compact
            onSelect={handleSelect}
          />
        ))}
      </motion.nav>
    </>
  );
}
