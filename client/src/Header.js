import React from 'react';

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav" style={navbarStyle}>
        <li className="nav-item">
          <a href="/about-url" className="nav-link" style={navLinkStyle}>About Url</a>
        </li>
        <li className="nav-item">
          <a href="/url-shortened-table" className="nav-link" style={navLinkStyle}>Url Shortened Table</a>
        </li>
        <li className="nav-item" style={{ marginLeft: 'auto' }}>
          <a href="/login" className="nav-link" style={navLinkStyle}>Login</a>
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
