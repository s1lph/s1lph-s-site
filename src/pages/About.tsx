import { Link } from 'react-router-dom'
import '../App.css'

export default function About() {
    return (
        <div className="page">
            <nav className="navbar">
                <Link to="/" className="nav-brand cursor-target">s1lph</Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link cursor-target">Главная</Link>
                    <Link to="/projects" className="nav-link cursor-target">Проекты</Link>
                    <Link to="/socials" className="nav-link cursor-target">Соц. сети</Link>
                </div>
            </nav>

            <div className="content-section">
                <h1 className="section-title cursor-target">О себе</h1>
                <div className="about-content">
                    <p className="about-text">
                        Привет! Я <span className="highlight">s1lph</span> — программист, который постоянно учится новому.
                    </p>
                    <p className="about-text">
                        Мой подход: <span className="highlight">Учусь, исследую, использую.</span>
                    </p>
                    <div className="skills">
                        <h3 className="skills-title">Навыки</h3>
                        <div className="skill-tags">
                            <a href="https://python.org" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Python</a>
                            <a href="https://flask.palletsprojects.com" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Flask</a>
                            <a href="https://gemini.google.com/u/1/app/927d3dedda16f789" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Ai coding</a>
                            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Git</a>
                            <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="skill-tag cursor-target">Ai researching</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
