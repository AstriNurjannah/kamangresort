import React, { useState, useEffect } from "react";
import "../Restaurant.css";

const Restaurant = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);


  // Auto slide functionality
  // useEffect(() => {
  //   if (!isAutoPlaying) return;

  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [isAutoPlaying]);


  const heroSlides = [
    {
      id: 1,
      image: "/Kamang-Resort/DaftarMenu2.jpg",
      title: "Menu Nusantara dan Cotential ",
      description: "Menu Makanan Khas",
    },
    {
      id: 2,
      image: "/Kamang-Resort/DaftarMenu3.jpg",
      title: "Pasta, Mie dan Pizza",
      description: "Sourced directly from local farmers",
    },
    {
      id: 3,
      image: "/Kamang-Resort/DaftarMenu4.jpg",
      title: "Fresh Local Ingredients",
      description: "Sourced directly from local farmers",
    },
    {
      id: 4,
      image: "/Kamang-Resort/DaftarMenu5.jpg",
      title: "Starter, Dessert, Snack ",
      description: "Sourced directly from local farmers",
    },
       {
      id: 5,
      image: "/Kamang-Resort/DaftarMenu6.jpg",
      title: "Cold Drink",
      description: "Sourced directly from local farmers",
    },
     {
      id: 6,
      image: "/Kamang-Resort/DaftarMenu7.jpg",
      title: "Hot Drink",
      description: "Sourced directly from local farmers",
    },
  ];

   // Auto slide functionality
   
   useEffect(() => {
     if (!isAutoPlaying) return;
 
     const interval = setInterval(() => {
       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
     }, 5000);
 
     return () => clearInterval(interval);
   }, [isAutoPlaying, heroSlides.length]);
 
   const nextSlide = () => {
     if (isAnimating) return;
     setIsAnimating(true);
     setTimeout(() => setIsAnimating(false), 600);
 
     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
   };
 
   const prevSlide = () => {
     if (isAnimating) return;
     setIsAnimating(true);
     setTimeout(() => setIsAnimating(false), 600);
 
     setCurrentSlide((prev) =>
       prev === 0 ? heroSlides.length - 1 : prev - 1
     );
   };
 
   const goToSlide = (index) => {
     if (isAnimating) return;
     setIsAnimating(true);
     setTimeout(() => setIsAnimating(false), 600);
     setCurrentSlide(index);
   };
    
  const menuItems = [
    // Main Course
    {
      id: 1,
      category: "Nusantara",
      image: "/Kamang-Resort/menu-dendeng.jpg",
      title: "Dendeng Bakar Cabai Hijau + Nasi",
      description: "Grilled beef with green chili and rice",
      price: "Rp30.000",
    },
    {
      id: 2,
      category: "Nusantara",
      image: "/Kamang-Resort/menu-ayam-batokok.jpg",
      title: "Ayam Batokok Ngalau Cabai Hijau + Nasi",
      description: "Pressed chicken with green chili and rice",
      price: "Rp25.000",
    },
    {
      id: 3,
      category: "Nusantara",
      image: "/Kamang-Resort/menu-ayam-kalasan.jpg",
      title: "Ayam Goreng Kalasan Sambal Terasi + Nasi",
      description: "Javanese fried chicken with shrimp paste sambal",
      price: "Rp25.000",
    },
    {
      id: 4,
      category: "Nusantara",
      image: "/Kamang-Resort/menu-ayam-sereh.jpg",
      title: "Ayam Goreng Bumbu Sereh Sambal Bawang + Nasi Daun Jeruk",
      description: "Lemongrass fried chicken with shallot sambal",
      price: "Rp25.000",
    },

    // Nasi Goreng
    {
      id: 5,
      category: "nasi-goreng",
      image: "/Kamang-Resort/menu-nasgor-lengkok.jpg",
      title: "Nasi Goreng Lengkok",
      description: "Special fried rice with complete toppings",
      price: "Rp22.000",
    },
    {
      id: 6,
      category: "nasi-goreng",
      image: "/Kamang-Resort/menu-nasgor-kari.jpg",
      title: "Nasi Goreng Kari Sapi",
      description: "Beef curry fried rice",
      price: "Rp22.000",
    },
    {
      id: 7,
      category: "nasi-goreng",
      image: "/Kamang-Resort/menu-nasgor-biasa.jpg",
      title: "Nasi Goreng Spesial",
      description: "Traditional Indonesian fried rice",
      price: "Rp20.000 - Rp25.000",
    },

    // Continental
    {
      id: 8,
      category: "continental",
      image: "/Kamang-Resort/menu-chicken-honey.jpg",
      title: "Chicken Honey Sauce + Nasi",
      description: "Crispy chicken with sweet honey sauce",
      price: "Rp30.000",
    },
    {
      id: 9,
      category: "continental",
      image: "/Kamang-Resort/menu-chicken-steak.jpg",
      title: "Chicken Steak + Kentang",
      description: "Grilled chicken steak with potatoes",
      price: "Rp30.000",
    },
    {
      id: 10,
      category: "continental",
      image: "/Kamang-Resort/menu-chicken-crispy.jpg",
      title: "Chicken Crispy Hot Sauce + Kentang",
      description: "Crispy chicken with spicy sauce",
      price: "Rp27.000",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const categories = [
    { key: "all", label: "All Menu" },
    { key: "Nusantara", label: "Nusantara" },
    { key: "nasi-goreng", label: "Nasi Goreng" },
    { key: "continental", label: "Continental" },
  ];


  return (
    <div className="restaurant" id="restaurant">
      {/* Restaurant Info */}
      <div className="container">
        <div className="row text-center mt-2">
          <div className="col-12">
            <h1 className="display-5 fw-bold mb-3" style={{ color: "#315B50" }}>
              Kamang Resort Restaurant
            </h1>
            <p className="lead">
              Authentic Taste • Relaxed Atmosphere • Beautiful View
            </p>
          </div>
        </div>
      </div>

      {/* Hero Slider */}


     <div className="facilities-slider-container ">
        <div className="slider-wrapper">
          {heroSlides.map((slide, index) => {
            const total = heroSlides.length;
            const diff = (index - currentSlide + total) % total;

            let position = "hidden";
            if (diff === 0) position = "active";
            else if (diff === 1) position = "next";
            else if (diff === 2) position = "next2";
            else if (diff === total - 1) position = "prev";
            else if (diff === total - 2) position = "prev2";

            return (
              <div key={slide.id} className={`facility-slide ${position}`}>
                <img
                  src={slide.image}
                  alt={`Fasilitas ${slide.id}`}
                  className="slide-image"
                  style={{
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
                   onClick={() => {
                    setSelectedImage(slide.image);
                    setIsModalOpen(true);
                  }}
                   onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                 />
                <div className="slide-content text-center mt-3">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="slider-controls">
          <button
            className="control-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="control-btn next-btn"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
                {isModalOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            zIndex: 1050,
            backgroundColor: "rgba(0,0,0,0.6)",
            cursor: "pointer",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={selectedImage}
            alt="Fasilitas Full View"
            className="img-fluid rounded-4 shadow-lg"
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Menu Section */}
      <div id="restaurant-menu">
        <div className="container mt-4 mb-3">
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

          {/* Menu Grid */}
          <div className="row">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                <div className="menu-item">
                  <div className="menu-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                    />
                    <div className="menu-overlay">
                      <div className="menu-content">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <div className="menu-price">{item.price}</div>
                        {/* <button className="btn btn-light btn-sm mt-2">
                          <i className="bi bi-cart-plus me-1"></i>
                          Add to Order
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Contact & CTA */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="restaurant-cta">
              <h3 className="mb-4" style={{ color: "#315B50" }}>
                For Reservations & Orders
              </h3>
              <div className="contact-info mb-4">
                <div className="phone-number">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:081234567890" className="phone-link">
                    0812-3456-7890
                  </a>
                </div>
                <p className="mt-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Kamang Resort & Convention, Jl. Kamang No. 123
                </p>
              </div>
              <p className="text-muted mb-4">Open daily: 7:00 AM - 10:00 PM</p>
              <div className="cta-buttons">
                <a href="/contact-us" className="btn btn-primary btn-lg me-3">
                  <i className="bi bi-calendar-check me-2"></i>
                  Reserve Your Table Now
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  className="btn btn-success btn-lg"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
