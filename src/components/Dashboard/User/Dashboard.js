import React, { useState } from 'react'
import './Dashboard.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../../context/auth'
import { CgMenuGridO } from "react-icons/cg";

const Dashboard = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth] = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Main Content */}
      <div className="link-component">
        <div className="user-header">
          {auth?.user && <p>Welcome <strong id='user-name'>{auth?.user.name}</strong></p>}
        </div>
        <div className='dashboard-links'>
          {links.map((link, i) => (
            <div className="link-container" key={i}>
              {link.icon}
              <NavLink to={link.path} id="dashboard-links">
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
