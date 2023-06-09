import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      navigate('/url-shortened-table');
    } else {
      console.log('Невірні дані входу');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '150px',
    marginBottom: '260px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
  };

  const headerStyle = {
    fontSize: '33px',
    marginBottom: '40px',
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

  const labelStyle = {
    fontSize: '22px',
    fontFamily: 'Verdana, sans-serif',
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '18px',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="username" style={labelStyle}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;
