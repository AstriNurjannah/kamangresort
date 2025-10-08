import React, { useState } from "react";
import "../Facilities.css";

const Facilities = () => {
  const [activeRoom, setActiveRoom] = useState(null);

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
      images: ["/Kamang-Resort/cottage-deluxe-201-1.jpg", "/room-deluxe-201-2.jpg"],
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
      images: ["/Kamang-Resort/cottage-tarusan-1.jpg", "/room-deluxe-202-2.jpg"],
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
      images: ["/Kamang-Resort/cottage-lengkok-1.jpg", "/cottage-lengkok-2.jpg"],
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
      images: ["/Kamang-Resort/cottage-tarusan-1.jpg", "/cottage-tarusan-2.jpg"],
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
      {/* Hero Section */}
      <div className="accommodations-hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Our Accommodations</h1>
            <p className="hero-subtitle">
              Experience comfort and luxury in every stay
            </p>
          </div>
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
                    {/* <button 
                      className="btn btn-view-details-outline"
                      onClick={() => openRoomDetail(room)}
                    >
                      <i className="bi bi-info-circle me-2"></i>
                      View Details
                    </button> */}
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
          <div className="modal-backdrop" onClick={closeRoomDetail}></div>
          <div className="modal-content">
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
