import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import UrlsTable from './UrlsTable';
import Login from './Login';
import AboutUrlPage from './AboutUrlPage';
import HomePage from './HomePage';
import Footer from './Footer';
import AddUrl from './AddUrl';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/url-shortened-table" element={<UrlsTable />} />
          <Route path="/about-url" element={<AboutUrlPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-url" element={<AddUrl />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const appStyle = {
  background: 'linear-gradient(to bottom right, #E0E5FF, #FFE6E6)', 
  minHeight: '100vh',
};

export default App;
