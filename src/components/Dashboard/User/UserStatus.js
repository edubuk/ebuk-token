import React, { useEffect, useState } from 'react'
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { GiToken } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { MdPersonSearch } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa6";
import { useAuth } from '../../../context/auth';
import { MdOutlineVerified } from "react-icons/md";
import PaymentHistroy from './PaymentHistroy';
import TokenHistroy from './TokenHistory';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const UserStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth] = useAuth();
  const [status, setStatus] = useState({
    overallStatus: "Not Initialized",
    faceLiveNess: "Not Initialized",
    document: "Not Initialized"
  })
  const [history, setHistory] = useState([{}]);
  const [paymentStatus,setPaymentStatus]= useState("Not Initialized");
  const [showPopup, setShowPopup] = useState(false);
  const getStatus = async () => {
    try {
      let res = await fetch(`${BASE_URL}/api/v1/user/get-session-status/${auth?.user?.email}`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': auth?.token
        }
      });
      res = await res.json();
      console.log("res", res);
      if (res?.success) {
        setStatus({
          overallStatus: res?.status,
          faceLiveNess: res?.steps[0]?.status,
          document: res?.steps[1]?.status
        })
      }
    } catch (error) {
      console.log("error while fetching status", error);
      //toast.error("something went wrong");
    }
  }

  const getUserPaymentHistory = async()=>{
    try {
      let paymentHistory = await fetch(`${BASE_URL}/api/v1/user/payment-history/${auth?.user?.email}`,{
        headers:{
          'Authorization':auth.token
        }
      });
      paymentHistory = await paymentHistory.json();
      console.log("history",paymentHistory);
      if(paymentHistory?.success)
      {
        //console.log("payment",paymentHistory.history)
        setHistory(paymentHistory.history);
        setPaymentStatus(paymentHistory.message);
        
      }
    } catch (error) {
      console.log("error while fetching user payment history",error);
    }
  }

  const getHistory = ()=>{
    if(history?.length>0)
    {
      setIsOpen(true);
    }
    else
    {
      getUserPaymentHistory();
      setIsOpen(true);
    }

  }
  const getTokenHistory = ()=>{
    if(history?.length>0)
    {
      setShowPopup(true);
    }
    else
    {
      getUserPaymentHistory();
      setShowPopup(true);
    }

  }


  useEffect(() => {
    getStatus();
    getUserPaymentHistory();
    
  }, [])


  return (
    <>
    <div className='dashboard-menu-container'>
      <div className='status-card'>
        <HiOutlineDocumentSearch id='icon' />
        <h1>KYC</h1>
        {/* <p>Verification can take up to 24 hours on business days. </p> */}
        {/* <p>Current Status:<strong> {status.overallStatus}</strong></p> */}
        <div className='kyc-status'>
          <div className='kyc-status-item'>
            <MdPersonSearch id="kyc-icon" />
            <p
              style={{
                color:
                  status.faceLiveNess === "Not Initialized"
                    ? "gray"
                    : status.faceLiveNess === "SUBMISSION_REQUIRED"
                      ? "orange"
                      : status.faceLiveNess === "PENDING_VERIFICATION"
                        ? "blue"
                        : status.faceLiveNess === "APPROVED"
                          ? "green"
                          : status.faceLiveNess === "Reject"
                            ? "red"
                            : "black",
              }}
            >
              {status?.faceLiveNess}
            </p>

          </div>
          <div className='kyc-status-item'>
            <FaRegIdCard id="kyc-icon" />
            <p
              style={{
                color:
                  status?.document === "Not Initialized"
                    ? "gray"
                    : status?.document === "SUBMISSION_REQUIRED"
                      ? "orange"
                      : status?.document === "PENDING_VERIFICATION"
                        ? "blue"
                        : status?.document === "APPROVED"
                          ? "green"
                          : status?.document === "Reject"
                            ? "red"
                            : "black",
              }}
            >
              {status?.document}
            </p>

          </div>
        </div>
        {(status?.faceLiveNess==="APPROVED" && status?.document==="PENDING_VERIFICATION")&&<p>Verification can take up to 24 hours on business days</p>}
        {(status?.faceLiveNess==="APPROVED" && status?.document!=="PENDING_VERIFICATION")&&<Link to="/dashboard/user/user-kyc" hidden={status.faceLiveNess==="APPROVED" && status.document==="APPROVED"}>{status.faceLiveNess!=="Not Initialized"?"Complete KYC":"Start KYC"}</Link>}
        {(status.faceLiveNess==="APPROVED" && status?.document==="APPROVED")&&<MdOutlineVerified className="verify-icon"/>}
      </div>
      <div className='status-card'>
        <GrTransaction id='icon' />
        <h1>Payment</h1>
        <p>Current Status:<strong style={{color:paymentStatus==="Submitted"&&"aqua"}}> {paymentStatus}</strong></p>
        <button onClick={getHistory}>View History</button>
      </div>
      <div className='status-card'>
        <GiToken id='icon' />
        <h1>EBUK Tokens</h1>
        <p>Check received tokens status using below button</p>
        <button onClick={getTokenHistory}>View History</button>
      </div>
    </div>
    <TokenHistroy showPopup={showPopup} setShowPopup={setShowPopup} payments={history}/>
    <PaymentHistroy isOpen = {isOpen} setIsOpen={setIsOpen} payments={history} email={auth?.user?.email}/>
    </>
  )
}

export default UserStatus
