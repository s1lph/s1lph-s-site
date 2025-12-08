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
                            <span className="skill-tag cursor-target">Python</span>
                            <span className="skill-tag cursor-target">Flask</span>
                            <span className="skill-tag cursor-target">Ai coding</span>
                            <span className="skill-tag cursor-target">Git</span>
                            <span className="skill-tag cursor-target">Ai researching</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
