import React from 'react';
import Header from './Header';
import UrlsTable from './UrlsTable';

const App = () => {
  return (
    <div style={appStyle}>
      <Header />
      <UrlsTable />
    </div>
  );
};

const appStyle = {
  backgroundColor: '#E6E6FA', // Колір фону, який співпадає зі стилем body
  minHeight: '100vh',
};

export default App;
