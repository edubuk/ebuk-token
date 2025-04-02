import React, {useState } from 'react';
import './NavBar.css';
import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/EdubukLogo.png';
import { useAuth } from '../context/auth';



const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const navData = [

    { name: 'Dashboard', path: `/dashboard/${auth?.user?.role === 1 ? "admin/pending-status" : "user"}` },
    { name: `${auth?.user ? "Logout" : "Sign-up"}`, path: '/sign-up' },

  ];

  const logoutHandler = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
  }


  return (
    <nav className="navbar">
    <div className='nav-section'>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
      <Link to="/"  className="nav-link">Home</Link>
      <a href="/#tokenomics" className="nav-link">Tokenomics</a>
      <a href="https://drive.google.com/file/d/1EW5mnQg4HLZUoKbCkX2sXMbkV0Dkyknx/view" className="nav-link" target='_blank' rel="noreferrer">PitchDeck</a>
      <a href="https://drive.google.com/file/d/1gzXdHZHny33XqV-f-DNr7APQwXQWlF-2/view" className="nav-link" target='_blank' rel="noreferrer">Whitepaper</a>
        {navData.map((link, index) => (
          link?.name === 'Dashboard' ? <NavLink key={index} to={link.path} className="nav-link" >{link.name}</NavLink> : link.name === "Logout" ? <Link key={index} to="/sign-in" className="nav-link" onClick={logoutHandler}>
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
        </div>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} navData={navData} setIsSidebarOpen={setIsSidebarOpen} logoutHandler={logoutHandler}/>
    </nav>
  );
};

const Sidebar = ({ isOpen, navData,setIsSidebarOpen,logoutHandler}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <img src={logo} alt="logo" className="logo" />
        <li>
        <Link to="/" className="nav-link" onClick={()=>setIsSidebarOpen(false)}>Home</Link>
        </li>
        <li>
      <a href="/#tokenomics" className="nav-link" onClick={()=>setIsSidebarOpen(false)}>Tokenomics</a>
      </li>
      <li>
      <a href="https://drive.google.com/file/d/1EW5mnQg4HLZUoKbCkX2sXMbkV0Dkyknx/view" className="nav-link" target='_blank' rel="noreferrer" onClick={()=>setIsSidebarOpen(false)}>PitchDeck</a>
      </li>
      <li>
      <a href="https://drive.google.com/file/d/1gzXdHZHny33XqV-f-DNr7APQwXQWlF-2/view" className="nav-link" target='_blank' rel="noreferrer" onClick={()=>setIsSidebarOpen(false)}>Whitepaper</a>
      </li>
        {navData.map((link, index) => (
          link?.name === 'Dashboard' ? <li><NavLink key={index} to={link.path} className="nav-link" onClick={()=>setIsSidebarOpen(false)}>{link.name}</NavLink></li> : link.name === "Logout" ? <li><Link key={index} to="/sign-in" className="nav-link" onClick={()=>{setIsSidebarOpen(false);logoutHandler()}}>{link.name}</Link></li> : <li><Link key={index} to={link.path} className="nav-link" onClick={()=>setIsSidebarOpen(false)}>{link.name}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
