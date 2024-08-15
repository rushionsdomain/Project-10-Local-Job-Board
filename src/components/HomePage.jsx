import React from 'react';
import { Link }from 'react-router-dom';
import './homepage.css'; 

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="sign-in-btn">Sign In</button>
            <button className="register-btn">Register</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="title">Title</h1>
          <p className="subtitle">Subtitle</p>
        </section>

        <section className="quotes">
          <h2 className="heading">Heading</h2>
          <p className="subheading">Subheading</p>
          <div className="quote-grid">
              <div className="quote-card">
                <p className="quote">"Quote"</p>
                <h3 className="quote-title">Title</h3>
                <p className="quote-description">Description</p>
              </div>
              <div className="quote-card">
                <p className="quote">"Quote"</p>
                <h3 className="quote-title">Title</h3>
                <p className="quote-description">Description</p>
              </div>
              <div className="quote-card">
                <p className="quote">"Quote"</p>
                <h3 className="quote-title">Title</h3>
                <p className="quote-description">Description</p>
              </div>
              <div className="quote-card">
                <p className="quote">"Quote"</p>
                <h3 className="quote-title">Title</h3>
                <p className="quote-description">Description</p>
              </div>
              <div className="quote-card">
                <p className="quote">"Quote"</p>
                <h3 className="quote-title">Title</h3>
                <p className="quote-description">Description</p>
              </div>
              <div className="quote-card">
                <p className="quote">"Quote"</p>
                <h3 className="quote-title">Title</h3>
                <p className="quote-description">Description</p>
              </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default HomePage;
