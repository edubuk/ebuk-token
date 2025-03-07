import React, { useState } from 'react';
import './NavBar.css';
import {Link, NavLink } from 'react-router-dom';
import logo from '../assets/EdubukLogoClean.png';
import { useAuth } from '../context/auth';
// import { Link } from 'react-scroll';


const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const navData = [
    { name: 'Whitepaper', path: '/whitepaper' },
    { name: 'Pitch Deck', path: '/pitch-deck' },
    { name: 'Q&A', path: '/q&a' },
    { name: 'How To Buy', path: '/htob' },
    { name: 'Dashboard', path: `/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}` },
    { name: `${auth?.user ? "Logout" : "Sign-up"}`, path: '/sign-up' },
  ];

  const logoutHandler = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <a href="/#tokenomics" className="nav-link">Tokenomics</a>
        {navData.map((link, index) => (
          link?.name === 'Dashboard' ? <NavLink key={index} to={link.path} className="nav-link">{link.name}</NavLink> : link.name === "Logout" ? <Link key={index} to="/sign-in" className="nav-link" onClick={logoutHandler}>
            {link.name}
          </Link> : <Link key={index} to={link.path} className="nav-link">
            {link.name}
          </Link>
        ))}
      </div>
        <div id="nav-hamburger" className={isSidebarOpen ? 'open' : ''} onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} navData={navData} />
    </nav>
  );
};

const Sidebar = ({ isOpen, navData }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <img src={logo} alt="logo" className="logo" />
        <li>
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
      <a href="/#tokenomics" className="nav-link">Tokenomics</a>
      </li>
        {navData.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
