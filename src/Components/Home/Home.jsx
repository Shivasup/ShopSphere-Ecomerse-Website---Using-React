import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      {/* HERO BANNER */}
      <div className="hero-banner">
        <div className="hero-text">
          <h1>Stock up on daily essentials</h1>
          <p>
            Get fresh groceries, snacks, household items and more delivered to
            your doorstep in minutes.
          </p>

          <Link to="/Cards" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="categories">
        {/* Pharmacy */}
        <Link to="/Pharmacy" className="cat-card green">
          <h3>Pharmacy</h3>
          <p>Medicines & health essentials</p>
        </Link>

        {/* Pet Care */}
        <Link to="/Petcare" className="cat-card yellow">
          <h3>Pet Care</h3>
          <p>Food, treats & accessories</p>
        </Link>

        {/* Baby Care */}
        <div className="cat-card blue">
          <h3>Baby Care</h3>
          <p>Diapers & baby essentials</p>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="features">
        <div>
          <h4>⚡ Fast Delivery</h4>
          <p>Get your order delivered quickly</p>
        </div>
        <div>
          <h4>🛒 Smart Cart</h4>
          <p>Add, remove & update quantity easily</p>
        </div>
        <div>
          <h4>🔒 Secure</h4>
          <p>Safe and smooth checkout experience</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
