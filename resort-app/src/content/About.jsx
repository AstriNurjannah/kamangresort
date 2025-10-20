import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#315B50" }}>
              About Kamang Resort
            </h1>
            <p className=" text-tengah lead mb-4">
              Terletak di jantung Sumatera Barat, Kamang Resort menawarkan
              pengalaman tak terlupakan yang dikelilingi oleh keindahan alam
              serta kehangatan keramahan tradisional Minangkabau.
            </p>
            <div className="d-flex gap-3 align-items-stretch mb-3">
              <Link
                to="/contactUs"
                className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
              >
                Book Now
              </Link>
              <Link
                to="/gallery"
                className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-hero-image">
              <img
                src="/Kamang-Resort/Resort1.jpg"
                alt="Kemang Resort"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#315B50" }}>
              Why Choose Kamang Resort?
            </h2>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-tree-fill"></i>
              </div>
              <h5>Natural Surroundings</h5>
              <p>
                Rasakan kesejukan udara pegunungan dan nikmati keindahan alam
                hijau yang menenangkan.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-house-heart-fill"></i>
              </div>
              <h5>Modern Facilities</h5>
              <p>
                Dilengkapi Wi-Fi cepat, double bed nyaman, ruang karaoke, dan
                kolam renang yang menenangkan.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-egg-fried"></i>
              </div>
              <h5>Local Cuisine</h5>
              <p>
                Nikmati kelezatan kuliner autentik khas Sumatera Barat yang kaya
                akan cita rasa dan tradisi.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h5>Strategic Location</h5>
              <p>
                Nikmati akses mudah menuju berbagai destinasi wisata dari
                panorama alam hingga tempat bersejarah yang menarik.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4" style={{ color: "#315B50" }}>
              Our Story
            </h2>
            <p className=" text-tengah mb-3">
              Didirikan pada tahun 2024, Kamang Resort lahir dari semangat untuk
              membagikan keindahan Sumatera Barat kepada dunia. Para pendirinya,
              memiliki visi untuk menghadirkan tempat di mana para pengunjung
              dapat merasakan budaya Minangkabau yang autentik sekaligus
              menikmati kenyamanan modern.
            </p>
            <p className=" text-tengah mb-3">
              Berlokasi di Kamang Mudiak, Agam, resort ini memadukan arsitektur
              tradisional dengan fasilitas kontemporer, menciptakan tempat
              peristirahatan unik bagi para wisatawan yang mencari petualangan
              dan ketenangan dalam satu pengalaman tak terlupakan.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                Family-owned and operated
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                Committed to sustainable tourism
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                Supporting local community
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="about-story-image">
              <img
                src="/Kamang-Resort/Resort2.jpg"
                alt="Resort Story"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#315B50" }}>
              Meet Our Team
            </h2>
            <p className="lead">
              Dedicated professionals committed to your comfort
            </p>
          </div>

          {/* Baris 1: 2 card */}
          <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/man.png"
                    alt="Manager"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Farhan Nurhidayah</h5>
                <p className="text-muted">Web Developer</p>
                <p className="flex-grow-1">
                  With over 15 years in hospitality, Ahmad ensures your stay is
                  perfect.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/woman.png"
                    alt="Chef"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Astri Nurjannah</h5>
                <p className="text-muted">Web Developer</p>
                <p className="flex-grow-1">astrinurjannah06@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Baris 2: 3 card */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/man.png"
                    alt="Guide"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Andrean Perdana</h5>
                <p className="text-muted">Generative AI</p>
                <p className="flex-grow-1">
                  Local expert sharing the hidden gems of West Sumatra.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/woman.png"
                    alt="Guide"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Zalfa Huriyah Fatimah</h5>
                <p className="text-muted">Content </p>
                <p className="flex-grow-1">
                  Local expert sharing the hidden gems of West Sumatra.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/man.png"
                    alt="Guide"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Mario</h5>
                <p className="text-muted">Generative AI</p>
                <p className="flex-grow-1">
                  Local expert sharing the hidden gems of West Sumatra.
                </p>
              </div>
            </div>
          </div>

          {/* Baris 3: 2 card */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/man.png"
                    alt="Guide"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Rajuni Saputra Rambe</h5>
                <p className="text-muted">Generative AI</p>
                <p className="flex-grow-1">
                  Local expert sharing the hidden gems of West Sumatra.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/woman.png"
                    alt="Guide"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Salwa Tazkiya Turhmadani</h5>
                <p className="text-muted">Generative AI</p>
                <p className="flex-grow-1">
                  Local expert sharing the hidden gems of West Sumatra.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row stats-section text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-item">
              <h3 className="fw-bold" style={{ color: "#315B50" }}>
                10+
              </h3>
              <p>Years Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-item">
              <h3 className="fw-bold" style={{ color: "#315B50" }}>
                5000+
              </h3>
              <p>Happy Guests</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-item">
              <h3 className="fw-bold" style={{ color: "#315B50" }}>
                50+
              </h3>
              <p>Local Staff</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-item">
              <h3 className="fw-bold" style={{ color: "#315B50" }}>
                4.8
              </h3>
              <p>Guest Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
