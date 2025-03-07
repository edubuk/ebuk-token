import React,{useState} from 'react'
import './Dashboard.css'
import { NavLink, Outlet} from 'react-router-dom'
import { useAuth } from '../../../context/auth'
import { FaBars } from 'react-icons/fa';
const Dashboard = ({links}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth] = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className='dashboard-links-section'>
      <button className="menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`dashboard-links ${isOpen ? 'open' : 'closed'}`}>
        {links.map((link, i) => (
          <div className="link-container" key={i}>
            {link.icon}
            <NavLink to={link.path} id="dashboard-links" onClick={()=>setIsOpen(false)}>
              {link.name}
            </NavLink>
          </div>
        ))}
      </div>
      </div>

      {/* Main Content */}
      <div className="link-component">
        <div className="user-header">
          {auth?.user && <p>Welcome <strong id='user-name'>{auth?.user.name}</strong></p>}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
