"use client"

import { motion, useReducedMotion } from 'motion/react'
import { motionTokens } from '../../lib/motion-tokens'
import './SiteLoader.css'

// Diamond pattern: https://21st.dev/@loading-ui/components/diamond
const pixels = [[8, 0], [12, 4], [16, 8], [12, 12], [8, 16], [4, 12], [0, 8], [4, 4]]

export default function SiteLoader() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="site-loader"
      role="status"
      aria-label="Загрузка сайта"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? motionTokens.duration.fast : motionTokens.duration.normal }}
    >
      <svg width="40" height="40" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        {pixels.map(([x, y], index) => (
          <motion.rect
            key={index}
            x={x}
            y={y}
            width="4"
            height="4"
            initial={{ opacity: reducedMotion ? 1 : 0 }}
            animate={{ opacity: reducedMotion ? 1 : [0, 1, 0] }}
            transition={reducedMotion ? { duration: 0 } : {
              duration: motionTokens.duration.diamond,
              times: [0, 0.01, 1],
              ease: 'easeInOut',
              delay: index * motionTokens.stagger,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}
