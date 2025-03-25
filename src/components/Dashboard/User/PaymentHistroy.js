import React, { useState } from 'react'
import './Dashboard.css'
import { FaCopy } from 'react-icons/fa'
import { useAuth } from '../../../context/auth';
import toast from 'react-hot-toast';
import { FaRegCheckCircle } from "react-icons/fa";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const PaymentHistroy = ({ payments, isOpen, setIsOpen, email }) => {
    // const [id, setId] = useState("");
    const [checkedPayments, setCheckedPayments] = useState({});    
    const [auth] = useAuth();
    const updatePaymentStatus = async (email, paymentUrl) => {
        try {
            let res = await fetch(`${BASE_URL}/api/v1/admin/update-payment-status`, {
                method: "POST",
                body: JSON.stringify({ emailId: email, paymentUrl: paymentUrl }),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': auth?.token
                }
            }
            )

            res = await res.json();
            if (res.success) {
                toast.success(res.message);
            }

        } catch (error) {
            console.log("error while updating payment status", error);
            toast.error("something went wrong");
        }
    }

    const dataCopy = (address) => {
        navigator.clipboard.writeText(address)
            .then(() => toast.success("Data copied!"))
            .catch(err => toast.error("Failed to copy:", err));
    };

    const handleCheckboxChange = (index, paymentUrl) => {
        setCheckedPayments((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the checkbox state
        }));

        updatePaymentStatus(email, paymentUrl);
    };
    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Payment History</h2>
                        {
                            (payments?.length === 0 || payments?.length == undefined) && <p>No data found</p>
                        }
                        {payments?.length > 0 &&
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Method</th>
                                            <th>Payment URL</th>
                                            <th>Wallet Address</th>
                                            {(auth?.user.role === 1) && <th>Verify</th>}
                                            {(auth?.user.role === 0) && <th>Status</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {payments.map((payment, index) => (
                                            <tr key={index}>
                                                <td>{payment.amount}</td>
                                                <td>{payment.method}</td>
                                                <td>
                                                    <a href={payment.paymentUrl} target="_blank" rel="noopener noreferrer">
                                                        View
                                                    </a>
                                                </td>
                                                {payment?.walletAdd && <td>{payment.walletAdd.slice(0, 6)}....{payment.walletAdd.slice(-6)} <FaCopy onClick={() => dataCopy(payment?.walletAdd)} /></td>}
                                                {(auth?.user?.role === 1) && <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={checkedPayments[index] || payment.isPaymentVerified}
                                                        onChange={() => handleCheckboxChange(index, payment.paymentUrl)}
                                                    />
                                                </td>}
                                                <td>
                                                    {(auth?.user?.role === 0) &&payment?.isPaymentVerified?<FaRegCheckCircle />:"Pending"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        }
                        {/* Close Button */}
                        <button onClick={() => setIsOpen(false)} className="close-btn">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PaymentHistroy
