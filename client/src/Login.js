import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import urlShortener from './img/UrlShortener.png'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      navigate('/url-shortened-table');
    } else {
      window.alert('Невірні дані входу');
    }
  };

  const containerStyle = {
    background: 'linear-gradient(to bottom right, rgba(230, 230, 250, 0.5), rgba(255, 247, 248, 0.5))',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '160px 400px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
  };

  const headerStyle = {
    fontSize: '33px',
    marginTop: '20px',
    fontFamily: 'Georgia, serif',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const formGroupStyle = {
    marginBottom: '30px',
    width: '400px',
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '18px',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    marginBottom: '80px',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  };

  const registerStyle = {
    margin: '0px 0px 20px 22px',
    fontFamily: 'Segoe UI Webfont, sans-serif',
  }

  const redirectStyle = {
    color: '#0067B8'
  }

  const imageContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  };
  
  const imageStyle = {
    maxWidth: '50%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={urlShortener} alt="Url Shortener" style={imageStyle} />
      </div>
      <h2 style={headerStyle}>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        <div style={formGroupStyle}>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            style={inputStyle}
          />
        </div>
        <div style={registerStyle}>
            Don't have an Url Shortener account?
            <Link to='/register' style={redirectStyle}>Signing up!</Link>
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;
