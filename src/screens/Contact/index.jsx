import './ContactStyles.css';

function Contact() {
    return (
        <div className="contact-page">
            <h1>Entre em Contato</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Informações de Contato</h2>
                    <p><i className="fas fa-map-marker-alt"></i> Rua dos Esportes, 123 - São Paulo, SP</p>
                    <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
                    <p><i className="fas fa-envelope"></i> contato@lojaesportes.com</p>
                    <p><i className="fas fa-clock"></i> Segunda a Sábado: 9h às 18h</p>
                </div>
                <form className="contact-form">
                    <h2>Envie uma Mensagem</h2>
                    <input type="text" placeholder="Seu Nome" required />
                    <input type="email" placeholder="Seu Email" required />
                    <input type="text" placeholder="Assunto" required />
                    <textarea placeholder="Sua Mensagem" required></textarea>
                    <button type="submit" className="submit-button">Enviar Mensagem</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;