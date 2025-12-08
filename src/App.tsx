import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dither from './components/backgrounds/Dither'
import TargetCursor from './components/cursors/TargetCursor'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
