import React, { useState, useEffect } from "react";
import "../Facilities.css";

const Facilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const facilitySlides = [
    {
      id: 1,
      image: "/Kamang-Resort/cottage-bansa-1.jpg",
      title: "Bansa Cottage",
      description: "Rasakan relaksasi penuh di akomodasi mewah dengan fasilitas lengkap dan pelayanan ramah.",
    },
    {
      id: 2,
      image: "/Kamang-Resort/cottage-deluxe-201-1.jpg",
      title: "Deluxe Room 201",
      description: "Pilihan sempurna untuk bersantai setelah hari yang sibuk. Nikmati kenyamanan maksimal dengan fasilitas lengkap.",
    },
    {
      id: 3,
      image: "/Kamang-Resort/cottage-durian-1.jpg",
      title: "Durian Cottage",
      description: "Pilihan sempurna untuk bersantai setelah hari yang sibuk. Nikmati kenyamanan maksimal dengan fasilitas lengkap.",
    },
    {
      id: 4,
      image: "/Kamang-Resort/cottage-lengkok-1.jpg",
      title: "Lengkok Cottage",
      description: "Tempat ideal untuk bersantai sepenuhnya dengan kenyamanan dan pelayanan terbaik.",
    },
    {
      id: 5,
      image: "/Kamang-Resort/cottage-ngalau-1.jpg",
      title: "Ngalau Cottage",
      description: "Kamar dengan konsep terbuka, jendela besar, dan fasilitas lengkap untuk kenyamanan Anda.",
    },
     {
      id: 6,
      image: "/Kamang-Resort/cottage-tarusan-1.jpg",
      title: "Tarusan Cottage",
      description: "Nikmati pengalaman menginap mewah dengan pelayanan terbaik yang membuat Anda selalu puas.",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facilitySlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, facilitySlides.length]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);

    setCurrentSlide((prev) => (prev + 1) % facilitySlides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);

    setCurrentSlide((prev) =>
      prev === 0 ? facilitySlides.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentSlide(index);
  };

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room 201",
      price: "Rp750.000",
      period: "/ night",
      guests: 3,
      bedType: "King Size & Twin Bed",
      size: "25m²",
      view: "",
      amenities: [
        "Bathroom essentials",
        "Bedroom comforts",
        "Free parking",
        "Heating",
        "Terrace",
        "Wi-Fi",
      ],
      images: [
        "/Kamang-Resort/cottage-deluxe-201-1.jpg",
        "/room-deluxe-201-2.jpg",
      ],
      description:
        "Pilihan sempurna untuk bersantai setelah hari yang sibuk. Nikmati kenyamanan maksimal dengan fasilitas lengkap.",
    },
    {
      id: 2,
      name: "Deluxe Room 202 – 206",
      price: "Rp750.000",
      period: "/ night",
      guests: 1,
      bedType: "Single",
      size: "25m²",
      view: "",
      amenities: [
        "Bathroom essentials",
        "Bedroom comforts",
        "Free parking",
        "Heating",
        "Terrace",
        "Wi-Fi",
      ],
      images: [
        "/Kamang-Resort/cottage-tarusan-1.jpg",
        "/room-deluxe-202-2.jpg",
      ],
      description:
        "Pilihan sempurna untuk bersantai setelah hari yang sibuk. Nikmati kenyamanan maksimal dengan fasilitas lengkap.",
    },
    {
      id: 3,
      name: "Durian Cottage",
      price: "Rp1.500.000",
      period: "/ night",
      guests: 10,
      bedType: "1 King Size Bed",
      size: "48m²",
      view: "Swimming pool",
      amenities: [
        "Bathroom essentials",
        "Bedroom comforts",
        "Free parking",
        "Heating",
        "Terrace",
        "Wi-Fi",
      ],
      images: ["/Kamang-Resort/cottage-durian-1.jpg", "/cottage-durian-2.jpg"],
      description:
        "Pilihan sempurna untuk bersantai setelah hari yang sibuk. Nikmati kenyamanan maksimal dengan fasilitas lengkap.",
    },
    {
      id: 4,
      name: "Lengkok Cottage",
      price: "Rp1.500.000",
      period: "/ night",
      guests: 10,
      bedType: "1 King Size Bed",
      size: "48m²",
      view: "Swimming pool",
      amenities: [
        "Bathroom essentials",
        "Bedroom comforts",
        "Free parking",
        "Terrace",
        "Wi-Fi",
      ],
      images: [
        "/Kamang-Resort/cottage-lengkok-1.jpg",
        "/cottage-lengkok-2.jpg",
      ],
      description:
        "Tempat ideal untuk bersantai sepenuhnya dengan kenyamanan dan pelayanan terbaik.",
    },
    {
      id: 5,
      name: "Ngalau Cottage",
      price: "Rp1.500.000",
      period: "/ night",
      guests: 10,
      bedType: "1 Standard Bed",
      size: "48m²",
      view: "Swimming pool",
      amenities: [
        "Bathroom essentials",
        "Bedroom comforts",
        "Free parking",
        "Heating",
        "Terrace",
        "Wi-Fi",
      ],
      images: ["/Kamang-Resort/cottage-ngalau-1.jpg", "/cottage-ngalau-2.jpg"],
      description:
        "Kamar dengan konsep terbuka, jendela besar, dan fasilitas lengkap untuk kenyamanan Anda.",
    },
    {
      id: 6,
      name: "Tarusan Cottage",
      price: "Rp1.500.000",
      period: "/ night",
      guests: 10,
      bedType: "2 Single Beds",
      size: "48m²",
      view: "",
      amenities: [
        "Bathroom essentials",
        "Bedroom comforts",
        "Free parking",
        "Heating",
        "Terrace",
        "Wi-Fi",
      ],
      images: [
        "/Kamang-Resort/cottage-tarusan-1.jpg",
        "/cottage-tarusan-2.jpg",
      ],
      description:
        "Nikmati pengalaman menginap mewah dengan pelayanan terbaik yang membuat Anda selalu puas.",
    },
    {
      id: 7,
      name: "Bansa Cottage",
      price: "Rp1.500.000",
      period: "/ night",
      guests: 10,
      bedType: "1 Queen Size Bed",
      size: "48m²",
      view: "Swimming pool",
      amenities: [
        "Bathroom essentials",
        "Bedroom comforts",
        "Free parking",
        "Heating",
        "Terrace",
        "Wi-Fi",
      ],
      images: ["/Kamang-Resort/cottage-bansa-1.jpg", "/cottage-bansa-2.jpg"],
      description:
        "Rasakan relaksasi penuh di akomodasi mewah dengan fasilitas lengkap dan pelayanan ramah.",
    },
  ];

  const openRoomDetail = (room) => {
    setActiveRoom(room);
  };

  const closeRoomDetail = () => {
    setActiveRoom(null);
  };

  const handleBookNow = (roomName) => {
    // Redirect to booking page or open booking modal
    alert(`Booking ${roomName} - Redirecting to booking page...`);
  };

  return (
    <div className="accommodations" id="accommodations">
      {/* Judul Section */}
      <div className="container">
        <div className="row text-center ">
          <div className="col-12">
            <h1 className="display-5 fw-bold mb-3" style={{ color: "#315B50" }}>
              Fasilitas Kamang Resort
            </h1>
            <p className="lead">
              Kenyamanan Terbaik • Fasilitas Lengkap • Pengalaman Tak Terlupakan
            </p>
          </div>
        </div>
      </div>

      {/* Hero Slider untuk Fasilitas */}
      <div className="facilities-slider-container ">
        <div className="slider-wrapper">
          {facilitySlides.map((slide, index) => {
            const total = facilitySlides.length;
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
                <div className="slide-content">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            );
          })}
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
          {facilitySlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="row text-center mb-5 mt-5">
          <div className="col-12">
            <h2 className="section-title">Accommodations</h2>
            <p className="section-subtitle">
              Choose from our variety of comfortable rooms and cottages
            </p>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="row">
          {rooms.map((room) => (
            <div key={room.id} className="col-lg-6 col-xl-4 mb-4">
              <div className="room-card">
                <div className="room-image">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="img-fluid"
                  />
                  <div className="room-price">
                    <span className="price">{room.price}</span>
                    <span className="period">{room.period}</span>
                  </div>
                  <div className="room-overlay">
                    <button
                      className="btn btn-view-details"
                      onClick={() => openRoomDetail(room)}
                    >
                      View Gallery
                    </button>
                  </div>
                </div>

                <div className="room-content">
                  <h3 className="room-name">{room.name}</h3>

                  <div className="room-features">
                    <div className="feature">
                      <i className="bi bi-people"></i>
                      <span>
                        {room.guests} {room.guests > 1 ? "Guests" : "Guest"}
                      </span>
                    </div>
                    <div className="feature">
                      <i className="bi bi-bed"></i>
                      <span>{room.bedType}</span>
                    </div>
                    <div className="feature">
                      <i className="bi bi-arrows-fullscreen"></i>
                      <span>{room.size}</span>
                    </div>
                    {room.view && (
                      <div className="feature">
                        <i className="bi bi-binoculars"></i>
                        <span>{room.view}</span>
                      </div>
                    )}
                  </div>

                  {room.description && (
                    <p className="room-description">{room.description}</p>
                  )}

                  <div className="room-amenities">
                    <h6>✨ Amenities:</h6>
                    <div className="amenities-list">
                      {room.amenities.map((amenity, index) => (
                        <span key={index} className="amenity-tag">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="room-actions">
                    <button
                      className="btn btn-book-now"
                      onClick={() => handleBookNow(room.name)}
                    >
                      <i className="bi bi-calendar-check me-2"></i>
                      Book Now
                    </button>
                    <button
                      className="btn btn-view-details-outline"
                      onClick={() => openRoomDetail(room)}
                    >
                      <i className="bi bi-info-circle me-2"></i>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="accommodations-cta">
              <h3 className="cta-title">Ready to Book Your Stay?</h3>
              <p className="cta-subtitle">
                Contact us for special packages and group reservations
              </p>
              <div className="cta-buttons">
                <a
                  href="tel:081234567890"
                  className="btn btn-primary btn-lg me-3"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Now
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  className="btn btn-success btn-lg"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Detail Modal */}
      {activeRoom && (
        <div className="room-modal">
          <div className="modal-content">
            <div className="modal-backdrop" onClick={closeRoomDetail}></div>
            <div className="modal-header">
              <h3>{activeRoom.name}</h3>
              <button className="modal-close" onClick={closeRoomDetail}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="room-gallery">
                <div className="main-image">
                  <img src={activeRoom.images[0]} alt={activeRoom.name} />
                </div>
                <div className="thumbnail-list">
                  {activeRoom.images.map((image, index) => (
                    <div key={index} className="thumbnail">
                      <img
                        src={image}
                        alt={`${activeRoom.name} ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="room-details">
                <div className="detail-section">
                  <h4>Room Details</h4>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <strong>Price:</strong>
                      <span>
                        {activeRoom.price} {activeRoom.period}
                      </span>
                    </div>
                    <div className="detail-item">
                      <strong>Guests:</strong>
                      <span>
                        {activeRoom.guests}{" "}
                        {activeRoom.guests > 1 ? "Guests" : "Guest"}
                      </span>
                    </div>
                    <div className="detail-item">
                      <strong>Bed Type:</strong>
                      <span>{activeRoom.bedType}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Size:</strong>
                      <span>{activeRoom.size}</span>
                    </div>
                    {activeRoom.view && (
                      <div className="detail-item">
                        <strong>View:</strong>
                        <span>{activeRoom.view}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="detail-section">
                  <h4>Amenities</h4>
                  <div className="amenities-grid">
                    {activeRoom.amenities.map((amenity, index) => (
                      <div key={index} className="amenity-item">
                        <i className="bi bi-check-circle"></i>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {activeRoom.description && (
                  <div className="detail-section">
                    <h4>Description</h4>
                    <p>{activeRoom.description}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeRoomDetail}>
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleBookNow(activeRoom.name)}
              >
                <i className="bi bi-calendar-check me-2"></i>
                Book This Room
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
