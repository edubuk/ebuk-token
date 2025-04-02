import React, {useState } from 'react'
import './Dashboard.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../../context/auth'


const Dashboard = ({ links }) => {
  const [auth] = useAuth();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

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
              <NavLink to={link.path} id={lastSegment===link.path?"active-link":"dashboard-links"}>
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
