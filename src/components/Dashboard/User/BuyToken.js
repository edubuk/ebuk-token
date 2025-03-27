import React, { useState } from 'react';
import { FaUpload, FaCopy } from 'react-icons/fa';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { app } from '../../../Firebase/FirebaseConfig'
import { toast } from 'react-hot-toast';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useAuth } from '../../../context/auth';
//import CC from 'currency-converter-lt';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const BuyToken = () => {
  const [amount, setAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [file, setFile] = useState("");
  const [imageError, setImageError] = useState(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [refferalCode, setRefferalCode] = useState("");
  const [auth] = useAuth();
  const [selOption, setSelOption] = useState("INR");


  const handleAmountChange = (e) => {
    const enteredAmount = e.target.value;
    setAmount(enteredAmount);
    let edbukToken = 0;
    if (enteredAmount > 0)
      edbukToken = selOption == "INR" ? (enteredAmount / 1.32) : (enteredAmount / 0.015);
    setTokenAmount(Math.round(edbukToken * 1000) / 1000);
  };


  const uploadImageToDB = (file) => {
    if (!file) return;
    setImageError("");
    setImagePreview("");
    setIsImageUploading(true);
    // setValue("imageFile", e.target.files[0]);
    console.log("imageFile", file);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file?.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("image upload starting", snapshot);
      },
      (error) => {
        console.log(`Error while uploading to the firebase, ${error}`);
        setImageError("Could not upload image (file must be less than 2MB)");
        setIsImageUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          // imageUrl = downloadUrl;
          console.log("download url", downloadUrl);
          setImagePreview(downloadUrl);
          //setValue("imageUrl", downloadUrl);
          setIsImageUploading(false);
        });
      }
    );
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("triggered", e.target.files[0])
    if (e.target.files[0]) {
      uploadImageToDB(e.target.files[0]);
    }
  };

  const createPayment = async (e) => {
    e.preventDefault();
    let id;
    try {
      if (!amount) {
        return toast.error("Amount should not be zero");
      }
      if (!walletAddress) {
        return toast.error("Crypto wallet address required");
      }
      if (!file) {
        return toast.error("No file choosen");
      }
      if (!refferalCode) {
        return toast.error(" Please enter referral code. Please enter N/A if you don't have one");
      }
      id = toast.loading("Please wait...");
      let data = await fetch(`${BASE_URL}/api/v1/user/create-new-payment`, {
        method: "POST",
        body: JSON.stringify({ emailId: auth?.user?.email, walletAdd: walletAddress, paidAmount: amount, method: selOption, paymentUrl: imagePreview, refferalCode: refferalCode }),
        headers: {
          "Content-Type": "application/json",
          'Authorization': auth?.token
        }
      })
      data = await data.json();
      if (data.success) {
        toast.success("Payment data submitted successfully.");
        setAmount("");
        setFile("");
        setImagePreview("");
        setTokenAmount("");
        setWalletAddress("");
        setRefferalCode("");
        toast.dismiss(id);
      }
      if (!data.success) {
        toast.error(data.message);
        toast.dismiss(id);
      }

    } catch (error) {
      toast.error("something went wrong");
      console.log("error while creating a new payment");
      toast.dismiss(id);
    }
  }

  const dataCopy = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => toast.success("Data copied!"))
      .catch(err => toast.error("Failed to copy:", err));
  };

  return (
    <div className='buy-token-container'>
      <div className='info-step-box'>
        <h1 className='loader-text'>How To Purchase EBUK Tokens</h1>
        <h2>Step 1: Complete KYC Verification (Mandatory)</h2>
        <ul>
          <li>Before receiving any tokens, KYC verification is mandatory in accordance with regulatory requirements to prevent money laundering and ensure a secure investment process.</li>
          <li>After signing in, navigate to your Dashboard and complete the KYC step.</li>
          <li>For a smooth experience, we recommend using your mobile device. You will be required to:<br></br>
            a. Take a live photo (liveliness check)<br></br>
            b. Upload one government-issued ID (passport or a valid national ID from your country of domicile) </li>
          <li>KYC is handled by our trusted third-party partner, Synaps. All data submitted is encrypted and stored securely, in compliance with international data privacy standards.</li>
        </ul>
        <h2>Step 2: Choose Your Payment Method</h2>
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
        <h2>Step 3: Submit Payment Details</h2>
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
        <h2>Step 4: Track Your Status and Token Transfer</h2>
        <ul>
          <li>Visit the Status Page in your Dashboard to track the progress of your:<br></br>
            a. <Link to="/dashboard/user/user-kyc" id="status-link">KYC Verification</Link><br></br>
            b. <Link to="/dashboard/user/user-status" id="status-link">Payment Status</Link><br></br>
            c. <Link to="/dashboard/user/user-status" id="status-link">Token Transfer Status</Link><br></br></li>
          <li>Once your KYC is verified and payment is confirmed, you will receive a confirmation email from investment@edubukeseal.org. Please check your inbox, including spam or junk folders. Tokens will only be transferred after this confirmation email is sent.</li>
        </ul>
        <h3>Need Assistance</h3>
        <p>For any questions or assistance, please contact us at support@edubuk.com. Our support team typically responds within 12 hours, and always within 24 hours.</p>
        <ul>
        </ul>
      </div>
      <div className="payment-page">
        <div className="left-section">
          <h2>Edubuk Bank Details</h2>
          <div className='payment-details-box'>
            <p id="indian-payment-details">1. International (outside India)</p>
            <p><span id='bank-detail-title'>Account Holder:</span> Eduprovince Limited</p>
            <p><span id='bank-detail-title'>IBAN:</span> AE020860000009967368700 <FaCopy onClick={() => dataCopy("AE020860000009967368700")} /></p>
            <p><span id='bank-detail-title'>BIC/SWIFT Code:</span> WIOBAEADXXX <FaCopy onClick={() => dataCopy("WIOBAEADXXX")} /></p>
            <p><span id='bank-detail-title'>Bank Branch Add:</span> ETIHAD AIRWAYS CENTRE, FLOOR 5,AL RAHA BEACH, AL MUNEER, Abu Dhabi, UAE</p>
            <p><span id='bank-detail-title'>Country:</span> UAE</p>
            <p><span id='bank-detail-title'>Edubuk Location:</span> 4th Floor, RAKDAO(Digital Assests Oasis), RAKBANK HQ, RAK,UAE </p>
          </div>
          <div className='payment-details-box'>
            <p id="indian-payment-details">2. Only For India Location</p>
            <p><span id='bank-detail-title'>Account Holder:</span> EDUPROVINCE TECHNOLOGIES PVT LTD</p>
            <p><span id='bank-detail-title'>Account Number:</span> 50200094545351 <FaCopy onClick={() => dataCopy("50200094545351")} /></p>
            <p><span id='bank-detail-title'>IFSC CODE:</span> HDFC0003788 <FaCopy onClick={() => dataCopy("HDFC0003788")} /></p>
            <p><span id='bank-detail-title'>Account Type:</span> Current</p>
            <p><span id='bank-detail-title'>Edubuk Location:</span>Accord Blu, Road 10, Banjara Hills, Hyderabad, Telangana, India</p>
          </div>
          <div className='payment-details-box'>
            <p id="indian-payment-details">3. Through Cryptocurrencies<br></br>(Accepts only USDT/USDC on the Polygon, BNB, Ethereum and Solana networks)</p>
            <p><span id='bank-detail-title'>Edubuk Ethereum/Polygon/BNB Wallet Address:</span> 0xC85c9....46b8A60 <FaCopy onClick={() => dataCopy("0xC85c9FD1091443563b1f53fa7B92CDbA846b8A60")} /></p>
            <p><span id='bank-detail-title'>Edubuk Solana Wallet Address:</span> Bjphc86....NX59h2B <FaCopy onClick={() => dataCopy("Bjphc86Xgc9P2uvd1rP5J1pLq7ZEuuESs43hbNX59h2B")} /></p>
          </div>
        </div>

        <div className="right-section">
          <div className="payment-form">
            <h2>Payment Form</h2>
            <form onSubmit={createPayment}>
              <div className="input-field">
                <label htmlFor="payment-method">Choose Payment Method:</label>
                <select id="payment-method" className="dropdown" onChange={(e) => { setAmount(""); setTokenAmount(""); setSelOption(e.target.value) }}>
                  <option>INR</option>
                  <option>US Dollar</option>
                  <option>USDC/USDT</option>
                </select>
                <label htmlFor="dollarAmount">Amount in {selOption}:*</label>
                <input
                  type="number"
                  id="dollarAmount"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder={`Enter Amount In ${selOption}`}
                />
              </div>

              <div className="input-field">
                <label htmlFor="tokenAmount">Equivalent Tokens (EBUK) You Will Receive:</label>
                <input
                  type="text"
                  id="tokenAmount"
                  value={tokenAmount}
                  disabled
                  placeholder="1 EBUK = $0.015 or ₹1.32"
                />
              </div>
              <div className="input-field">
                <label htmlFor="tokenAmount">Your Crypto Wallet Address:*</label>
                <input
                  type="text"
                  id="tokenAmount"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="e.g. 0x1fB9e7...104E"
                />
              </div>
              <div className="input-field">
                <label htmlFor="tokenAmount">Referral Code (Enter N/A if you don't have one)*</label>
                <input
                  type="text"
                  id="tokenAmount"
                  value={refferalCode}
                  onChange={(e) => setRefferalCode(e.target.value)}
                  placeholder="Enter Referral Code"
                />
              </div>

              <div className="input-field">
                <label>Upload Payment Screenshot or PDF:*</label>
                <div className="file-upload-container">
                  <input
                    type="file"
                    id="fileUpload"
                    accept="image/*, .pdf"
                    onChange={handleFileChange}
                    hidden
                  />
                  <label htmlFor="fileUpload" className="custom-file-upload">
                    <FaUpload size={20} className="upload-icon" />
                    {file ? file.name : 'Choose File'}
                  </label>
                </div>
                {isImageUploading && <p>Uploading...</p>}
                {!isImageUploading && imagePreview && <p>Uploaded <a href={imagePreview} target='_blank' rel="noopener noreferrer">Preview</a></p>}
                {imageError && <p id='image-error'>{imageError}</p>}
              </div>

              <button type="submit" className={isImageUploading ? "uploading" : "submit-btn"} disabled={isImageUploading}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;
