import React, { useEffect, useState } from "react";
import './Admin.css'
import { FaUserCircle,FaEdit } from "react-icons/fa";
import { MdVerified} from "react-icons/md";
import { useAuth } from "../../../context/auth";
import PaymentHistroy from "../User/PaymentHistroy";

const BASE_URL = process.env.REACT_APP_BASE_URL;


const PendingTx = () => {

  const [userPaymentHistory,setUserPaymentHistory]= useState([{}]);
  const [userId, setUserId] = useState(null);
  const [isOpen,setIsOpen] = useState(false);
  const [auth] = useAuth();
  const getUsersPaymentDetails = async()=>{
    try {
      let paymentHistory = await fetch(`${BASE_URL}/api/v1/admin/fetch-users`,{
        headers:{
          'Authorization':auth?.token
        }
      });
      paymentHistory = await paymentHistory.json();
      //console.log("payment data",paymentHistory);
      if(paymentHistory.success)
      {
        setUserPaymentHistory(paymentHistory.users)
        console.log("payment data",paymentHistory.users);
      }
    } catch (error) {
      console.log("error while fetching users payment details",error);
    }
  }

  useEffect(()=>{
    getUsersPaymentDetails();
  },[])
  
    return (
      <div className="user-details-container">
      {
        userPaymentHistory.length==0&&<p>No Data Found..</p>
      }
      {
        userPaymentHistory.length>0&&
        userPaymentHistory.map((paymentData,i)=>(
          <div className="user-card" key={i+1}>
        {/* Profile Header */}
        <div className="user-info">
          <FaUserCircle className="icon-user" />
          <div>
            {/* <h2>{paymentData.emailId}</h2> */}
            <p>
             {paymentData.emailId}
            </p>
          </div>
        </div>
  
        {/* Payment Screenshot */}
        <div className="payment-section">
          <button onClick={()=>{setUserId(i+1);setIsOpen(true)}}>View Payment Image</button>
        </div>
        {userId==(i+1)&&
        <PaymentHistroy isOpen = {isOpen} setIsOpen={setIsOpen} payments={paymentData.paymentInfo}/>
        }
        {/* KYC Status */}
        <div className="kyc-status">
          <p>
            KYC Status:{" "}
            <span className={false ? "verified" : "not-verified"}>
              {false? (
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
            <p>Tokens Transferred:{" "} <span className="token-amount">0 EBUK</span></p>
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
          </div>
  
          <div className="toggle-row">
            <p>Token Transferred:</p>
            <div className="radio-section">
                <p>Yes</p> <input type="radio"></input>
                <p>No</p> <input type="radio"></input>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      </div>
    );
  };

export default PendingTx ;
