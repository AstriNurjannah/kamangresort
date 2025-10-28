import React, { useEffect, useState } from "react";
import "../App.css";

const LoadingScreen = ({ onFadeComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // jika diminta fade-out (selesai loading)
    if (onFadeComplete) {
      setIsFadingOut(true);
      const timer = setTimeout(() => onFadeComplete(), 800); // waktu fade-out
      return () => clearTimeout(timer);
    }
  }, [onFadeComplete]);

  return (
    <div className={`loading-container ${isFadingOut ? "fade-out" : "fade-in"}`}>
      <img
        src="/Kamang-Resort/LogoResort2.png"
        alt="Kamang Resort"
        className="loading-logo"
      />
      <p>Memuat halaman...</p>
    </div>
  );
};

export default LoadingScreen;
