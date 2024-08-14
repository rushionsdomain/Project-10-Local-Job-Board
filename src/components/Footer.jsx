import React, { useState } from "react";
import './footer.css';

function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-header">
                    <h4>Navigation</h4>
                    <h4>Fast Access</h4> 
                    <h4>Language</h4>
                </div>
                <div className="footer-navigation">
                    <div className="footer-section">
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Advertising</li>
                            <li>Small Business</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                            <li>Talent Solutions</li>
                            <li>Marketing Solutions</li>
                            <li>Sales Solutions</li>
                            <li>Safety Center</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                            <li>Community Guidelines</li>
                            <li>Privacy & Terms</li>
                            <li>Mobile App</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-fast-access">
                    <button className="footer-button">QUESTIONS?</button>
                    <button className="footer-button">SETTINGS</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Net-Work. All Rights Reserved.</p>
                <div className="language-dropdown">
                    <select value={selectedLanguage} onChange={handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="sw">Swahili</option>
                    </select>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
