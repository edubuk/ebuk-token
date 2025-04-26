import React, { useEffect } from "react";
import './home.css'
import ebuk from '../../assets/utilityEbuk.png'
import Tokenomics from "../Tokenomics/Tokenomics";
import Freatures from "../Features/CVFreature";
import CETAFeatureCard from "../Features/CetaFeature";
import OlympiadFeature from "../Features/OlympiadFeature";
import InternshipFeatur from "../Features/InternshipFeature";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Member from "../Team&Advisor/Member";

export const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Animation duration and one-time trigger
  }, []);

  return (
    <div className="home-container">
      <div className="phase-box">
      <div data-aos="fade-down">
        <h1 className="gradient-text">EBUK Token</h1>
        <div className="timer-div">
          <div id="timer-section">
            <span className="live-dot"></span><p>Presale Live</p>
          </div>
        </div>
        </div>
      </div>
      <div className="crypto-data-section">
        <div className="video-container" data-aos="fade-up">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/RaFvWqkBI4g?si=mFEMacoPLbuHRKQb&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>

        </div>
        <div className="buyer-container">
        <div className='info-step-box'>
        <h1 className='gradient-text'>Utility of EBUK Tokens</h1>
        <div className="utility-img-sec">
              <img src={ebuk} alt="ebuk-utility" id="utility-img"></img>
              </div>
                <p>The EBUK Token is strictly a UTILITY TOKEN and NOT a SECURITY TOKEN. The value and use of the token are derived solely from its utility within the Edubuk platform and ecosystem. Key utilities of the EBUK Token include:</p>
                <p>
        1. Learners across the globe will be purchasing EBUK tokens to enroll in Edubuk's CETA courses on AI, Generative AI, Blockchain, Cybersecurity, Data Science, Data Analytics, and Data Visualization.<br></br>
        2. Learners will be able to pay for certain diploma courses with Edubuk’s partner institutions like iCapital, LiOR Capital, and others using EBUK tokens.<br></br>
        3. Learners can use EBUK tokens to pay for registering their CVs and Certificates on the blockchain using Edubuk’s dApp.<br></br>
        4. EBUK tokens will be used to pay for participation in the International AI & Emerging Technologies Olympiad conducted by Edubuk.<br></br>
        5. EBUK tokens will be accepted as payment for booking specific mentorship sessions.<br></br>
        6. EBUK tokens will also be used for purchasing value-added courses on soft skills, communication skills, and other professional development modules.</p>
        <h2>Staking Mechanism</h2>
          <p>

1. Investors will be able to stake their EBUK tokens on Edubuk’s platform.<br></br>

2. The staking offers an Annual Percentage Yield (APY) of 10%.<br></br>

3. The staking program will include a maximum cap on absolute staking rewards per user.<br></br>

4. Staking details, including reward limits and lock-in periods (if any), will be announced prior to the listing.
          </p>
          </div>
        </div>
        <Freatures />
        <div className="video-container">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/Cua_dnoZXbo?si=PsCx9Mg88J_XA_gF&autoplay=1&mute=1"
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
            src="https://www.youtube.com/embed/Tc5lDlnHH-A?si=fS2FOwHEvCSho-ti&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>

        </div>
        <OlympiadFeature />
        <InternshipFeatur />
        <div className="buyer-container" >
          <div className='info-step-box'>
            <h1 className='gradient-text'>How To Purchase EBUK Tokens</h1>
            {/* <p><strong>Note:</strong> Please complete your <Link to="/dashboard/user/user-kyc" id="status-link">KYC</Link> before purchasing the EBUK Tokens.</p> */}
            <h2>Step 1: Sign Up and Verify Your Email</h2>
            <ul>
              <li>Please sign up using this <Link to="/sign-up" id="status-link">Register</Link> link.</li>
              <li>Once registered, confirm your email address by entering the OTP (One-Time Password) sent to your inbox from investment@edubukeseal.org</li>
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
              <li>Enter the Referral Code Provided to You (Enter N/A if you don't have one).</li>
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
          <Link to="/dashboard/user/user-kyc" id="buy-link"> Proceed To Buy EBUK Tokens</Link>
        </div>
        <Tokenomics/>
        <Member />
      </div>
    </div>
  );
};
