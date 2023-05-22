import React, { useEffect, useState } from 'react';

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
      <h2 style={headerStyle}>UrlShortened Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>OriginalURL</th>
            <th style={tableHeaderStyle}>ShortenedURL</th>
            <th style={tableHeaderStyle}>URLDescription</th>
            <th style={tableHeaderStyle}>CreatedByUserId</th>
            <th style={tableHeaderStyle}>CreatedDate</th>
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
                <a href={row.shortenedURL} target="_blank" rel="noopener noreferrer">
                  {row.shortenedURL}
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
  background: `#E6E6FA`, 
  backgroundSize: 'cover',
  minHeight: '100vh',
  padding: '20px',
};

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  margin: '0px 0px 20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  background: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
};

const tableHeaderStyle = {
  padding: '10px',
  textAlign: 'left',
  fontWeight: 'bold',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  fontSize: '14px'
};

export default CustomTable;
