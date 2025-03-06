import React from 'react'
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { GiToken } from "react-icons/gi";
import { Link } from 'react-router-dom';
const UserStatus = () => {
  return (
    <div className='dashboard-menu-container'>
      <div className='status-card'>
      <HiOutlineDocumentSearch id='icon'/>
        <h1>KYC</h1>
        <p>Current Status:<strong> Not Initialized</strong></p>
        <Link to="/dashboard/user/user-kyc">Start KYC</Link>
      </div>
      <div className='status-card'>
      <GrTransaction id='icon'/>
        <h1>Payment</h1>
        <p>Current Status:<strong> Not Initialized</strong></p>
        <button>View History</button>
      </div>
      <div className='status-card'>
      <GiToken id='icon'/>
        <h1>EBUK Tokens</h1>
        <p>Current Status:<strong> Not Initialized</strong></p>
        <button>View History</button>
      </div>
    </div>
  )
}

export default UserStatus
