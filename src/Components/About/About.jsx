import "./About.css";

const About = () => {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About ShopEase</h1>
          <p>Your trusted platform for fast and smart online shopping</p>
        </div>
      </div>

      {/* INTRO */}
      <div className="about-intro">
        <h2>Who We Are</h2>
        <p>
          <strong>ShopEase</strong> is a modern e-commerce platform built to
          provide a seamless shopping experience. Our system focuses on
          performance, security, and simplicity so customers can easily browse,
          add items to cart, and manage purchases without hassle.
        </p>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-card">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h3>500+</h3>
          <p>Products Available</p>
        </div>

        <div className="stat-card">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>

        <div className="stat-card">
          <h3>99%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="about-content">

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To deliver a reliable and user-friendly online shopping experience
            while ensuring fast performance, smooth navigation, and accurate
            cart management.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>
          <ul>
            <li>Wide range of high-quality products</li>
            <li>Smart cart with quantity control</li>
            <li>Fast product browsing</li>
            <li>Modern responsive UI</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Technology Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> React, JavaScript, HTML, CSS</li>
            <li><strong>Routing:</strong> React Router</li>
            <li><strong>State:</strong> Context API</li>
            <li><strong>API:</strong> FakeStore API</li>
            <li><strong>Tools:</strong> Git, GitHub, VS Code</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aim to build a scalable e-commerce ecosystem by continuously
            improving technology, performance, and user satisfaction.
          </p>
        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="why-us">
        <h2>Why Choose ShopEase</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>⚡ Fast Experience</h3>
            <p>Optimized UI for fast browsing and product loading.</p>
          </div>

          <div className="why-card">
            <h3>🛒 Smart Cart</h3>
            <p>Easy cart management with quantity and price updates.</p>
          </div>

          <div className="why-card">
            <h3>🔒 Secure Platform</h3>
            <p>Reliable and secure architecture for safe usage.</p>
          </div>

          <div className="why-card">
            <h3>📱 Responsive Design</h3>
            <p>Works perfectly on desktop, tablet, and mobile devices.</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;