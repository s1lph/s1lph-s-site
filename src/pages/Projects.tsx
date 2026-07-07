import { Link } from 'react-router-dom'
import GooeyNav from '../components/ui/GooeyNav'
import { navItems } from '../components/ui/navItems'
import '../App.css'

const projects = [
    {
        id: 1,
        title: 'Yo.Route',
        description: 'Логистическая система',
        tags: ['Python', 'Flask', 'Ai coding'],
        link: 'https://github.com/s1lph/yo-rote'
    },
    {
        id: 2,
        title: 'FishDetect',
        description: 'Детектор фишинговых ссылок',
        tags: ['Python', 'FastAPI'],
        link: 'https://github.com/s1lph/FishDetect'
    },
    {
        id: 3,
        title: 'Сайт-леднинг',
        description: 'Репозиторий этого сайта',
        tags: ['React', 'TypeScript'],
        link: 'https://github.com/s1lph/s1lph-s-site'
    },
    {
        id: 4,
        title: 'Karas Messenger',
        description: 'Безопасный шифрованный мессенджер',
        tags: ['React', 'TypeScript', 'Java'],
        link: 'https://github.com/s1lph/KarasPublic'
    }
]

export default function Projects() {
    return (
        <div className="page">
            <nav className="navbar">
                <Link to="/" className="nav-brand cursor-target">s1lph</Link>
                <GooeyNav items={navItems} initialActiveIndex={1} />
            </nav>

            <div className="content-section">
                <h1 className="section-title cursor-target">Проекты</h1>
                <div className="projects-grid">
                    {projects.map(project => (
                        <a key={project.id} href={project.link} className="project-card cursor-target">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
