import React, { useEffect, useState } from "react";
import './Admin.css';
import { FaUserCircle, FaEdit } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useAuth } from "../../../context/auth";
import PaymentHistroy from "../User/PaymentHistroy";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PendingTx = () => {
  const [userPaymentHistory, setUserPaymentHistory] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [auth] = useAuth();
  const [statusMap, setStatusMap] = useState({}); // Store KYC status for each user

  const getUsersPaymentDetails = async () => {
    try {
      let paymentHistory = await fetch(`${BASE_URL}/api/v1/admin/fetch-users`, {
        headers: {
          'Authorization': auth?.token
        }
      });
      paymentHistory = await paymentHistory.json();

      if (paymentHistory.success) {
        setUserPaymentHistory(paymentHistory.users);
      }
    } catch (error) {
      console.log("Error while fetching users' payment details:", error);
    }
  };

  const getStatus = async (email) => {
    try {
      let res = await fetch(`${BASE_URL}/api/v1/user/get-session-status/${email}`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': auth?.token
        }
      });

      res = await res.json();

      if (res?.success) {
        setStatusMap((prevStatus) => ({
          ...prevStatus,
          [email]: { // Store status specific to the user
            overallStatus: res?.status,
            faceLiveNess: res?.steps[0]?.status,
            document: res?.steps[1]?.status
          }
        }));
      }
    } catch (error) {
      console.log("Error while fetching status:", error);
    }
  };

  useEffect(() => {
    getUsersPaymentDetails();
  }, []);

  return (
    <div className="user-details-container">
      {userPaymentHistory?.length === 0 && <p>No Data Found..</p>}
      {userPaymentHistory?.length > 0 && userPaymentHistory.map((paymentData, i) => (
        <div className="user-card" key={i + 1}>
          {/* Profile Header */}
          <div className="user-info">
            <FaUserCircle className="icon-user" />
            <div>
              <p>{paymentData.emailId}</p>
            </div>
          </div>

          {/* Payment Screenshot */}
          <div className="payment-section">
            <button onClick={() => { setUserId(i + 1); setIsOpen(true); }}>View Payment Image</button>
          </div>
          {userId === (i + 1) &&
            <PaymentHistroy isOpen={isOpen} setIsOpen={setIsOpen} payments={paymentData.paymentInfo} email={paymentData.emailId} />
          }

          {/* KYC Status */}
          <div className="kyc-status">
            <button onClick={() => getStatus(paymentData.emailId)}>Check KYC</button>
            <p>
              KYC Status:{" "}
              {statusMap[paymentData.emailId]?.faceLiveNess === "APPROVED" ||
                statusMap[paymentData.emailId]?.document === "PENDING_VERIFICATION" ? (
                <span style={{ color: "blue" }}> Pending</span>
              ) : null}
              <span className={statusMap[paymentData.emailId]?.faceLiveNess && statusMap[paymentData.emailId]?.document === "APPROVED"
                ? "verified"
                : "not-verified"}>
                {statusMap[paymentData.emailId]?.faceLiveNess && statusMap[paymentData.emailId]?.document === "APPROVED" ? (
                  <>
                    <MdVerified className="verified-icon" /> Verified
                  </>
                ) : (!statusMap[paymentData.emailId]?.faceLiveNess && !statusMap[paymentData.emailId]?.document) && (
                  <span> Not Verified</span>
                )}
              </span>
            </p>
          </div>

          {/* Token Transfer Details */}
          <div className="token-section">
            <p>Tokens Transferred: <span className="token-amount">0 EBUK</span></p>
            <FaEdit />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingTx;
