'use client'

import { motion } from 'framer-motion'
import { progressVariants } from '@/lib/animations'

interface AnimatedProgressProps {
  progress: number
}

export function AnimatedProgress({ progress }: AnimatedProgressProps) {
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-neutral-800"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <motion.div
        className="h-full origin-left rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-400"
        initial="initial"
        animate="animate"
        variants={progressVariants}
        custom={progress}
      />
    </div>
  )
}
