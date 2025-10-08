import React, { useState, useEffect } from "react";
import "../Restaurant.css";

const Restaurant = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const heroSlides = [
    {
      id: 1,
      image: "/Kamang-Resort/menu-ayam-batokok.jpg",
      title: "Authentic Minang Cuisine",
      description: "Experience the rich flavors of West Sumatra",
    },
    {
      id: 2,
      image: "/Kamang-Resort/menu-ayam-kalasan.jpg",
      title: "Fine Dining Experience",
      description: "Elegant atmosphere with mountain views",
    },
    {
      id: 3,
      image: "/Kamang-Resort/menu-dendeng.jpg",
      title: "Fresh Local Ingredients",
      description: "Sourced directly from local farmers",
    },
  ];

  const menuItems = [
    // Main Course
    {
      id: 1,
      category: "main-course",
      image: "/Kamang-Resort/menu-dendeng.jpg",
      title: "Dendeng Bakar Cabai Hijau + Nasi",
      description: "Grilled beef with green chili and rice",
      price: "Rp30.000",
    },
    {
      id: 2,
      category: "main-course",
      image: "/Kamang-Resort/menu-ayam-batokok.jpg",
      title: "Ayam Batokok Ngalau Cabai Hijau + Nasi",
      description: "Pressed chicken with green chili and rice",
      price: "Rp25.000",
    },
    {
      id: 3,
      category: "main-course",
      image: "/Kamang-Resort/menu-ayam-kalasan.jpg",
      title: "Ayam Goreng Kalasan Sambal Terasi + Nasi",
      description: "Javanese fried chicken with shrimp paste sambal",
      price: "Rp25.000",
    },
    {
      id: 4,
      category: "main-course",
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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Rizki",
      rating: 5,
      comment:
        "Rasa masakan Minang yang otentik, suasana yang nyaman dengan pemandangan gunung yang menakjubkan. Highly recommended!",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Sarah Wijaya",
      rating: 5,
      comment:
        "Ayam Batokoknya luar biasa! Pelayanan ramah dan harga sangat reasonable untuk kualitas yang diberikan.",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Budi Santoso",
      rating: 4,
      comment:
        "Tempat yang perfect untuk family dinner. Anak-anak suka sekali dengan chicken crispy-nya.",
      date: "3 days ago",
    },
    {
      id: 4,
      name: "Maya Sari",
      rating: 5,
      comment:
        "Nasi Goreng Lengkok favorit keluarga kami. Rasanya authentic dan porsinya generous.",
      date: "5 days ago",
    },
  ];

  // Special offers data
  const specialOffers = [
    {
      id: 1,
      title: "Weekend Family Package",
      description:
        "Paket khusus keluarga untuk 4 orang dengan free dessert dan 4 minuman",
      price: "Rp120.000",
      originalPrice: "Rp150.000",
      validUntil: "31 Dec 2024",
    },
    {
      id: 2,
      title: "Early Bird Breakfast",
      description: "Diskon 20% untuk semua menu breakfast sebelum jam 9 pagi",
      price: "Mulai Rp20.000",
      originalPrice: "Rp25.000",
      validUntil: "Ongoing",
    },
    {
      id: 3,
      title: "Birthday Special",
      description:
        "Free birthday cake dan special decoration untuk reservasi di hari ulang tahun",
      price: "Free Cake",
      validUntil: "Ongoing",
    },
  ];

  // Facilities data
  //   const facilities = [
  //     {
  //       id: 1,
  //       icon: "bi bi-mountain",
  //       title: "Mountain View",
  //       description: "Pemandangan gunung yang menakjubkan dari setiap sudut restaurant"
  //     },
  //     {
  //       id: 2,
  //       icon: "bi bi-wifi",
  //       title: "Free WiFi",
  //       description: "Internet cepat gratis untuk semua pengunjung"
  //     },
  //     {
  //       id: 3,
  //       icon: "bi bi-car-front-fill",
  //       title: "Parking Area",
  //       description: "Area parkir yang luas dan aman"
  //     },
  //     {
  //       id: 4,
  //       icon: "bi bi-snow",
  //       title: "AC Rooms",
  //       description: "Ruang ber-AC dan outdoor seating dengan udara sejuk"
  //     }
  //   ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const filteredItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const categories = [
    { key: "all", label: "All Menu" },
    { key: "main-course", label: "Main Course" },
    { key: "nasi-goreng", label: "Nasi Goreng" },
    { key: "continental", label: "Continental" },
  ];

  // Render stars for ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi ${index < rating ? "bi-star-fill" : "bi-star"}`}
        style={{ color: "#ffc107", marginRight: "2px" }}
      ></i>
    ));
  };

  return (
    <div className="restaurant" id="restaurant">
      {/* Hero Slider */}
      <div className="restaurant-hero">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <div className="container">
                  <div className="hero-content">
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-description">{slide.description}</p>
                    <button
                      className="btn btn-primary btn-lg mt-3"
                      onClick={() =>
                        document
                          .getElementById("restaurant-menu")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      View Our Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="hero-nav hero-prev" onClick={prevSlide}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="hero-nav hero-next" onClick={nextSlide}>
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* Dots Indicator */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="container">
        <div className="row text-center mb-2 mt-5">
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

      {/* Facilities Section */}
      {/* <div className="facilities-section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title" style={{ color: "#315B50" }}>
                Our Facilities
              </h2>
              <p className="section-subtitle">Fasilitas lengkap untuk kenyamanan Anda</p>
            </div>
          </div>
          <div className="row">
            {facilities.map((facility) => (
              <div key={facility.id} className="col-lg-3 col-md-6 mb-4">
                <div className="facility-card text-center">
                  <div className="facility-icon">
                    <i className={facility.icon}></i>
                  </div>
                  <h5>{facility.title}</h5>
                  <p>{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Menu Section */}
      <div id="restaurant-menu">
        <div className="container">
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

      {/* Special Offers Section */}
      <div className="special-offers-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title" style={{ color: "#315B50" }}>
                Special Offers & Promotions
              </h2>
              <p className="section-subtitle">
                Nikmati penawaran spesial untuk pengalaman makan yang lebih
                berkesan
              </p>
            </div>
          </div>
          <div className="row">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="col-lg-4 col-md-6 mb-4">
                <div className="special-offer-card">
                  <div className="offer-badge">Limited Offer</div>
                  <div className="offer-content">
                    <h5>{offer.title}</h5>
                    <p>{offer.description}</p>
                    <div className="offer-price">
                      <span className="current-price">{offer.price}</span>
                      {offer.originalPrice && (
                        <span className="original-price">
                          {offer.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="offer-validity">
                      <small>Valid until: {offer.validUntil}</small>
                    </div>
                    <button className="btn btn-outline-primary btn-sm mt-3">
                      Claim Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title" style={{ color: "#315B50" }}>
                What Our Customers Say
              </h2>
              <p className="section-subtitle">
                Testimoni dari pelanggan yang sudah merasakan pengalaman makan
                di Kamang Resort
              </p>
            </div>
          </div>
          <div className="row">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-lg-6 col-md-6 mb-4">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="customer-info">
                      <h6 className="customer-name">{testimonial.name}</h6>
                      <div className="customer-rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <span className="testimonial-date">{testimonial.date}</span>
                  </div>
                  <p className="testimonial-comment">"{testimonial.comment}"</p>
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
