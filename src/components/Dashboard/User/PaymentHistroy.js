import React from 'react'
import './Dashboard.css'
const PaymentHistroy = ({payments,isOpen,setIsOpen}) => {
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Payment History</h2>
            {
                payments.length===0&&<p>No data found</p>
            }
            {payments.length>0&&
            <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Payment URL</th>
                  <th>Wallet Address</th>
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
                    <td>{payment.walletAdd.slice(0,6)}....{payment.walletAdd.slice(-6)}</td>
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
