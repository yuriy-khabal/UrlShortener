import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/UrlLogo.webp'

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav" style={navbarStyle}>
        <Link to='/' style={logoLinkStyle}>
          <img src={logo} alt="About Url" style={imageStyle} />
        </Link>
        <li className="nav-item">
          <Link to="/about-url" className="nav-link" style={navLinkStyle}>About Url Shortener</Link>
        </li>
        <li className="nav-item">
          <Link to="/url-shortened-table" className="nav-link" style={navLinkStyle}>Url Shortened Table</Link>
        </li>
        <li className="nav-item" style={{ marginLeft: 'auto' }}>
          <Link to="/login" className="nav-link" style={navLinkStyle}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#333',
  padding: '10px',
  margin: "16px 0px 0px",
  listStyleType: 'none',
};

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '22px',
  marginLeft: '20px',
  marginRight: '20px',
  fontSize: '20px',
};

const imageStyle = {
  maxWidth: '70px', 
  height: 'auto',
  marginRight: '10px',
};

export default Header;
