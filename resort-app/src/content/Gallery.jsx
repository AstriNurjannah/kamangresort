import React, { useState } from "react";
import "../App.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    // Nature & Views
    {
      id: 1,
      category: "nature",
      image: "/Kamang-Resort/resort-gunung.jpg",
      title: "Mountain View",
      description: "Breathtaking scenery from the resort",
    },
    {
      id: 2,
      category: "nature",
      image: "/Kamang-Resort/resort-garden.jpg",
      title: "Resort Garden",
      description: "Beautifully maintained tropical garden",
    },
    {
      id: 3,
      category: "nature",
      image: "/Kamang-Resort/resort-sunrise.jpg",
      title: "Sunrise View",
      description: "Stunning sunset over the mountains",
    },

    // Facilities
    {
      id: 4,
      category: "facilities",
      image: "/Kamang-Resort/resort-kolam.jpg",
      title: "Swimming Pool",
      description: "Infinity pool with panoramic views",
    },
    {
      id: 5,
      category: "facilities",
      image: "/Kamang-Resort/resort-resto.png",
      title: "Restaurant",
      description: "Authentic Minang cuisine dining experience",
    },
    {
      id: 6,
      category: "facilities",
      image: "/Kamang-Resort/resort-tamu.jpg",
      title: "Main Lobby",
      description: "Traditional Minangkabau architecture",
    },

    // Rooms
    {
      id: 7,
      category: "rooms",
      image: "/Kamang-Resort/resort-bed2.jpg",
      title: "Deluxe Room",
      description: "Spacious room with mountain view",
    },
    {
      id: 8,
      category: "rooms",
      image: "/Kamang-Resort/resort-bed3.jpg",
      title: "Family Suite",
      description: "Perfect for family vacations",
    },
    {
      id: 9,
      category: "rooms",
      image: "/Kamang-Resort/resort-bed1.jpg",
      title: "Executive Suite",
      description: "Luxury accommodation with premium amenities",
    },

    // Guest Photos (placeholder)
    {
      id: 10,
      category: "reviews",
      image: "/Kamang-Resort/resort-guest1.jpg",
      title: "Guest Photo",
      description: "Happy guest experience",
    },
    {
      id: 11,
      category: "reviews",
      image: "/Kamang-Resort/resort-guest2.jpg",
      title: "Guest Photo",
      description: "Beautiful memories at Kemang Resort",
    },
    {
      id: 12,
      category: "reviews",
      image: "/Kamang-Resort/resort-guest3.jpg",
      title: "Guest Photo",
      description: "Unforgettable stay experience",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const categories = [
    { key: "all", label: "All" },
    { key: "rooms", label: "Rooms" },
    { key: "facilities", label: "Facilities" },
    { key: "nature", label: "Nature & Views" },
    { key: "reviews", label: "Guest Photos" },
  ];

  return (
    <div className="gallery" id="gallery">
      <div className="container">
        {/* Header */}
        <div className="row text-center mb-2">
          <div className="col-12">
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#315B50" }}>
              Gallery
            </h1>
            <p className="lead">
              Discover the beauty of Kamang Resort through our photos
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
        <div className="row">
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
        </div>

        {/* CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="gallery-cta">
              <h3 className="mb-4" style={{ color: "#315B50" }}>
                Experience Kamang Resort Yourself
              </h3>
              <p className="lead mb-4">
                Book your stay and create unforgettable memories
              </p>
              <a href="/contactUs" className="btn btn-primary btn-lg">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
