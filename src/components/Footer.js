import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-section">
            <h3>ONLINE STORE</h3>
            <ul>
              <li><Link to="/">MEN'S CLOTHING</Link></li>
              <li><Link to="/">WOMEN'S CLOTHING</Link></li>
              <li><Link to="/">MEN'S ACCESSORIES</Link></li>
              <li><Link to="/">WOMEN'S ACCESSORIES</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>HELPFUL LINKS</h3>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/">ABOUT</Link></li>
              <li><Link to="/">CONTACT</Link></li>
              <li><Link to="/">UGC</Link></li>
              <li><Link to="/">+ MANY MORE</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>PARTNERS</h3>
            <ul>
              <li><Link to="/">ZARA</Link></li>
              <li><Link to="/">PANTALOONS</Link></li>
              <li><Link to="/">LEVIS</Link></li>
              <li><Link to="/">UCB</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ADDRESS</h3>
            <ul>
              <li>BUILDING 101</li>
              <li>CENTRAL AVENUE</li>
              <li>LA - 902722</li>
              <li>UNITED STATES</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;