import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

const galleryItems = [
  // Alam & Pemandangan
  {
    id: 1,
    category: "alam",
    image: "/Kamang-Resort/resort-gunung.jpg",
    title: "Pemandangan Gunung",
    description: "Panorama menakjubkan dari Kamang Resort",
    grid: "square",
  },
  {
    id: 2,
    category: "alam",
    image: "/Kamang-Resort/resort-garden.jpg",
    title: "Taman Resort",
    description: "Taman tropis yang terawat indah",
    grid: "wide",
  },
  {
    id: 3,
    category: "alam",
    image: "/Kamang-Resort/resort-sunrise.jpg",
    title: "Pemandangan Matahari Terbit",
    description: "Pemandangan matahari terbit yang menakjubkan di pegunungan",
    grid: "square",
  },

  // Fasilitas
  {
    id: 4,
    category: "fasilitas",
    image: "/Kamang-Resort/resort-kolam.jpg",
    title: "Kolam Renang",
    description: "Kolam renang tanpa batas dengan pemandangan indah",
    grid: "wide",
  },
  {
    id: 5,
    category: "fasilitas",
    image: "/Kamang-Resort/resort-resto.png",
    title: "Restoran",
    description: "Pengalaman bersantap dengan cita rasa khas Minang",
    grid: "wide",
  },
  {
    id: 6,
    category: "fasilitas",
    image: "/Kamang-Resort/resort-tamu.jpg",
    title: "Lobi Utama",
    description: "Arsitektur khas Minangkabau yang menawan",
    grid: "square",
  },

  // Kamar
  {
    id: 7,
    category: "kamar",
    image: "/Kamang-Resort/resort-bed2.jpg",
    title: "Kamar Deluxe",
    description: "Kamar luas dengan pemandangan pegunungan",
    grid: "wide",
  },
  {
    id: 8,
    category: "kamar",
    image: "/Kamang-Resort/resort-bed3.jpg",
    title: "Suite Keluarga",
    description: "Pilihan ideal untuk liburan keluarga",
    grid: "square",
  },
  {
    id: 9,
    category: "kamar",
    image: "/Kamang-Resort/resort-bed1.jpg",
    title: "Suite Eksekutif",
    description: "Akomodasi mewah dengan fasilitas premium",
    grid: "wide",
  },

  // Foto Tamu
  {
    id: 10,
    category: "reviews",
    image: "/Kamang-Resort/resort-guest1.jpg",
    title: "Foto Tamu",
    description: "Pengalaman bahagia para tamu",
    grid: "wide",
  },
  {
    id: 11,
    category: "reviews",
    image: "/Kamang-Resort/resort-guest2.jpg",
    title: "Foto Tamu",
    description: "Kenangan indah di Kamang Resort",
    grid: "square",
  },
  {
    id: 12,
    category: "reviews",
    image: "/Kamang-Resort/resort-guest3.jpg",
    title: "Foto Tamu",
    description: "Pengalaman menginap yang tak terlupakan",
    grid: "square",
  },
];


  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const categories = [
    { key: "all", label: "All" },
    { key: "kamar", label: "Kamar" },
    { key: "fasilitas", label: "Fasilitas" },
    { key: "alam", label: "Alam & Pemandangan" },
    { key: "reviews", label: "Foto Tamu" },
  ];

  return (
    <div className="gallery" id="gallery">
      <div className="container">
        {/* Header */}
        <div className="row text-center mb-2">
          <div className="col-12">
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#315B50" }}>
              Galeri
            </h1>
            <p className="lead">
              Jelajahi Keindahan Kamang Resort Melalui Galeri Kami
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="filter-buttons text-center">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`btn ${
                    activeFilter === category.key
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } mx-2 mb-2`}
                  onClick={() => setActiveFilter(category.key)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {/* <div className="row">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="gallery-item">
                <div className="gallery-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
         <div className="tetris-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`tetris-item ${item.grid}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tetris-image">
                <img src={item.image} alt={item.title} />
                <div className="tetris-overlay">
                  <div className="overlay-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              </div>
              ))}
               </div>
        

        {/* CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="gallery-cta">
              <h3 className="mb-4" style={{ color: "#315B50" }}>
                Nikmati Langsung Keindahan Kamang Resort
              </h3>
              <Link to="/Reservation" className="btn btn-primary btn-lg">
                Reservasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
