// src/components/LoadingScreen.jsx
import React from 'react';
import '../App.css'; // Optional styling

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Memuat halaman...</p>
    </div>
  );
};

export default LoadingScreen;
