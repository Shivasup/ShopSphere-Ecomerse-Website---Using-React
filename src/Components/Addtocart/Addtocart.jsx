import React, { useContext } from "react";
import { pr, r, rem, s, u } from "../../App";
import "./Addtocart.css";

const Addtocart = () => {
  let g = useContext(s);
  let p = useContext(pr);
  let re = useContext(r);
  let up = useContext(u);
  let d = useContext(rem);

  return (
    <div className="cart-container">
      <table className="table">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Title</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {g.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>

              <td className="qty-box">
                <button className="qty-btn" onClick={() => d(index)}>
                  -
                </button>

                <span className="qty-number">{item.qty || 1}</span>

                <button className="qty-btn" onClick={() => up(index)}>
                  +
                </button>
              </td>

              <td>₹{item.price}</td>

              <td>
                <img src={item.image} className="product-img" />
              </td>

              <td>
                <button className="delete-btn" onClick={() => re(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="6" className="total">
              <h2>Total Amount = ${p.toFixed(2)}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Addtocart;