import React, { useEffect, useState, useContext } from "react";
import { a, searchContext } from "../../App";
import "./Petcare.css";

const Petcare = () => {

  const [data, setData] = useState([]);
  const addCart = useContext(a);
  const { search } = useContext(searchContext);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch("https://petcare-byc5.onrender.com/api/");
      const result = await res.json();
      setData(result);
    };

    fetchData();

  }, []);

  const filteredProducts = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-container">

      {filteredProducts.map((e) => (
        <div className="card-container" key={e.name}>

          <div className="card-image">
            <img src={e.images} alt={e.name} />
          </div>

          <div className="card-content">
            <h3 className="name">{e.name}</h3>
            <p className="category">{e.description}</p>
            <h2 className="price">₹ {Math.round(Number(e.price))}</h2>

            <button className="cart-btn" onClick={() => addCart(e)}>
              Add to Cart 🛒
            </button>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Petcare;