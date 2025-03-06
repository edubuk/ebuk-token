import React from "react";
import './Admin.css'
import { FaUserCircle,FaEdit } from "react-icons/fa";
import { MdVerified} from "react-icons/md";




const PendingTx = ({
  username,
  email,
  kycStatus,
  paymentScreenshotLink,
  tokenAmount,
}) => {
  
  
    return (
      <div className="user-card">
        {/* Profile Header */}
        <div className="user-info">
          <FaUserCircle className="icon-user" />
          <div>
            <h2>{username}</h2>
            <p>
             {email}
            </p>
          </div>
        </div>
  
        {/* Payment Screenshot */}
        <div className="payment-section">
          <a href={paymentScreenshotLink} target="_blank" rel="noreferrer">View Payment Image</a>
        </div>

        {/* KYC Status */}
        <div className="kyc-status">
          <p>
            KYC Status:{" "}
            <span className={kycStatus ? "verified" : "not-verified"}>
              {kycStatus ? (
                <>
                  <MdVerified className="verified-icon" /> Verified
                </>
              ) : (
                "Not Verified"
              )}
            </span>
          </p>
        </div>
  
        {/* Token Transfer Details */}
        <div className="token-section">
            <p>Tokens Transferred:{" "} <span className="token-amount">{tokenAmount} EBUK</span></p>
            <FaEdit />
        </div>
  
        {/* Slide Toggle Buttons */}
        <div className="toggle-buttons">
          <div className="toggle-row">
            <p>Payment Received:</p>
            <div className="radio-section">
                <p>Yes</p> <input type="radio"></input>
                <p>No</p> <input type="radio"></input>
            </div>
            {/* <Switch
              checked={paymentReceived}
              onChange={setPaymentReceived}
              className={`${paymentReceived ? "switch-on" : "switch-off"}`}
            >
              <span className="switch-thumb" />
            </Switch> */}
          </div>
  
          <div className="toggle-row">
            <p>Token Transferred:</p>
            <div className="radio-section">
                <p>Yes</p> <input type="radio"></input>
                <p>No</p> <input type="radio"></input>
            </div>
            {/* <Switch
              checked={tokenTransferred}
              onChange={setTokenTransferred}
              className={`${tokenTransferred ? "switch-on" : "switch-off"}`}
            >
            <span className="switch-thumb" />
            </Switch> */}
          </div>
        </div>
      </div>
    );
  };

export default PendingTx ;
