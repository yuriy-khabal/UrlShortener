import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CustomTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7044/urls/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Url Shortened Table</h2>
      <Link to="/add-url" style={addUrlButtonStyle}>Add Url</Link>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Original URL</th>
            <th style={tableHeaderStyle}>Shortened URL</th>
            <th style={tableHeaderStyle}>URL Description</th>
            <th style={tableHeaderStyle}>Created By User ID</th>
            <th style={tableHeaderStyle}>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td style={tableCellStyle}>{row.id}</td>
              <td style={tableCellStyle}>
                <a href={row.originalURL} target="_blank" rel="noopener noreferrer">
                  {row.originalURL}
                </a>
              </td>
              <td style={tableCellStyle}>
                <a href={row.shortenedUrl} target="_blank" rel="noopener noreferrer">
                  {row.shortenedUrl}
                </a>
              </td>
              <td style={tableCellStyle}>{row.urLdescription}</td>
              <td style={tableCellStyle}>{row.createdByUserId}</td>
              <td style={tableCellStyle}>{row.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const containerStyle = {
  background: '#E6E6FA',
  padding: '20px',
  minHeight: '100vh',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
  margin: '0px 0px 20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  background: 'linear-gradient(to bottom right, #f5f7fb, #c3cfe2)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '26px',
  overflow: 'hidden',
};

const tableHeaderStyle = {
  padding: '12px 16px',
  textAlign: 'left',
  fontWeight: 'bold',
  border: 'none',
  background: 'linear-gradient(to bottom right, #7883a8, #61678b)',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '14px',
};

const tableCellStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid #ddd',
  fontSize: '14px',
  wordWrap: 'break-word',
};

const addUrlButtonStyle = {
  display: 'block',
  width: '120px',
  margin: '20px auto',
  backgroundColor: '#333333',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
  textDecoration: 'none',
  textAlign: 'center',
};

export default CustomTable;
