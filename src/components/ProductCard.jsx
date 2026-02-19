import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"; // Use the same CSS we wrote

function ProductCard({ image, name, price, route }) {
  const navigate = useNavigate();

  return (
    <div className="box" onClick={() => navigate(route)}>
      <img src={image} alt={name} className="box-image" />
      <div className="box-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
