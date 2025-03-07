import React, { useState } from "react";
import './home.css'
import circle from '../../assets/circle.png'
import eth from "../../assets/eth.svg"
import tether from "../../assets/tether.svg"
import shib from "../../assets/shib.svg"
import pepe from "../../assets/pepe.svg"
import metamask from '../../assets/metamask.svg';
import trust from '../../assets/trust.svg';
import ticsMap from '../../assets/TICSMap.png'
import tokenReception from '../../assets/token_reception.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import Tokenomics from "../Tokenomics/Tokenomics";
import Freatures from "../Features/CVFreature";
import CETAFeatureCard from "../Features/CetaFeature";
import OlympiadFeature from "../Features/OlympiadFeature";
import InternshipFeatur from "../Features/InternshipFeature";

export const Home = () => {
  const [progress] = useState(40);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-container">
      <div className="phase-box">
        <h1 className="gradient-text">Token Presale</h1>
        <p>Live in</p>
        <div className="timer-div">
          <div id="timer-section">
            <p>6</p>
            <p>Days</p>
          </div>
          <div id="timer-section">
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
          </div>
        </div>
      </div>
      <div className="crypto-data-section">
        <div className="col-1">
          <div>
            <p>$123456</p>
            <p>USDT Raised</p>
          </div>
          <div>
            <p>10,387</p>
            <p>Holders</p>
          </div>
        </div>
        <div className="buyer-container">
          <div className="progress-container">
            <div className="text-cotainer">
              <div className="text-left">
                1 TICS = $ 0.0342374 USD
              </div>
              <div className="text-right">
                <p><span>10%</span> Increase On Next Phase</p>
              </div>
            </div>
            <div className="bar-container">
              <div className="bar" style={{ width: `${progress}%` }}>
                <img src={circle} alt="bar-circle"></img>
                <div className="bar-info-wrapper">
                  <div className="bar-info-box">
                    <div className="bar-info-inner-box">
                      <div className="bar-info-text">
                        <p>351,571,277 TICS</p>
                      </div>
                      <p>Token sold</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="step-container">
            <p><span>Step 1</span>- select the payment method</p>
            <div className="select-grid">
              <div className="dropdown-section">
                <button className="dropdown-inner-section">
                  <img src={eth} alt="eth-logo" id="logo-img"></img>
                  <div className="label-container">
                    <p>ETH</p>
                    <p>ERC-20</p>
                  </div>

                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`chevron-icon ${isOpen ? "rotate" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <path
                      d="M5.94433 5.88187C5.76312 5.88187 5.58192 5.81268 5.44376 5.67459L1.0961 1.32688C0.81953 1.05031 0.81953 0.601902 1.0961 0.325445C1.37255 0.0489889 1.82087 0.0489889 2.09746 0.325445L5.94433 4.17254L9.79123 0.32558C10.0678 0.0491233 10.5161 0.0491233 10.7925 0.32558C11.0692 0.602036 11.0692 1.05044 10.7925 1.32701L6.44491 5.67472C6.30668 5.81284 6.12548 5.88187 5.94433 5.88187Z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
                {isOpen &&
                  <div className="dropdown-menu">
                    <div className="dropdown-inner-menu">
                      <button className="menu-item">
                        <img src={eth} alt="eth-logo" id="logo-img"></img>
                        <div className="label-container">
                          <p>ETH</p>
                          <p id="token-standard">ERC-20</p>
                        </div>
                      </button>
                      <button className="menu-item">
                        <img src={tether} alt="teth-logo" id="logo-img"></img>
                        <div className="label-container">
                          <p>USDT</p>
                          <p>ERC-20</p>
                        </div>
                      </button>
                      <button className="menu-item">
                        <img src={shib} alt="shib-logo" id="logo-img"></img>
                        <div className="label-container">
                          <p>SHIB</p>
                          <p>ERC-20</p>
                        </div>
                      </button>
                      <button className="menu-item">
                        <img src={pepe} alt="pepe-logo" id="logo-img"></img>
                        <div className="label-container">
                          <p>PEPE</p>
                          <p>ERC-20</p>
                        </div>
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="step-container">
            <p><span>Step 2</span>- Enter the amount you would like to purchase</p>
            {/* <div className="input-container-box">
              <div className="input-container">
                <div className="input-box-container">
                  <input type="number" value="1"></input>
                  <p>ETH</p>
                  <div className="icon-container">
                    <img src={eth} alt="eth-logo"></img>
                  </div>
                </div>
              </div>
              <svg
                className="_equals_riuzb_131"
                width="30"
                height="18"
                viewBox="0 0 30 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5 18H0.5V11.9605H29.5V18ZM29.5 6.03947H0.5V0H29.5V6.03947Z"
                  fill="white"
                ></path>
              </svg>
              <div className="input-container">
                <div className="input-box-container">
                  <input type="number" ></input>
                  <p>EBUK</p>
                  <div className="icon-container">
                    <img src={pepe} alt="eth-logo"></img>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <button className="custom-btn">
            Connect Wallet
          </button>
          <button className="subtitle">
            How to buy? <FaLongArrowAltRight />
          </button>
        </div>
        <div className="second-section">
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
        </div>
        <Tokenomics id="tokenomics" />
        <Freatures />
        <CETAFeatureCard />
        <OlympiadFeature />
        <InternshipFeatur />
      </div>
    </div>
  );
};
