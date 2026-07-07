import { Link } from 'react-router-dom'
import GooeyNav from '../components/ui/GooeyNav'
import { navItems } from '../components/ui/navItems'
import '../App.css'

export default function ZeroFive() {
    return (
        <div className="page">
            <nav className="navbar">
                <Link to="/" className="nav-brand cursor-target">s1lph</Link>
                <GooeyNav items={navItems} initialActiveIndex={3} />
            </nav>

            <div className="content-section">
                <h1 className="section-title cursor-target">zero.five</h1>
                <div className="about-content">
                    <p className="about-text">
                        Основатель <span className="highlight">zero.five tech</span>. Разрабатываем мессенджер со сквозным шифрованием на все основные платформы
                    </p>
                    <p className="about-text">
                        Наша цель — сделать <span className="highlight">приватное общение доступным каждому</span>: сообщения, звонки и файлы защищены end-to-end шифрованием, а ключи хранятся только у пользователей
                    </p>
                    <p className="about-text">
                        Единый опыт на <span className="highlight">iOS, Android, Windows, macOS и Linux</span> — с открытым протоколом и упором на безопасность
                    </p>
                </div>
            </div>
        </div>
    )
}
