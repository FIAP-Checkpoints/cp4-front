import './ProductStyles.css';

function Products() {
    const products = [
        { id: 1, name: "Professional Basketball", price: 29.99, image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, name: "Running Shoes", price: 89.99, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHwy" },
        { id: 3, name: "Tennis Racket", price: 59.99, image: "https://images.unsplash.com/photo-1602211844066-d3bb556e983b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVubmlzJTIwcmFja2V0fGVufDB8MHwwfHx8Mg%3D%3D" },
        { id: 4, name: "Soccer Ball", price: 19.99, image: "https://images.unsplash.com/photo-1660926655800-3d11219f390d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyYmFsbHxlbnwwfDB8MHx8fDI%3D" },
        { id: 5, name: "Yoga Mat", price: 24.99, image: "https://images.unsplash.com/photo-1646239646963-b0b9be56d6b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYSUyMG1hdHxlbnwwfDB8MHx8fDI%3D" },
        { id: 6, name: "Dumbbell Set", price: 79.99, image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVtYmJlbGxzfGVufDB8MHwwfHx8Mg%3D%3D" },
        { id: 7, name: "Swimming Goggles", price: 15.99, image: "https://images.unsplash.com/photo-1467044705596-744699fa8931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbW1pbmclMjBnb2dnbGVzfGVufDB8MHwwfHx8Mg%3D%3D" },
        { id: 8, name: "Cycling Helmet", price: 49.99, image: "https://images.unsplash.com/photo-1701522814809-c339c2b60a7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZyUyMGhlbG1ldHxlbnwwfDB8MHx8fDI%3D" },
        { id: 9, name: "Football Ball", price: 49.99, image: "https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGwlMjBiYWxsfGVufDB8MHwwfHx8Mg%3D%3D" }
    ];

    return (
        <div className="products-page">
            <h1>Our Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;