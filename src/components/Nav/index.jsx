import { Link } from 'react-router-dom';
import './Styles.css';

function Nav() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/path/to/logo.png" alt="Logo da Loja de Esportes" />
                <h1>Loja de Esportes</h1>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
