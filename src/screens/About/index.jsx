import './AboutStyles.css';

function About() {
    return (
        <div className="about-page">
            <h1>Sobre Nós</h1>
            <div className="about-content">
                <div className="about-text">
                    <h2>Nossa História</h2>
                    <p>Fundada em 2000, a Loja de Esportes nasceu da paixão por esportes e da visão de oferecer produtos de alta qualidade para atletas e entusiastas. Ao longo dos anos, crescemos de uma pequena loja local para uma referência nacional em artigos esportivos.</p>
                    <h2>Nossa Missão</h2>
                    <p>Nossa missão é inspirar e equipar atletas de todos os níveis a alcançarem seu melhor desempenho. Acreditamos que o esporte tem o poder de transformar vidas e estamos comprometidos em fornecer os melhores produtos e serviços para apoiar sua jornada esportiva.</p>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nossa Loja" />
                </div>
            </div>
            <div className="our-values">
                <h2>Nossos Valores</h2>
                <ul>
                    <li><strong>Qualidade:</strong> Oferecemos apenas produtos de alta qualidade das melhores marcas.</li>
                    <li><strong>Atendimento:</strong> Nossa equipe é treinada para oferecer o melhor atendimento e orientação.</li>
                    <li><strong>Inovação:</strong> Estamos sempre atualizados com as últimas tendências e tecnologias esportivas.</li>
                    <li><strong>Comunidade:</strong> Apoiamos eventos esportivos locais e incentivamos um estilo de vida ativo.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;