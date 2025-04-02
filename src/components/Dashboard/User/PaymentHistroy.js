import React, { useState } from "react";
import { FaCopy, FaMinus, FaPlus, FaRegCheckCircle } from "react-icons/fa";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PaymentHistroy = ({ payments, isOpen, setIsOpen, email }) => {
  const [checkedPayments, setCheckedPayments] = useState({});
  const [auth] = useAuth();
  const [expandedRows, setExpandedRows] = useState([]);
  const [tokenValues, setTokenValues] = useState({});

  const updatePaymentStatus = async (email, paymentUrl) => {
    try {
      let res = await fetch(`${BASE_URL}/api/v1/admin/update-payment-status`, {
        method: "POST",
        body: JSON.stringify({ emailId: email, paymentUrl: paymentUrl }),
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token,
        },
      });

      res = await res.json();
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      toast.error("Something went wrong");
    }
  };

  const dataCopy = (address) => {
    navigator.clipboard
      .writeText(address)
      .then(() => toast.success("Data copied!"))
      .catch((err) => toast.error("Failed to copy:", err));
  };

  const handleCheckboxChange = (index, paymentUrl) => {
    setCheckedPayments((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    updatePaymentStatus(email, paymentUrl);
  };

  const handleTokenInputChange = (index, value) => {
    setTokenValues((prevState) => ({
      ...prevState,
      [index]: value,
    }));
  };

  const transferTokenHandler = async (index, paymentUrl) => {
    const tokenAmount = tokenValues[index];
    if (!tokenAmount) {
      toast.error("Enter a token amount first!");
      return;
    }

    try {
      let res = await fetch(`${BASE_URL}/api/v1/admin/transfered-user-token`, {
        method: "PUT",
        body: JSON.stringify({
          emailId: email,
          paymentUrl: paymentUrl,
          tokenValue: tokenAmount,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token,
        },
      });

      res = await res.json();
      if (res.success) {
        toast.success(res.message);
        setTokenValues((prevState) => ({
          ...prevState,
          [index]: "",
        }));
      }
    } catch (error) {
      console.log("Error while transferring token", error);
      toast.error("Something went wrong");
    }
  };

  const toggleRow = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((row) => row !== index) : [...prev, index]
    );
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Payment History</h2>
            {!payments || payments.length === 0 ? (
              <p>No data found</p>
            ) : (
              <div className="table-container">
                <table className="main-table">
                  <thead>
                    <tr>
                      {auth?.user.role === 1 &&<th></th>}
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Payment URL</th>
                      <th>Wallet Address</th>
                      {auth?.user.role === 1 && <th>Verify</th>}
                      {auth?.user.role === 1 && <th>Transfer Token</th>}
                      {auth?.user.role === 0 && <th>Payment Verification</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <React.Fragment key={index}>
                        <tr className="parent-row">
                          {auth?.user.role === 1 &&<td className="icon-cell" onClick={() => toggleRow(index)}>
                            {expandedRows.includes(index) ?<FaMinus/> : <FaPlus />}
                          </td>}
                          <td>{payment.amount}</td>
                          <td>{payment.method}</td>
                          <td>
                            <a href={payment.paymentUrl} target="_blank" rel="noopener noreferrer">
                              View
                            </a>
                          </td>
                          <td>
                            {payment.walletAdd && (
                              <>
                                {payment.walletAdd.slice(0, 6)}....{payment.walletAdd.slice(-6)}
                                <FaCopy onClick={() => dataCopy(payment.walletAdd)} />
                              </>
                            )}
                          </td>
                          {auth?.user?.role === 1 && (
                            <td>
                              <input
                                type="checkbox"
                                checked={checkedPayments[index] || payment.isPaymentVerified}
                                onChange={() => handleCheckboxChange(index, payment.paymentUrl)}
                              />
                            </td>
                          )}
                          {auth?.user?.role === 1 && (
                            <td>
                              <div className="table-input-section">
                                <input
                                  type="text"
                                  value={tokenValues[index] || ""}
                                  onChange={(e) => handleTokenInputChange(index, e.target.value)}
                                />
                                <button
                                  onClick={() => transferTokenHandler(index, payment.paymentUrl)}
                                  disabled={!tokenValues[index]}
                                >
                                  Add
                                </button>
                              </div>
                            </td>
                          )}
                          {auth?.user?.role === 0 && (
                            <td>{payment.isPaymentVerified ? <FaRegCheckCircle /> : "Pending"}</td>
                          )}
                        </tr>
                        {payment?.tokensReceived?.length > 0 && (
                          <tr className={`child-row ${expandedRows.includes(index) ? "show" : ""}`}>
                            <td colSpan="7">
                              <div className="nested-table-wrapper">
                                <table className="nested-table">
                                  <thead>
                                    <tr>
                                      <th>Received Time</th>
                                      <th>Token Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {payment.tokensReceived.map((data, i) => (
                                      <tr key={i}>
                                        <td>{data.time}</td>
                                        <td>{data.token} EBUK</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <button onClick={() => setIsOpen(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentHistroy;
