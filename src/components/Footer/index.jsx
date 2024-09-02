import './FooterStyles.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h2>Sobre Nós</h2>
                        <p>Somos uma loja especializada em artigos esportivos. Oferecemos uma ampla gama de produtos para todos os esportes.</p>
                    </div>
                    <div className="footer-section">
                        <h2>Links Rápidos</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/produtos">Produtos</a></li>
                            <li><a href="/sobre">Sobre</a></li>
                            <li><a href="/contato">Contato</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h2>Contato</h2>
                        <p><i className="fas fa-envelope"></i> contato@lojaesportes.com</p>
                        <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Loja de Esportes. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;