import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav" style={navbarStyle}>
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
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333',
  padding: '10px',
  margin: "16px 0px 0px",
  listStyleType: 'none',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginRight: '40px', // Зменшено відстань між елементами
};

export default Header;
