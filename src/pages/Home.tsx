import { Link } from 'react-router-dom'
import LogoLoop from '../components/ui/LogoLoop'
import { SiPython, SiFlask, SiGit, SiOpenai, SiReact, SiTypescript } from 'react-icons/si'
import '../App.css'

const techLogos = [
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiOpenai />, title: "AI", href: "https://openai.com" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://typescriptlang.org" },
]

export default function Home() {
    return (
        <div className="page">
            <div className="hero">
                <h1 className="hero-title cursor-target">s1lph</h1>
                <p className="hero-subtitle">Учусь, исследую, использую.</p>
                <div className="hero-links">
                    <Link to="/about" className="nav-link cursor-target">О себе</Link>
                    <Link to="/projects" className="nav-link cursor-target">Проекты</Link>
                    <Link to="/socials" className="nav-link cursor-target">Соц. сети</Link>
                </div>
                <div className="logo-loop-container">
                    <LogoLoop
                        logos={techLogos}
                        speed={80}
                        direction="left"
                        logoHeight={32}
                        gap={48}
                        hoverSpeed={0}
                        scaleOnHover
                        ariaLabel="Технологии"
                    />
                </div>
            </div>
        </div>
    )
}
