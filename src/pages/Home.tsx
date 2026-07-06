import { Link } from 'react-router-dom'
import LogoLoop from '../components/ui/LogoLoop'
import ASCIIText from '../components/ui/ASCIIText'
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
                <div className="ascii-hero cursor-target">
                    <ASCIIText
                        text="s1lph"
                        enableWaves
                        asciiFontSize={6}
                        textFontSize={200}
                        planeBaseHeight={15}
                    />
                </div>
                <div className="hero-links">
                    <Link to="/about" className="nav-link cursor-target">О себе</Link>
                    <Link to="/projects" className="nav-link cursor-target">Проекты</Link>
                    <Link to="/socials" className="nav-link cursor-target">Соц. сети</Link>
                    <Link to="/zero-five" className="nav-link cursor-target">zero.five</Link>
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
