import React from 'react'
import './Dashboard.css'
import { NavLink, Outlet} from 'react-router-dom'
import { useAuth } from '../../../context/auth'

const Dashboard = ({links}) => {
  const [auth] = useAuth();
  return (
    <div className='dashboard-container'>
      <div className='dashboard-links'>
      {links.map((link,i)=>
      <div className='link-container'>
      {link.icon}
      <NavLink to={link.path} key={i+1} id="dashboard-links">{link.name}</NavLink></div>
      )}
      </div>
      <div className='link-component'>
      <div className='user-header'>
      {auth?.user&&<p>Welcome <strong id='user-name'>{auth?.user.name}</strong></p>}
      </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
