import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { s, searchContext } from "../App";

const Navbar = () => {

  const arr = useContext(s);
  const { search, setSearch } = useContext(searchContext);

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">ShopSphere</Link>
      </div>

      <div className="nav-links">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Cards">Products</Link>
        <Link to="/RandomImg">Gallery</Link>
        <Link to="/Contact">Contact</Link>

        <Link to="/Addtocart" className="cart">
          🛒 Cart <span className="cart-count">{arr.length}</span>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;