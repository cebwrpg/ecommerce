import React from "react";
import "./home.css";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { products } from "../api/products";



function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <span className="Gold">DEAL</span>
          <span className="Black">HUNTS</span>
        </div>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/">Cart</a>
          <a href="/">Categories</a>
          <button
            className="home-Login"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </nav>
      </header>

{/*Main start here*/}
<main>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          route={product.route}
        />
      ))}
    </main>

      {/* <main className="main">
        <div className="box"
            onClick={()=> navigate("/item/1")}>
                <img 
                src="/images/image1.jpg"
                alt="Samsung s25"
                className="box-image"/>
        <div className="box-info">
            <h3>Samsung s25</h3>
            <p>$1499</p>
        </div>
        </div>
      </main> */}

      <footer className="footer">
        <p>© 2026 Website. All rights reserved.</p>
      </footer>
      </div>
  );
}

export default Home;
