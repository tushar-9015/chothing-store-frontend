import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
  return (
    <>
      <footer className="desk-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-heading">About Us</h2>
            <p className='desc'>
              ClothesBE is an e-commerce platform providing high-quality fashion products at affordable prices. Our mission is to offer customers a seamless shopping experience.
            </p>
          </div>

          <div className="footer-section">
            <h2 className="footer-heading">Contact Us</h2>
            <ul className="contact-list desc">
              <li>123 Main Street, Anytown India</li>
              <li>(555) 555-5555</li>
            </ul>
          </div>

          <div className="footer-section links">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="links-list">
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/products">Products</Link>
              </li>
              <li>
                <Link className="link" to="https://github.com/tushar-9015">GitHub</Link>
              </li>
              <li>
                <Link className="link" to="https://www.linkedin.com/in/tushar-joshi-495486252">LinkedIn</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section social">
            <h2 className="footer-heading">Follow Us</h2>
            <ul className="social-list">
              <li>
                <Link className="link" target="_blank" to="https://github.com/tushar-9015" aria-label="GitHub">
                  <TiSocialGithub className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link className="link" target="_blank" to="https://twitter.com/Tushar9015" aria-label="Twitter">
                  <TiSocialTwitter className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link className="link" target="_blank" to="https://www.linkedin.com/in/tushar-joshi-495486252" aria-label="LinkedIn">
                  <TiSocialLinkedin className="nav-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="desk-footer-bottom">
          <p>© 2023 Ecommerce Inc. All rights reserved by Tushar Joshi</p>
        </div>
      </footer>

      {/* ------------ Mobile Footer ------------------- */}
      <footer className="mobile-footer">
        <p className="footer-header">
          Made with <span className="footer-logo">{"</>"}</span> by Tushar Joshi
        </p>
        <div className="social-icons-container">
          <Link
            className="social-icons"
            target="_blank"
            to="https://github.com/tushar-9015"
            aria-label="GitHub"
          >
            <TiSocialGithub className="social-icon" />
          </Link>
          <Link
            className="social-icons"
            target="_blank"
            to="https://twitter.com/Tushar9015"
            aria-label="Twitter"
          >
            <TiSocialTwitter className="social-icon" />
          </Link>
          <Link
            className="social-icons"
            target="_blank"
            to="https://www.linkedin.com/in/tushar-joshi-495486252"
            aria-label="LinkedIn"
          >
            <TiSocialLinkedin className="social-icon" />
          </Link>
        </div>
        <p className="footer-bottom">© 2023 | ClothesBE</p>
      </footer>
    </>
  );
};

export default Footer;
