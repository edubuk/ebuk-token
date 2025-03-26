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
            <h1 className='gradient-text'>How To Purchase EBUK Tokens</h1>
            {/* <p><strong>Note:</strong> Please complete your <Link to="/dashboard/user/user-kyc" id="status-link">KYC</Link> before purchasing the EBUK Tokens.</p> */}
            <h2>Step 1: Sign Up and Verify Your Email</h2>
            <ul>
              <li>Please sign up using this <Link to="/sign-up" id="status-link">Register</Link> link.</li>
              <li>Once registered, confirm your email address by entering the OTP (One-Time Password) sent to your inbox from investment@edubukeseal.org.</li>
            </ul>
            <h2>Step 2: Complete KYC Verification (Mandatory)</h2>
            <ul>
              <li>Before receiving any tokens, KYC verification is mandatory in accordance with regulatory requirements to prevent money laundering and ensure a secure investment process.</li>
              <li>After signing in, navigate to your Dashboard and complete the KYC step.</li>
              <li>For a smooth experience, we recommend using your mobile device. You will be required to:<br></br>
                a. Take a live photo (liveliness check)<br></br>
                b. Upload one government-issued ID (passport or a valid national ID from your country of domicile) </li>
              <li>KYC is handled by our trusted third-party partner, Synaps. All data submitted is encrypted and stored securely, in compliance with international data privacy standards.</li>
            </ul>
            <h2>Step 3: Choose Your Payment Method</h2>
            <ul>
              <li>Once KYC is approved, you may proceed to invest in EBUK Tokens using one of the following methods:<br></br>
                a. Fiat Currency Transfer via SWIFT/IBAN
                Transfer funds in AED to the official company bank account. Details are available on the Payments Page in your Dashboard after signing in.<br></br>
                b. Cryptocurrency Transfer (USDT or USDC)
                You may transfer funds using any of the following supported networks:<br></br>
                → Binance Smart Chain (BEP-20)<br></br>
                → Ethereum (ERC-20)<br></br>
                → Polygon<br></br>
                → Solana<br></br></li>
              <li>Wallet addresses for each network are listed on the Payments Page in your Dashboard. Use your bank account or Web3 wallet to complete the payment for your chosen investment amount.</li>
            </ul>
            <h2>Step 4: Submit Payment Details</h2>
            <ul>
              <li>After making the payment, take a screenshot or download a PDF of the transaction confirmation.</li>
              <li>Navigate to the 'Buy Tokens' section in your Dashboard.</li>
              <li>Use the appropriate legal entity details for your region:</li>
              → Eduprovince Limited (for international transfers)<br></br>
              → Eduprovince Technologies Private Limited (for Indian transfers)<br></br>
              <li>Fill out the payment form with the amount paid.</li>
              <li>Upload the payment confirmation (image or PDF) and click 'Submit'.</li>
            </ul>
            <h2>Step 5: Track Your Status and Token Transfer</h2>
            <ul>
              <li>Visit the Status Page in your Dashboard to track the progress of your:<br></br>
                a. <Link to="/dashboard/user/user-kyc" id="status-link">KYC Verification</Link><br></br>
                b. <Link to="dashboard/user/user-status" id="status-link">Payment Status</Link><br></br>
                c. <Link to="dashboard/user/user-status" id="status-link">Token Transfer Status</Link><br></br></li>
              <li>Once your KYC is verified and payment is confirmed, you will receive a confirmation email from investment@edubukeseal.org. Please check your inbox, including spam or junk folders. Tokens will only be transferred after this confirmation email is sent.</li>
            </ul>
            <h3>Need Assistance</h3>
            <p>For any questions or assistance, please contact us at support@edubuk.com. Our support team typically responds within 12 hours, and always within 24 hours.</p>
            <ul>
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
