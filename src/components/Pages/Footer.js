import React from 'react'
import './footer.css'
import logo from '../../assets/EdubukLogo.png';
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
            <Link to="/sign-up">Sign-Up for Presale</Link>
          </div>
          <div className='footer-info-container'>
            <div className='footer-info-section'>
              <div className='footer-company-info'>
                <img src={logo} alt="company-logo" style={{ width: "150px" }}></img>
                <p>Join the Edubuk token presale
                  <br></br>
                  <br></br>
                  Registered Office: 4th Floor, RAKDAO(Digital Assests Oasis), RAKBANK HQ, RAK,UAE
                  <br></br>
                  support@edubukeseal.org</p>
              </div>
              <div className='footer-company-info-links' >
                <div className='footer-company-links'>
                  <div className='links'>
                    <a href='#vision'>Our Vision</a>
                    <a href='#tokenomics'>Tokenomics</a>
                    </div>
                </div>
                <div className='footer-company-links'>
                  <div className='links'>
                  <a href="https://drive.google.com/file/d/1EW5mnQg4HLZUoKbCkX2sXMbkV0Dkyknx/view" className="nav-link" target='_blank' rel="noreferrer">PitchDeck</a>
                    <a href="https://drive.google.com/file/d/1gzXdHZHny33XqV-f-DNr7APQwXQWlF-2/view" className="nav-link" target='_blank' rel="noreferrer">Whitepaper</a>
                  </div>
                </div>
                <div className='footer-company-links'>
                  <div className='links'>
                    <Link to='terms-conditions'>Term&Condition</Link>
                    <Link to="privacy-policy">Privacy&Policy</Link>
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
