import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import UrlsTable from './UrlsTable';
import Login from './Login';
import AboutUrlPage from './AboutUrlPage';

const App = () => {
  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <Routes>
          <Route path="/url-shortened-table" element={<UrlsTable />} />
          <Route path="/about-url" element={<AboutUrlPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

const appStyle = {
  backgroundColor: '#E6E6FA',
  minHeight: '100vh',
};

export default App;
