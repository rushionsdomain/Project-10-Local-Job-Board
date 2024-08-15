import React from 'react';
import { Link }from 'react-router-dom';
import './homepage.css'; 

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <img src=".src//assets/network.jpeg" alt="logo"/>
        </div>

        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="sign-in-btn">Sign In</button>
            <button className="register-btn">Register</button>
          </div>
        </nav>
      </header>

        <main>
          <div className="homepage">
          <div className="search-container">
            <h1>YOUR DREAM JOB IS HERE</h1>
            <div className="search-box">
              <input type="text" placeholder="Search jobs" />
              <button className="search-button">🔍</button>
            </div>
          </div>

          <div className="jobs-section">
            <h2>JOBS FOR YOU</h2>
            <div className="job-card">
              <div className="job-info">
                <h3>UX/UI designer</h3>
                <p>Upwork | Remote (On)</p>
                <p>On Upwork you'll find a range of top freelancers and agencies...</p>
              </div>
              <button className="more-button">MORE</button>
            </div>
            <div className="job-card">
              <div className="job-info">
                <h3>Product designer</h3>
                <p>Facebook | CA, USA</p>
                <p>Facebook's mission is to give people the power to build community...</p>
              </div>
              <button className="more-button">MORE</button>
            </div>
            <div className="job-card">
              <div className="job-info">
                <h3>Part-time UX designer</h3>
                <p>Google | International</p>
                <p>Search the world's information, including webpages, images...</p>
              </div>
              <button className="more-button">MORE</button>
            </div>
            <div className="job-card">
              <div className="job-info">
                <h3>Web designer</h3>
                <p>LinkedIn | CA, USA</p>
                <p>LinkedIn, the world's largest professional network...</p>
              </div>
              <button className="more-button">MORE</button>
            </div>
          </div>

          <div className="jobs-section">
            <h2>NEW JOBS</h2>
            <div className="job-card">
              <div className="job-info">
                <h3>UI designer</h3>
                <p>Instagram | CA, USA</p>
                <p>Instagram is a photo and video-sharing social networking service...</p>
              </div>
              <button className="more-button">MORE</button>
            </div>
            <div className="job-card">
              <div className="job-info">
                <h3>Product designer</h3>
                <p>Google | International</p>
                <p>Search the world's information, including webpages, images...</p>
              </div>
              <button className="more-button">MORE</button>
            </div>
          </div>
        </div>
      </main>      
    </div>
  );
}

export default HomePage;
