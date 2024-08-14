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