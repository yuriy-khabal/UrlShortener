import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome to the Home Page</h2>
      <p style={textStyle}>This is the home page of our website.</p>
      <Link to="/about-url" style={linkStyle}>Learn More</Link>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 95px)', // Висота мінус висота заголовку
  background: '#f2f2f2',
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
};

const textStyle = {
  fontSize: '18px',
  marginBottom: '20px',
  color: '#666',
};

const linkStyle = {
  fontSize: '16px',
  padding: '10px 20px',
  borderRadius: '5px',
  background: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  transition: 'background 0.3s ease-in-out',
};

export default HomePage;
