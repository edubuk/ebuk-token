import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
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
  const [auth] = useAuth();
  const [selOption,setSelOption] = useState("INR");


  const handleAmountChange = (e) => {
    const enteredAmount = e.target.value;
    setAmount(enteredAmount);
    let edbukToken=0;
    if(enteredAmount>0)
    edbukToken = selOption=="INR"?(enteredAmount/1.32):(enteredAmount/0.015);
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
    const id = toast.loading("Please wait...")
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

      let data = await fetch(`${BASE_URL}/api/v1/user/create-new-payment`, {
        method: "POST",
        body: JSON.stringify({ emailId: auth?.user?.email, walletAdd: walletAddress, paidAmount: amount,method:selOption, paymentUrl: imagePreview }),
        headers: {
          "Content-Type": "application/json",
          'Authorization': auth?.token
        }
      })
      data = await data.json();
      if (data.success) {
        toast.success(data.message);
        setAmount("");
        setFile("");
        setImagePreview("");
        setTokenAmount("");
        setWalletAddress("");
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

  return (
    <div className='buy-token-container'>
      <div className='info-step-box'>
        <h1 className='loader-text'>How To Purchase EBUK Tokens</h1>
        <h2>Step 1</h2>
        <ul>
          <li>We have 2 method to invest in our EDBUK Token:<br></br> a. Fiat Currency(Only US Doller or Indian Rupee) b. Crypto Currency(Only USDT/USDC)</li>
          <li>Use the below payment bank details of Eduprovince Pvt Ltd.</li>
          <li>Use any paymnet gateway/channel and make a payment in any desired amount.</li>
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
          <li>Navigate to the <Link to="/dashboard/user/user-status">status</Link> page.</li>
          <li>All your Payment and Token related status will show there.</li>
          <li>If you have any kind of query or issue, reach out to us : <span>support@edubuk.com</span></li>
        </ul>
      </div>
      <div className="payment-page">
        <div className="left-section">
          <h2>Edubuk Bank Details</h2>
          <p id="indian-payment-details">1. Other than India Location</p>
          <p><span id='bank-detail-title'>Account Holder:</span> Eduprovince Limited</p>
          <p><span id='bank-detail-title'>IBAN:</span> AE020860000009967368700</p>
          <p><span id='bank-detail-title'>BIC/SWIFT Code:</span> WIOBAEADXXX</p>
          <p><span id='bank-detail-title'>Bank Branch Add:</span> ETIHAD AIRWAYS CENTRE, FLOOR 5,AL RAHA BEACH, AL MUNEER, Abu Dhabi, UAE</p>
          <p><span id='bank-detail-title'>Country:</span> UAE</p>
          <p><span id='bank-detail-title'>Edubuk Location:</span> 4th Floor, RAKDAO(Digital Assests Oasis), RAKBANK HQ, RAK,UAE </p>
          <p id="indian-payment-details">2. Only For India Location</p>
          <p><span id='bank-detail-title'>Account Holder:</span> EDUPROVINCE TECHNOLOGIES PVT LTD</p>
          <p><span id='bank-detail-title'>Account Number:</span> 50200094545351</p>
          <p><span id='bank-detail-title'>IFSC CODE:</span> HDFC0003788</p>
          <p><span id='bank-detail-title'>Account Type:</span> Current</p>
          <p><span id='bank-detail-title'>Edubuk Location:</span>Accord Blu, Road 10, Banjara Hills, Hyderabad, Telangana, India</p>
          <p id="indian-payment-details">3. Through Cryptocurrencies<br></br>(Accept only USDT/USDC)</p>
          <p><span id='bank-detail-title'>EDUPROVINCE LTD Ethereum Wallet Address:</span> 0x5506321B148518FCB47Cb0D69B445172EBD397F5</p>
          <p><span id='bank-detail-title'>EDUPROVINCE LTD Solana Wallet Address:</span> 74wNZzEjyvGkzKvWbsm5iCTvkssA4RxdcANVxBEYpSmt</p>
        </div>

        <div className="right-section">
          <h2>Payment Form</h2>
          <form onSubmit={createPayment} className="payment-form">
            <div className="input-field">
              <label htmlFor="payment-method">Choose Payment Method:</label>
              <select id="payment-method" className="dropdown" onChange={(e)=>setSelOption(e.target.value)}>
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
                placeholder="1 EBUK = $0.015"
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
  );
};

export default BuyToken;
