import React from 'react'
import './footer.css'
import logo from '../../assets/EdubukLogoClean.png';
import twitter from '../../assets/twitter.svg';
import telegram from '../../assets/telegram.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import marketcap from '../../assets/marketcap.svg'
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
        <p>Join the Edubuk crypto presale—the world's first Layer 1, Web3 aggregated ecosystem that unites leading blockchains like Bitcoin, Ethereum, and Solana. Our platform is designed for innovative applications set to revolutionize blockchain utilization.
        <br></br>
        <br></br>
        Qubetics Labs LLC
        <br></br>
Company No: FSC/200/LLC 2233/24
<br></br>
Registered Office: 301 Chetumal Street, Belize City, Belize
<br></br>
support@edubuk.com</p>
        </div>
        <div className='footer-company-info-links' >
        <div className='footer-company-links'>
        <p id='footer-links-title'>About</p>
        <div className='links'>
          <a href='#vision'>Our Vision</a>
          <a href='#tokenomics'>Tokenomics</a>
          <a href='"#roadmap'>Roadmap</a>
          <a href="#blogs">Blogs</a>
          <a href='#whitepaper'>Whitepaper</a>
         <a href='#qna'>Q&A</a>
        <a href='#htob'>How to Buy</a>
        </div>
        </div>
        <div className='footer-company-links'>
        <p id='footer-links-title'>Features</p>
        <div className='links'>
          <a href='#walllet'>Wallet</a>
          <a href='#bni'>Banks & Institutions</a>
          <a href='#token'>EDBUK</a>
          <a href='#whitepaper'>EduNode</a>
          <a href='#whitepaper'>DVPN</a>
        </div>
        </div>
        <div className='footer-company-links'>
        <p id='footer-links-title'>Legal</p>
        <div className='links'>
          <a href='#whitepaper'>Terms of Use</a>
          <a href='#whitepaper'>Cookies Policy</a>
          <a href='#whitepaper'>Disclaimer</a>
          <a href='#whitepaper'>Press Kit</a>
          <a href='#whitepaper'>Contact</a>
        </div>
        </div>
        </div>
      </div>
      <div className='footer-social-section'>
      <p>Get in touch!</p>
      <div className='footer-social-icon-section'>
      <a href="#test">
        <img src={twitter} alt='social-icon' id='social-icon'></img>
      </a>
      <a href="#test">
        <img src={telegram} alt='social-icon' id='social-icon'></img>
      </a>
      <a href="#test">
        <img src={youtube} alt='social-icon' id='social-icon'></img>
      </a>
      <a href="#test">
        <img src={instagram} alt='social-icon' id='social-icon'></img>
      </a>
      <a href="#test">
        <img src={marketcap} alt='social-icon' id='social-icon'></img>
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
