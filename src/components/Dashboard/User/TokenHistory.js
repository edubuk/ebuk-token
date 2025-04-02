import React, { Fragment, useState } from "react";
import { FaCopy,FaPlus,FaMinus} from "react-icons/fa";
import toast from "react-hot-toast";

const TokenHistroy = ({ payments,setShowPopup,showPopup }) => {
  const [expandedRows, setExpandedRows] = useState([]);


  const dataCopy = (address) => {
    navigator.clipboard
      .writeText(address)
      .then(() => toast.success("Data copied!"))
      .catch((err) => toast.error("Failed to copy:", err));
  };



  const toggleRow = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((row) => row !== index) : [...prev, index]
    );
  };

  return (
    <div>
      {showPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Token History</h2>
            {!payments || payments.length === 0 ? (
              <p>No data found</p>
            ) : (
              <div className="table-container">
                <table className="main-table">
                  <thead>
                    <tr>
                      <th>click on icon</th>
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Payment URL</th>
                      <th>Wallet Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <Fragment key={index}>
                        <tr className="parent-row">
                          <td className="icon-cell" onClick={() => toggleRow(index)}>
                            {expandedRows.includes(index) ?<FaMinus /> :<FaPlus />}
                          </td>
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
                        </tr>
                        {payment?.tokensReceived?.length > 0 ? (
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
                                        <td>{new Date(data.time).toLocaleString()}</td>
                                        <td>{data.token} EBUK</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        ):<tr className={`child-row ${expandedRows.includes(index) ? "show" : ""}`}>
                        <td colSpan="7" style={{color:"#FFD700"}}>Transactions are in process for this payment</td></tr>}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <button onClick={() => setShowPopup(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenHistroy;
