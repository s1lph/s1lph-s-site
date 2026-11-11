"use client"

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import Dither from './components/backgrounds/Dither'
import TargetCursor from './components/cursors/TargetCursor'
import SiteLoader from './components/ui/SiteLoader'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Socials from './pages/Socials'
import ZeroFive from './pages/ZeroFive'
import './App.css'

function App() {
  const [pageReady, setPageReady] = useState(() => window.location.pathname !== '/')
  const [fontsReady, setFontsReady] = useState(false)
  const [minimumElapsed, setMinimumElapsed] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const markPageReady = useCallback(() => setPageReady(true), [])
  const loading = !timedOut && !(pageReady && fontsReady && minimumElapsed)

  useEffect(() => {
    let cancelled = false
    document.fonts.ready.then(() => {
      if (!cancelled) setFontsReady(true)
    })
    const minimum = window.setTimeout(() => setMinimumElapsed(true), 800)
    // Keep the site accessible if a font request or WebGL initialization stalls.
    const fallback = window.setTimeout(() => setTimedOut(true), 8000)
    return () => {
      cancelled = true
      window.clearTimeout(minimum)
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <BrowserRouter>
      <Analytics />
      <AnimatePresence>
        {loading && <SiteLoader key="site-loader" />}
      </AnimatePresence>
      <div className="app-container" inert={loading} aria-busy={loading}>
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
        <Dither
          waveColor={[0.25, 0.05, 0.35]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          waveFrequency={3}
          waveAmplitude={0.3}
          waveSpeed={0.05}
          colorNum={4}
          pixelSize={2}
        />
        <Routes>
          <Route path="/" element={<Home onReady={markPageReady} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/zero-five" element={<ZeroFive />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
