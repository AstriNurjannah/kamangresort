import React, { useState, useRef } from "react";

function HeroSection() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={muted}
          className="video-bg"
        >
          <source src="/Kamang-Resort/KemangResorts.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content text-white">
        <h1 className="hero-title">Welcome to Kemang Resort</h1>
        <p className="hero-subtitle">Your perfect getaway</p>

        {/* tombol mute/unmute */}
      </div>
    </section>
  );
}

export default HeroSection;
