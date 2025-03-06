import React, { useEffect, useState } from 'react'
import { Synaps } from "@synaps-io/verify-sdk";
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/auth';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const UserKYC = () => {
  const [auth] = useAuth();
  const [sessionToken, setSessionToken] = useState(""); 

  const getSessionId = async () => {
    const id = toast.loading("Verification starting...");
    try {
      if (!auth?.user?.email) {
        toast.error("Please re-login and try again...");
        return;
      }
      
      let data = await fetch(`${BASE_URL}/api/v1/user/create-session`, {
        method: "POST",
        body: JSON.stringify({ email: auth?.user?.email }),
        headers: {
          "Content-Type": "application/json",
          'Authorization': auth.token
        }
      });

      data = await data.json();
      if (data.success) {
        toast.dismiss(id);
        setSessionToken(data.sessionId); 
        Synaps.show();
      } else {
        toast.error(data.message);
        toast.dismiss(id);
      }

    } catch (error) {
      toast.dismiss(id);
      toast.error("Something went wrong");
      console.log("Error while fetching session ID:", error);
    }
  };

  useEffect(() => {
    if (!sessionToken) return; 

    console.log("Initializing Synaps with sessionToken:", sessionToken);
    
    Synaps.init({
      sessionId: sessionToken, 
      onFinish: () => {
        toast.success("Verification finished");
        setSessionToken(""); 
      },
      mode: "modal",
    });

  }, [sessionToken]); 

  return (
    <div className="kyc-container">
      <h1>Please be ready with the following before starting the KYC</h1>
      <p>1. Face Liveness</p>
      <p>2. One of the documents from the following:</p>
      <ul>
        <li><strong>National ID:</strong> Aadhaar Card or any other government-issued ID</li>
        <li><strong>Passport</strong></li>
        <li><strong>Driver's License</strong></li>
        <li><strong>Resident Permit</strong></li>
      </ul>
      <button onClick={getSessionId}>{sessionToken?"Start KYC":"Start Verification"}</button>
    </div>
  );
};

export default UserKYC;
