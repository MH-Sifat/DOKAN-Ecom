import React from 'react';
import './Footer.css';
import footer_logo from '../../../../src/assets/images/logo_big.png';
import instagram from '../../../../src/assets/images/instagram_icon.png';
import pintester from '../../../../src/assets/images/pintester_icon.png';
import whatsapp from '../../../../src/assets/images/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} />
                <p>DOKAN</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram} />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester} />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;