import './Styles.css';

function Home() {
    return (
        <>
            <section className="main-sec hero" id="featured">
                <h1>Welcome to SportsPro</h1>
                <p>Your one-stop shop for all your sporting needs</p>
                <button className="cta-button">Shop Now</button>
            </section>

            <section className="black-section categories" id="categories">
                <h2>Our Categories</h2>
                <div className="category-grid">
                    <div className="category-item">
                        <img src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Basketball" />
                        <h3>Basketball</h3>
                    </div>
                    <div className="category-item">
                        <img src="https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Football" />
                        <h3>Football</h3>
                    </div>
                    <div className="category-item">
                        <img src="https://images.unsplash.com/photo-1530915534664-4ac6423816b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tennis" />
                        <h3>Tennis</h3>
                    </div>
                    <div className="category-item">
                        <img src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Swimming" />
                        <h3>Swimming</h3>
                    </div>
                    
                </div>
            </section>

            <section className="main-sec about" id="about">
    <h2>About SportsPro</h2>
    <div className="about-content">
        <div className="about-text">
            <p>SportsPro has been serving sports enthusiasts for over 20 years. We pride ourselves on offering top-quality gear and expert advice for all your sporting needs.</p>
            <p>Our mission is to inspire and equip athletes of all levels to achieve their personal best. With a wide range of products from leading brands and our knowledgeable staff, we&apos;re here to support your athletic journey.</p>
            <ul className="about-features">
                <li>Extensive selection of sports equipment and apparel</li>
                <li>Expert staff with years of sports experience</li>
                <li>Competitive pricing and price match guarantee</li>
                <li>Community events and local team sponsorships</li>
            </ul>
            <button className="secondary-button">Learn More</button>
        </div>
        <div className="about-image">
            <img src="https://images.unsplash.com/photo-1512144447775-c333a240d521?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="SportsPro Store Interior" />
        </div>
    </div>
    <div className="testimonial">
        <blockquote>&quot;SportsPro has been my go-to store for all my sporting needs. Their staff is incredibly knowledgeable and always helps me find the perfect gear!&quot;</blockquote>
        - Sarah J., Local Marathon Runner
    </div>
</section>
        </>
    )
}

export default Home;