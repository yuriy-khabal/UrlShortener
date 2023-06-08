import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2023 Your Website. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const textStyle = {
  margin: '0',
};

export default Footer;
