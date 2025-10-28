import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        {/* Bagian Hero */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className=" text-center fw-bold mb-4" style={{ color: "#315B50" }}>
              Tentang Kamang Resort
            </h1>
            <p className="justify-about mb-4">
              Terletak di jantung Sumatera Barat, Kamang Resort menawarkan
              pengalaman tak terlupakan yang dikelilingi oleh keindahan alam
              serta kehangatan keramahan tradisional Minangkabau.
            </p>
            <div className="d-flex gap-3 justify-content-center  mb-3">
              <Link
                to="/Reservation"
                className="btn btn-primary btn-md d-flex align-items-center justify-content-center"
              >
                Pesan Sekarang
              </Link>
              <Link
                to="/gallery"
                className="btn btn-outline-primary btn-md d-flex align-items-center justify-content-center"
              >
                Lihat Galeri
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-hero-image">
              <img
                src="/Kamang-Resort/Resort1.jpg"
                alt="Kamang Resort"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>

        {/* Bagian Fitur */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#315B50" }}>
              Mengapa Memilih Kamang Resort?
            </h2>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-tree-fill"></i>
              </div>
              <h5>Lingkungan Alami</h5>
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
              <h5>Fasilitas Modern</h5>
              <p>
                Dilengkapi Wi-Fi cepat, tempat tidur nyaman, ruang karaoke, dan
                kolam renang yang menyegarkan.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-egg-fried"></i>
              </div>
              <h5>Kuliner Lokal</h5>
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
              <h5>Lokasi Strategis</h5>
              <p>
                Nikmati akses mudah menuju berbagai destinasi wisata, dari
                panorama alam hingga tempat bersejarah yang menarik.
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Cerita */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4 text-center" style={{ color: "#315B50" }}>
              Kisah Kami
            </h2>
            <p className="justify-about mb-3">
              Didirikan pada tahun 2024, Kamang Resort lahir dari semangat untuk
              membagikan keindahan Sumatera Barat kepada dunia. Para pendirinya
              memiliki visi untuk menghadirkan tempat di mana pengunjung dapat
              merasakan budaya Minangkabau yang autentik sekaligus menikmati
              kenyamanan modern.
            </p>
            <p className="justify-about mb-3">
              Berlokasi di Kamang Mudiak, Agam, resort ini memadukan arsitektur
              tradisional dengan fasilitas kontemporer, menciptakan tempat
              peristirahatan unik bagi para wisatawan yang mencari petualangan
              dan ketenangan dalam satu pengalaman tak terlupakan.
            </p>
      
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="about-story-image">
              <img
                src="/Kamang-Resort/Resort2.jpg"
                alt="Kisah Resort"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>

        {/* Bagian Tim */}
        <div className="row mb-5 justify-content-center ">
          <div className="col-12 text-center mb-5 ">
            <h2 className="fw-bold" style={{ color: "#315B50" }}>
              Kenali Tim Kami
            </h2>
            <p className="justify-about text-center">
              Profesional berdedikasi yang berkomitmen terhadap kenyamanan Anda
            </p>
          </div>

          {/* Baris 1: 2 kartu */}
          <div className="row justify-content-center ">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-card text-center h-100 d-flex flex-column">
                <div className="team-image mb-3">
                  <img
                    src="/Kamang-Resort/man.png"
                    alt="Manager"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Farhan Nurhidayah</h5>
                <p className="text-muted">Pengembang Web</p>
                <p className="flex-grow-1">
                  Minat di bidang teknologi, Kami
                  memastikan tampilan dan sistem berjalan sempurna.
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
                <p className="text-muted">Pengembang Web</p>
                <p className="flex-grow-1"> Memiliki Ketertarikan di bidang teknologi, kami
                  memastikan tampilan dan sistem berjalan sempurna.</p>
              </div>
            </div>
          </div>

          {/* Baris 2: 3 kartu */}
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
                <p className="text-muted">Kecerdasan Buatan</p>
                <p className="flex-grow-1">
                  Ahli lokal yang membagikan keindahan tersembunyi Sumatera
                  Barat.
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
                <p className="text-muted">Konten Kreator</p>
                <p className="flex-grow-1">
                  Menceritakan keindahan dan budaya Sumatera Barat melalui
                  konten visual dan naratif.
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
                <p className="text-muted">Kecerdasan Buatan</p>
                <p className="flex-grow-1">
                  Mengembangkan teknologi pintar untuk meningkatkan pengalaman
                  pengunjung.
                </p>
              </div>
            </div>
          </div>

          {/* Baris 3: 2 kartu */}
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
                <p className="text-muted">Kecerdasan Buatan</p>
                <p className="flex-grow-1">
                  Fokus pada inovasi digital dan solusi teknologi di Kamang
                  Resort.
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
                <p className="text-muted">Kecerdasan Buatan</p>
                <p className="flex-grow-1">
                  Meningkatkan interaksi pengguna melalui teknologi modern dan
                  ide kreatif.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Statistik */}
      </div>

      
    </div>
  );
};

export default AboutUs;
