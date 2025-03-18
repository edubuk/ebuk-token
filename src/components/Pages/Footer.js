import React from 'react'
import './footer.css'
import logo from '../../assets/EdubukLogoClean.png';
import twitter from '../../assets/twitter.svg';
import telegram from '../../assets/telegram.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-bg'></div>
    <div className='footer-inner'>
    <div className='form-container'>
    <Link to="/sign-up">Sign up to Edubuk</Link>
    </div>
    <div className='footer-info-container'>
      <div className='footer-info-section'>
        <div className='footer-company-info'>
        <img src={logo} alt="company-logo" style={{width:"150px"}}></img>
        <p>Join the Edubuk token presale
        <br></br>
<br></br>
Registered Office: 4th Floor, RAKDAO(Digital Assests Oasis), RAKBANK HQ, RAK,UAE
<br></br>
support@edubukeseal.org</p>
        </div>
        <div className='footer-company-info-links' >
        <div className='footer-company-links'>
        <p id='footer-links-title'>About</p>
        <div className='links'>
          <a href='#vision'>Our Vision</a>
          <a href='#tokenomics'>Tokenomics</a>
          <Link to="https://token-presale-two.vercel.app/whitepaper">Whitepaper</Link>
        </div>
        </div>
        <div className='footer-company-links'>
        <p id='footer-links-title'>Features</p>
        <div className='links'>
          <a href='#token'>EDBUK</a>
          <a href='#whitepaper'>EduNode</a>
          <a href='#whitepaper'>DVPN</a>
        </div>
        </div>
        <div className='footer-company-links'>
        <p id='footer-links-title'>Legal</p>
        <div className='links'>
          <a href='#whitepaper'>Terms of Use</a>
          <a href='#whitepaper'>Disclaimer</a>
          <a href='#whitepaper'>Contact</a>
        </div>
        </div>
        </div>
      </div>
      <div className='footer-social-section'>
      <p>Get in touch!</p>
      <div className='footer-social-icon-section'>
      <a href="https://x.com/edubuktrust">
        <img src={twitter} alt='social-icon' id='social-icon'></img>
      </a>
      <a href="https://t.me/edubukofficial">
        <img src={telegram} alt='social-icon' id='social-icon'></img>
      </a>
      <a href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos">
        <img src={youtube} alt='social-icon' id='social-icon'></img>
      </a>
      <a href="https://www.instagram.com/edubuk_/">
        <img src={instagram} alt='social-icon' id='social-icon'></img>
      </a>
      </div>
      </div>
    </div>
    </div> 
    <div className='footer-bottom-section'>
          <p>©2025 Copyright Edubuk. All rights reserved</p> 
    </div> 
    </div> 
    </>
  )
}

export default Footer
