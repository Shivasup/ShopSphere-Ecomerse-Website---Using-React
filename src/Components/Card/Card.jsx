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
            <img
              src={e.image ? e.image : "https://via.placeholder.com/200"}
              alt={e.name}
            />
          </div>

          <div className="card-content">
            <h3 className="name">{e.name}</h3>
            <p className="category">{e.description}</p>
            <h2 className="price">$ {Math.round(Number(e.price))}</h2>

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