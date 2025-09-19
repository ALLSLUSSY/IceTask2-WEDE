import React from "react";

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  header {
    background: #0a74da;
    color: white;
    padding: 20px;
    text-align: center;
  }
  header h1 {
    margin-bottom: 10px;
  }
  nav {
    margin-top: 10px;
  }
  nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
  }
  nav a:hover {
    text-decoration: underline;
  }
  section {
    padding: 40px 20px;
    text-align: center;
  }
  section h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #0a74da;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .product-card {
    background: #f4f4f4;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }
  .product-card:hover {
    transform: scale(1.05);
  }
  .product-card img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  footer {
    background: #0a74da;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 40px;
  }
  @media (max-width: 1024px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
    }
    nav a {
      margin: 10px 0;
    }
    .products {
      grid-template-columns: 1fr;
    }
  }
`;

const App: React.FC = () => (
  <>
    <style>{styles}</style>
    <header>
      <h1>IT Tech Store</h1>
      <p>Your one-stop shop for electronics</p>
      <nav>
        <a href="#laptops">Laptops</a>
        <a href="#phones">Phones</a>
        <a href="#tablets">Tablets</a>
        <a href="#accessories">Accessories</a>
      </nav>
    </header>

    <section id="laptops">
      <h2>Laptops</h2>
      <div className="products">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxcQXu_jdWvEdblglTXwpLJ-_yhLDfnNBDQ&s" alt="Laptop 1" />
          <h3>Gaming Laptop</h3>
          <p>$1200</p>
        </div>
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPT1QNnQL4nQZO-qvpMwdvlLStPTmfIs8XA&s" alt="Laptop 2" />
          <h3>Business Laptop</h3>
          <p>$950</p>
        </div>
      </div>
    </section>

    <section id="phones">
      <h2>Phones</h2>
      <div className="products">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SYUvyqGDbl7dP5J9TMlCaFRuNNvCln1i7Q&s" alt="Phone 1" />
          <h3>Smartphone X</h3>
          <p>$800</p>
        </div>
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRBXhFw58WPn8AGcdVv7GrDW2_wX3Ha4V1g&s" alt="Phone 2" />
          <h3>Smartphone Pro</h3>
          <p>$999</p>
        </div>
      </div>
    </section>

    <section id="tablets">
      <h2>Tablets</h2>
      <div className="products">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vKEOZz93MJ4-kotvRiVxwjXpQ096nZ546Q&s" alt="Tablet 1" />
          <h3>Tablet Air</h3>
          <p>$600</p>
        </div>
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvIIL2GO7UI7DlOEt-KQ5c6E9kkWTx8qLXA&s" alt="Tablet 2" />
          <h3>Tablet Pro</h3>
          <p>$850</p>
        </div>
      </div>
    </section>

    <section id="accessories">
      <h2>Accessories</h2>
      <div className="products">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjqMTCg7UjNi48kwEgCSxadlwJlok9pkJmA&s" alt="Accessory 1" />
          <h3>Wireless Mouse</h3>
          <p>$40</p>
        </div>
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLdhHyWGHH7Ul2YFQdCi8_1L5syWEdIGNlA&s" alt="Accessory 2" />
          <h3>Bluetooth Headphones</h3>
          <p>$120</p>
        </div>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 IT Tech Store. All Rights Reserved.</p>
    </footer>
  </>
);

export default App;
