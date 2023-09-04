import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import {  TiSocialGithub, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

const Footer = () => {
  return (
<>
      <footer className="desk-footer">
        <div className="footer-content">
          <div className="footer-section about ">
            <h2 className="footer-heading">About Us</h2>
            <p>
              ClothesBE is a fashion e-commerce website website that provides
              high-quality products to our customers at affordable prices.
            </p>
          </div>
          <div className="footer-section ">
            <h2 className="footer-heading contact">Contact Us</h2>
            <ul className="contact-list">
              <li>
                <i> </i> 123 Main Street,
                Anytown India
              </li>
              <li>
                <i className="ab"></i> (555) 555-5555
              </li>
            </ul>
          </div>
          <div className="footer-section ">
            <h2 className="footer-heading links">Links</h2>
            <ul className="links-list">
              <li>
                <Link className='link' to="/">Home</Link>
              </li>
              <li>
                <Link className='link' to="/products">Products</Link>
              </li>
              <li>
                <Link className='link' to="https://github.com/tushar-9015">About Us</Link>
              </li>
              <li>
                <Link className='link' to="https://www.linkedin.com/in/tushar-joshi-495486252">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section ">
            <h2 className="footer-heading social">Follow Us</h2>
            <ul className="social-list">
              <li>
                <Link className='link' target="_blank" to="https://github.com/tushar-9015">
                  <TiSocialGithub className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link className='link' target="_blank" to="https://twitter.com/Tushar9015">
                  <TiSocialTwitter className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link 
                  className='link '
                  target="_blank"
                  to="https://www.linkedin.com/in/tushar-joshi-495486252"
                >
                  <TiSocialLinkedin className="nav-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="desk-footer-bottom">
          <p>
            &copy; 2023 Ecommerce Inc. All rights reserved By Tushar Joshi
          </p>
        </div>
      </footer>
      {/* ------------Mobile footer------------------- */}
      <footer className="mobile-footer">
        <p className="footer-header">
          Made with <span className="footer-logo">{`</>`}</span> by Tushar Joshi
        </p>
        <div className="social-icons-container">
          <Link
            className="social-icons"
            target="_blank"
            to="https://github.com/tushar-9015"
          >
            <TiSocialGithub className="social-icon" />
          </Link>
          <Link
            className="social-icons"
            target="_blank"
            to="https://twitter.com/Tushar9015"
          >
            <TiSocialTwitter className="social-icon" />
          </Link>
          <Link
            className="social-icons"
            target="_blank"
            to="https://www.linkedin.com/in/tushar-joshi-495486252"
          >
            <TiSocialLinkedin className="social-icon" />
          </Link>
        </div>
        <p className="footer-bottom">© 2023 | ClothesBE</p>
      </footer>
    </>
  )
}

export default Footer
