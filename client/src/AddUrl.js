import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const AddUrl = () => {
  const navigate = useNavigate();
  const [originalUrl, setOriginalUrl] = useState('');
  const [urlDescription, setUrlDescription] = useState('');
  const [createdByUserId, setCreatedByUserId] = useState('');
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newUrl = {
      originalURL: originalUrl,
      urLdescription: urlDescription,
      createdByUserId: createdByUserId,
    };

    try {
      const response = await fetch('https://localhost:7044/urls/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUrl),
      });

      if (response.ok) {
        navigate('/url-shortened-table');
      } else {
        window.alert('Failed to add URL');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Add URL</h2>
      <form onSubmit={handleFormSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="originalUrl" style={labelStyle}>Original URL</label>
          <input
            type="text"
            id="originalUrl"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="urlDescription" style={labelStyle}>URL Description</label>
          <input
            type="text"
            id="urlDescription"
            value={urlDescription}
            onChange={(e) => setUrlDescription(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="createdByUserId" style={labelStyle}>Created By User ID</label>
          <input
            type="text"
            id="createdByUserId"
            value={createdByUserId}
            onChange={(e) => setCreatedByUserId(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
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
  fontFamily: 'Georgia, serif',
  textAlign: 'center',
  margin: '80px 0px 20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const formGroupStyle = {
  marginBottom: '20px',
  width: '300px',
};

const labelStyle = {
  fontSize: '16px',
  fontFamily: 'Verdana, sans-serif',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '100%',
  fontFamily: 'Arial, sans-serif',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
  margin: '20px 0px 80px',
};

export default AddUrl;
