import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../../context/auth'
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth] = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
        AOS.init({ duration: 2000 }); // Animation duration and one-time trigger
      }, []);

  return (
    <div className="dashboard-container" data-aos="fade-left">
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
