import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='top'>
            <div className='item'>
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Kids</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className='item'>
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium nulla nec risus ultricies scelerisque. Pellentesque e, sit amet mattis, pulvinar quam ut, sollicitudin tellus.</span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium nulla nec risus ultricies scelerisque. Pellentesque luctus turpis eu luctus. Pellentesque bibendum ultrices dolor, at pulvinar nibh aliquet.</span>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='footer-left'>
                <span className='logo'>ClothesBE</span>
                <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
