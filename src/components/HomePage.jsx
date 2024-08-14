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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div>LOGO</div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Use Cases</h4>
              <ul>
                <li><a href="#">UI Design</a></li>
                <li><a href="#">UX Design</a></li>
                <li><a href="#">Wireframing</a></li>
                <li><a href="#">Diagramming</a></li>
                <li><a href="#">Brainstorming</a></li>
                <li><a href="#">Team Collaboration</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Design</a></li>
                <li><a href="#">Prototyping</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Design Systems</a></li>
                <li><a href="#">Collaboration</a></li>
                <li><a href="#">Design Process</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Best Practices</a></li>
                <li><a href="#">Colors</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Resource Library</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
