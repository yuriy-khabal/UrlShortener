import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import urlShortener from './img/UrlShortener.png'

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      navigate('/url-shortened-table');
    } else {
      window.alert('Invalid login data');
    }
  };

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
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
    marginBottom: '24px',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  };

  const agreementStyle = {   
    margin: '5px 0px 28px 0px',
    fontFamily: 'Segoe UI Webfont, sans-serif',
    wordWrap: 'break-word',
  }

  const registerStyle = {   
    margin: '10px 0px 80px 0px',
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

  const checkBoxStyle = {
    marginRight: '12px',
    transform: 'scale(1.5)',
    backgroundColor: 'transparent',
  }

  const checkedCheckBoxStyle = {
    ...checkBoxStyle,
    backgroundColor: '#0067B8',
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={urlShortener} alt="Url Shortener" style={imageStyle} />
      </div>
      <h2 style={headerStyle}>Register</h2>
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
        <div style={formGroupStyle}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Confirm password'
            style={inputStyle}
          />
        </div>
        <div style={agreementStyle}>
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleAgreementChange}
              style={agreed ? checkedCheckBoxStyle : checkBoxStyle}
            />
            I agree to the Url Shortener Terms of Use and acknowledge the Privacy Statement.
          </label>
        </div>      
        <button type="submit" style={buttonStyle}>Register</button>
        <div style={registerStyle}>
            Already have an UrlShortener account?
            <Link to='/login' style={redirectStyle}>Sign In!</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
