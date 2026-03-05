import React, { useContext } from "react";
import "./Card.css";
import { a, d } from "../../App";

const Card = () => {
  const data = useContext(d);
  const addCart = useContext(a);

  return (
    <div className="main-container">
      {data.map((e) => (
        <div className="card-container" key={e.id}>
          <div className="card-image">
            <img src={e.image} alt={e.title} />
          </div>

          <div className="card-content">
            <h3 className="title">{e.title}</h3>
            <p className="category">{e.category}</p>
            <h2 className="price">$ {Math.round(e.price)}</h2>

            <button
              className="cart-btn"
              onClick={() => {
                addCart(e);
              }}
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;