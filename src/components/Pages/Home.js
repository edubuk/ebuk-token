import React from "react";
import './home.css'
import Tokenomics from "../Tokenomics/Tokenomics";
import Freatures from "../Features/CVFreature";
import CETAFeatureCard from "../Features/CetaFeature";
import OlympiadFeature from "../Features/OlympiadFeature";
import InternshipFeatur from "../Features/InternshipFeature";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <div className="home-container">
      <div className="phase-box">
        <h1 className="gradient-text">EBUK Token</h1>
        {/* <p>Live in</p> */}
        <div className="timer-div">
          <div id="timer-section">
            <span className="live-dot"></span><p>Presale Live</p>
          </div>
          {/* <div id="timer-section">
            <p>12</p>
            <p>Hours</p>
          </div>
          <div id="timer-section">
            <p>30</p>
            <p>Minutes</p>
          </div>
          <div id="timer-section">
            <p>43</p>
            <p>second</p>
          </div> */}
        </div>
      </div>
      <div className="crypto-data-section">
        <div className="video-container">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/5Cb6g7EEzAk?si=ILTH6o_E9nirqOr3&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>

        </div>
        <div className="buyer-container">
          <div className='info-step-box'>
            <h1 className='loader-text'>How To Purchase EBUK Tokens</h1>
            <p><strong>Note:</strong> Please complete your <Link to="/dashboard/user/user-kyc" id="status-link">KYC</Link> before purchasing the EBUK Tokens.</p>
            <h2>Step 1</h2>
            <ul>
              <li>We have 2 method to invest in our EBUK Token:<br></br> a. Fiat Currency (Only US Doller or Indian Rupee) b. Crypto Currency (Only USDT/USDC)</li>
              <li>Navigate to <Link to="/dashboard/user" id="status-link">Dashboard</Link> to buy token and use payment bank details of Eduprovince Pvt Ltd.</li>
              <li>Use your any paymnet gateway/channel and make a payment in any desired amount.</li>
              <li>Current EBUK token price: 1 EBUK = $0.015 or ₹1.32</li>
            </ul>
            <h2>Step 2</h2>
            <ul>
              <li>Take the screenshot of payment details or download as pdf.</li>
              <li>Fill the below payment form with amount you had paid.</li>
              <li>Upload the image/pdf of payment details and hit the submit button.</li>
            </ul>
            <h2>Step 3</h2>
            <ul>
              <li>Navigate to the <Link to="/dashboard/user/user-status" id="status-link">status</Link> page.</li>
              <li>All your Payment and Token related status will show there.</li>
              <li>If you have any kind of query or issue, reach out to us : <span>support@edubuk.com</span></li>
            </ul>
          </div>
          <Link to="/dashboard/user/user-kyc"> Proceed To Buy EBUK Tokens</Link>
        </div>
        {/* <div className="second-section">
          <h1 className="gradient-text" id="how-to-buy">How To Buy</h1>
          <div className="second-section-box">
            <div className="step-container">
              <p id="step-label">Step-1 Wallet Setup</p>
              <p id="step-welcome">Welcome aboard! Start by getting MetaMask on your desktop browser or a Wallet Connect-compatible wallet like Trust Wallet for your mobile.
                <br></br>
                Desktop users, MetaMask is ideal for a smooth purchase process. Mobile users, Trust Wallet or MetaMask connected through Wallet Connect is your go-to.</p>
              <div className="wallet-btn">
                <a href="#test">
                  Download
                  <img src={metamask} alt="matamask-logo"></img>
                </a>
                <a href="#test">
                  Download
                  <img src={trust} alt="trust-logo"></img>
                </a>
              </div>
            </div>
            <div className="step-container">
              <p id="step-label">Step-2 Purchase Process</p>
              <p id="step-welcome">
                Ready to invest? Simply pick your preferred currency on our site, input how many TICS tokens you'd like, and hit 'Buy Now'. A prompt will pop up from your wallet for transaction confirmation, where you’ll also see the gas fees.
                <br></br>
                <span id="italic-note">
                  Note: Purchasing with USDT/USDC may involve two approvals—one to okay the contract and another for the actual payment.
                </span>
              </p>
              <div className="tics-crypto-map">
                <img src={ticsMap} alt="tics-map" id="tics-map"></img>
              </div>
            </div>
            <div className="step-container">
              <p id="step-label">Step-3 Token Reception</p>
              <p id="step-welcome">
                Once our presale wraps up, you can collect your TICS tokens through our website or wait for an airdrop straight to your wallet. Meanwhile, keep an eye on your investment and the token prices from your dashboard. Just connect your wallet to our website, and voilà—you’re there!
              </p>
              <img src={tokenReception} alt="tics-map" id="token-reception"></img>
            </div>
          </div>
        </div> */}
        <Tokenomics id="tokenomics" />
        <Freatures />
        <div className="video-container">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/CsrP58BXpTA?si=bfbQrsQAl51VJKPd&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
        <CETAFeatureCard />
        <div className="video-container">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/fL4GB7rie54?si=lArzvbR6h4vLfQcg&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>

        </div>
        <OlympiadFeature />
        <InternshipFeatur />
      </div>
    </div>
  );
};
