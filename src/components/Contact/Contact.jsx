import React from 'react'
import { TiSocialFacebook, TiSocialGithub, TiSocialGooglePlus, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
            <input type='text' placeholder='Enter your e-mail...'/>
            <button>JOIN US</button>
            <div className='contact-icons'>
                <TiSocialLinkedin className='contact-icons-icon'/>
                <TiSocialGithub className='contact-icons-icon'/>
                <TiSocialTwitter className='contact-icons-icon'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
