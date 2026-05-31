import type { Variants } from 'framer-motion'

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

export const progressVariants: Variants = {
  initial: { scaleX: 0 },
  animate: (progress: number) => ({
    scaleX: Math.max(0, Math.min(progress, 100)) / 100,
    transition: {
      duration: 2,
      type: 'tween',
    },
  }),
}
