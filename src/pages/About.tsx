import { Link } from 'react-router-dom'
import GooeyNav from '../components/ui/GooeyNav'
import { navItems } from '../components/ui/navItems'
import '../App.css'

export default function About() {
    return (
        <div className="page">
            <nav className="navbar">
                <Link to="/" className="nav-brand cursor-target">s1lph</Link>
                <GooeyNav items={navItems} initialActiveIndex={0} />
            </nav>

            <div className="content-section">
                <h1 className="section-title cursor-target">О себе</h1>
                <div className="about-content">
                    <p className="about-text">
                        <span className="highlight">Кутузов Дмитрий Алексеевич</span>. Учащийся старшей школы. Веб-разработчик и основатель различных проектов
                    </p>
                    <p className="about-text">
                        Для написания кода в данный момент использую ИИ, однако <span className="highlight">активно учусь разработке</span>
                    </p>
                    <div className="skills">
                        <h3 className="skills-title">Навыки</h3>
                        <div className="skill-tags">
                            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Git</a>                           
                            <a href="https://python.org" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Python</a>
                            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">TypeScript</a>
                            <a href="https://flask.palletsprojects.com" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Flask</a>
                            <a href="https://aiogram.dev/" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Aiogram</a>
                            <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Android Studio</a>
                            <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">XCode</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
