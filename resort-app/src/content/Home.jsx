import Hero from "../components/Hero";
// import Modal from "../components/Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
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

    // Facilities
    {
      id: 4,
      category: "facilities",
      image: "/Kamang-Resort/resort-kolam.jpg",
      title: "Swimming Pool",
      description: "Infinity pool with panoramic views",
    },

    // Rooms
    {
      id: 7,
      category: "rooms",
      image: "/Kamang-Resort/resort-bed2.jpg",
      title: "Deluxe Room",
      description: "Spacious room with mountain view",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const [show, setShow] = useState(false);

  // Data wisata terdekat
  const wisataTerdekat = [
    {
      id: 1,
      nama: "RAFTING",
      kategori: "Wisata Petualangan",
      lokasi: "Kamang Magek, Agam",
      jarak: "2.5 km",
      // video: "/Kamang-Resort/rafting-video.mp4",
      gambar: "/Kamang-Resort/rafting.jpg", // thumbnail fallback
    },
    {
      id: 2,
      nama: "PULAU SOETAN",
      kategori: "Wisata Alam & Pulau",
      lokasi: "Danau Maninjau, Agam",
      jarak: "15 km",
      video: "/Kamang-Resort/pulau-soetan.MP4",
      gambar: "/Kamang-Resort/pulau-soetan-thumbnail.jpg", // thumbnail fallback
    },
    {
      id: 3,
      nama: "JUMPING PULAU SIRONJONG",
      kategori: "Wisata Air & Petualangan",
      lokasi: "Pulau Sironjong, Agam",
      jarak: "18 km",
      video: "/Kamang-Resort/jumping-sironjong.MP4",
      gambar: "/Kamang-Resort/jumping-sironjong-thumbnail.jpg",
    },
    {
      id: 4,
      nama: "JAM GADANG",
      kategori: "Wisata Ikonik & Sejarah",
      lokasi: "Bukittinggi",
      jarak: "25 km",
      video: "/Kamang-Resort/jam-gadang.MP4",
      gambar: "/Kamang-Resort/jam-gadang-thumbnail.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-center"
        style={{
          paddingTop: "90px",
          height: "80vh",
          minHeight: "700px",
          maxHeight: "800px",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: "-1", paddingTop: "100px" }}
        >
          <source src="/Kamang-Resort/KemangResort.mp4" type="video/mp4" />
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100"></div>
      </section>

      {/* Intro Text */}
      <section
        style={{
          marginTop: "0px",
          marginBottom: "0px",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "70px",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Overlay background warna highlight */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        ></div>

        {/* Running Text - Alternative */}
        <div
          style={{
            backgroundColor: "#fff8edff",
            padding: "15px 0",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              animation: "marquee 30s linear infinite",
              width: "max-content", // Tambahkan ini
            }}
          >
            {[
              "“Tempat ideal untuk acara keluarga, gathering, hingga konvensi — semua dalam harmoni alam yang memikat.”",
              "“Nikmati suasana damai di setiap sudut, dengan pelayanan yang ramah dan fasilitas berkelas.”",
              "“Rasakan ketenangan di Kamang Resort & Convention, tempat di mana kenyamanan modern berpadu dengan keindahan alam.”",
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  color: " #ab6a44ff",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  fontStyle: "italic",
                  whiteSpace: "nowrap",
                  padding: "0 50px",
                  flexShrink: 0,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Services */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            {/* Kiri: Teks */}
            <div className="col-md-7 mt-4 mt-md-0">
              <h3 className="fw-bold mb-4" style={{ color: "#315B51" }}>
                About Us
              </h3>

              {/* Poin 1 */}
              <div className="d-flex align-items-start mt-4">
                <i
                  className="bi bi-tree-fill fs-3 me-3"
                  style={{ color: "#315B51" }}
                ></i>
                <div>
                  <h6 className="fw-bold" style={{ color: "#315B51" }}>
                    Lingkungan Alam
                  </h6>
                  <p className="mb-0" style={{ color: "#333" }}>
                    Rasakan kesejukan udara pegunungan dan nikmati keindahan
                    alam hijau yang menenangkan.
                  </p>
                </div>
              </div>

              {/* Poin 2 */}
              <div className="d-flex align-items-start mt-4">
                <i
                  className="bi bi-house-heart-fill fs-3 me-3"
                  style={{ color: "#315B51" }}
                ></i>
                <div>
                  <h6 className="fw-bold" style={{ color: "#315B51" }}>
                    Fasilitas Modern
                  </h6>
                  <p className="mb-0" style={{ color: "#333" }}>
                    Dilengkapi Wi-Fi cepat, double bed nyaman, ruang karaoke,
                    dan kolam renang yang menenangkan.
                  </p>
                </div>
              </div>

              {/* Poin 3 */}
              <div className="d-flex align-items-start mt-4">
                <i
                  className="bi bi-egg-fried fs-3 me-3"
                  style={{ color: "#315B51" }}
                ></i>
                <div>
                  <h6 className="fw-bold" style={{ color: "#315B51" }}>
                    Masakan Lokal
                  </h6>
                  <p className="mb-0" style={{ color: "#333" }}>
                    Nikmati kelezatan kuliner autentik khas Sumatera Barat yang
                    kaya akan cita rasa dan tradisi.
                  </p>
                </div>
              </div>

              {/* Poin 4 */}
              <div className="d-flex align-items-start mt-4">
                <i
                  className="bi bi-geo-alt-fill fs-3 me-3"
                  style={{ color: "#315B51" }}
                ></i>
                <div>
                  <h6 className="fw-bold" style={{ color: "#315B51" }}>
                    Lokasi Strategis
                  </h6>
                  <p className="mb-0" style={{ color: "#333" }}>
                    Nikmati akses mudah menuju berbagai destinasi wisata dari
                    panorama alam hingga tempat bersejarah yang menarik.
                  </p>
                </div>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <div
                className="position-relative overflow-hidden rounded-3 shadow-sm d-inline-block"
                style={{ maxWidth: "550px", cursor: "pointer" }}
              >
                <img
                  src="/Kamang-Resort/resort3.png"
                  alt="Kemang Resort"
                  className="img-fluid transition-all"
                  style={{
                    width: "100%",
                    height: "auto",
                    transition: "transform 0.5s ease, filter 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.filter = "brightness(85%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(100%)";
                  }}
                  onClick={() => alert("Menuju halaman detail resort...")}
                />
              </div>

              {/* Tombol Baca Selengkapnya */}
              <div className="mt-3">
                <Link
                  to="/About"
                  className="btn px-4 py-2"
                  style={{
                    backgroundColor: "#315B51",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    letterSpacing: "0.5px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#27433c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#315B51")
                  }
                >
                  Baca Selengkapnya...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url('/Kamang-Resort/Resort1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "250px",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {/* Overlay transparan */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(49, 91, 81, 0.65)", // #315B51 transparan
            zIndex: 1,
          }}
        ></div>

        {/* Konten di atas overlay */}
        <div style={{ zIndex: 2, textAlign: "center" }}>
          <h2 style={{ color: "#D7BE93" }}>Ingin Membuat Reservasi</h2>
          <Button variant="primary" onClick={() => setShow(true)}>
            Check Sekarang
          </Button>

          <Modal show={show} onHide={() => setShow(false)} centered size="md">
            <Modal.Header
              closeButton
              style={{
                backgroundColor: "#F8F6F1",
                borderBottom: "none",
              }}
            >
              <Modal.Title
                className="w-100 text-center fw-bold"
                style={{ color: "#315B51" }}
              >
                Reservation
              </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ backgroundColor: "#F8F6F1" }}>
              <form>
                <fieldset>
                  {/* Check-in */}
                  <div className="mb-3">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#355B4F" }}
                    >
                      Check-in <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control border-0 shadow-sm py-2"
                      placeholder="Check-in Date"
                    />
                  </div>

                  {/* Check-out */}
                  <div className="mb-3">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#355B4F" }}
                    >
                      Check-out <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control border-0 shadow-sm py-2"
                      placeholder="Check-out Date"
                    />
                  </div>

                  {/* Adults */}
                  <div className="mb-3">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#355B4F" }}
                    >
                      Adults
                    </label>
                    <select className="form-select border-0 shadow-sm py-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  {/* Children */}
                  <div className="mb-3">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#355B4F" }}
                    >
                      Children
                    </label>
                    <select className="form-select border-0 shadow-sm py-2">
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <option key={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      class="btn btn-success"
                      style={{ backgroundColor: "#315B51" }}
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>
            </Modal.Body>

            <Modal.Footer
              style={{
                backgroundColor: "#F8F6F1",
                borderTop: "none",
                justifyContent: "center",
              }}
            ></Modal.Footer>
          </Modal>
        </div>
      </section>

      {/*destinasi terdekat */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold" style={{ color: "#315B51" }}>
              Wisata Terdekat
            </h3>
            <p className="text-muted">Dari Kamang Resort</p>
          </div>

          <div className="row g-4">
            {wisataTerdekat.map((wisata) => (
              <div key={wisata.id} className="col-md-6 col-lg-3">
                <div
                  className="card border-0"
                  style={{
                    borderRadius: "10px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                  }}
                >
                  {/* Container video dengan aspect ratio 16:9 */}
                  <div
                    className="video-container"
                    style={{
                      width: "100%",
                      height: "0",
                      paddingBottom:
                        "56.25%" /* 16:9 aspect ratio (9/16 = 0.5625) */,
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    {wisata.video ? (
                      <video
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        muted
                        loop
                        playsInline
                        autoPlay
                      >
                        <source src={wisata.video} type="video/mp4" />
                        Browser Anda tidak mendukung video.
                      </video>
                    ) : (
                      <img
                        src={wisata.gambar}
                        alt={wisata.nama}
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>

                  <div
                    className="card-body d-flex flex-column"
                    style={{ minHeight: "150px" }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{ color: "#315B51", fontSize: "1.1rem" }}
                    >
                      {wisata.nama}
                    </h5>

                    <div className="d-flex align-items-center mb-2">
                      <i
                        className="bi bi-geo me-2"
                        style={{ color: "#315B51" }}
                      ></i>
                      <span
                        className="fw-semibold"
                        style={{ color: "#315B51", fontSize: "0.9rem" }}
                      >
                        {wisata.jarak} dari Kamang Resort
                      </span>
                    </div>

                    <p
                      className="text-muted mb-2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {wisata.kategori}
                    </p>

                    <div
                      className="d-flex align-items-center text-muted mt-auto"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <i className="bi bi-geo-alt me-1"></i>
                      {wisata.lokasi}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="row">
        <h3 className="my-5" style={{ textAlign: "center", color: "#315B51" }}>
          <b>Gallery</b>
        </h3>
        {filteredItems.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={item.image} alt={item.title} className="img-fluid" />
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

        <div className="mt-1">
          <Link
            to="/Gallery"
            className="btn px-4 py-2"
            style={{
              backgroundColor: "#315B51",
              color: "white",
              border: "none",
              borderRadius: "8px",
              letterSpacing: "0.5px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#27433c")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#315B51")
            }
          >
            Lihat selengkapnya...
          </Link>
        </div>
      </div>

      <section
        className="py-5 text-center"
        style={{
          background: "linear-gradient(180deg, #f8fcff 0%, #e9f6f1 100%)", // gradasi lembut biru-hijau muda
        }}
      >
        <div className="container">
          <h3
            className="fw-bold mb-4"
            style={{ color: "#2f5d50", letterSpacing: "0.5px" }}
          >
            Fasilitas
          </h3>

          <div className="row g-4 justify-content-center">
            {/* Poster 1 */}
            <div className="col-md-5">
              <div
                className="card border-0 shadow-sm rounded-4"
                style={{
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="overflow-hidden position-relative rounded-top-4">
                  <img
                    src="/Kamang-Resort/POSTER_RESORT.png"
                    className="card-img-top img-hover1"
                    alt="Poster Resort 1"
                    data-bs-toggle="modal"
                    data-bs-target="#posterModal1"
                  />
                </div>
              </div>
            </div>

            {/* Poster 2 */}
            <div className="col-md-5">
              <div
                className="card border-0 shadow-sm rounded-4"
                style={{
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="overflow-hidden position-relative rounded-top-4">
                  <img
                    src="/Kamang-Resort/POSTER_RESORT2.png"
                    className="card-img-top img-hover1"
                    alt="Poster Resort 2"
                    data-bs-toggle="modal"
                    data-bs-target="#posterModal2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tombol ke Fasilitas */}
          <div className="mt-5">
            <Link
              to="/Facilities"
              className="btn btn-success px-5 py-2 rounded-pill shadow-sm"
              style={{
                backgroundColor: "#2f5d50",
                border: "none",
                transition: "background-color 0.3s ease, transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#3e7c69")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2f5d50")}
            >
              Kunjungi Fasilitas
            </Link>
          </div>
        </div>

        {/* Modal Poster 1 */}
        <div
          className="modal fade"
          id="posterModal1"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 bg-transparent">
              <div className="modal-body p-0">
                <img
                  src="/Kamang-Resort/POSTER_RESORT.PNG"
                  className="w-100 rounded-3 shadow-lg"
                  alt="Poster Resort 1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Poster 2 */}
        <div
          className="modal fade"
          id="posterModal2"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 bg-transparent">
              <div className="modal-body p-0">
                <img
                  src="/Kamang-Resort/POSTER_RESORT2.PNG"
                  className="w-100 rounded-3 shadow-lg"
                  alt="Poster Resort 2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Ai */}
      <section>
        <div className="row">
          <div className="col-12">
            <div className="video-section">
              <h3
                className="text-center mb-5 fw-bold"
                style={{ color: "#315B50" }}
              >
                Your Journey to Kamang Resort
              </h3>
              <div className="video-container mb-5">
                <div className="ratio ratio-16x9">
                  <video
                    controls
                    className="w-100 h-100"
                    style={{ objectFit: "cover", borderRadius: "15px" }}
                  >
                    <source
                      src="/Kamang-Resort/KemangResort.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-5 mt-4" style={{ backgroundColor: "#F8FCFF" }}>
        <div className="container text-center">
          <h3 className="mb-5 fw-bold" style={{ color: "#315B51" }}>
            What Our Guests Say
          </h3>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* === SLIDE 1 === */}
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  {/* Card 1 */}
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm p-4 rounded-4 testimonial-card">
                      <img
                        src="/Kamang-Resort/woman.png"
                        alt="Missy Limana"
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="fw-bold mb-1">Missy Limana</h5>
                      <p className="text-muted mb-2">Designer</p>
                      <p className="fst-italic text-secondary">
                        “Tempat yang indah dan nyaman. Sangat direkomendasikan
                        untuk liburan keluarga!”
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm p-4 rounded-4 testimonial-card">
                      <img
                        src="/Kamang-Resort/woman.png"
                        alt="Martha Brown"
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="fw-bold mb-1">Martha Brown</h5>
                      <p className="text-muted mb-2">Project Manager</p>
                      <p className="fst-italic text-secondary">
                        “Pelayanan yang sangat ramah dan pemandangan luar
                        biasa.”
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm p-4 http://localhost:5173/Kamang-Resort/Galleryrounded-4 testimonial-card">
                      <img
                        src="/Kamang-Resort/man.png"
                        alt="James Collins"
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="fw-bold mb-1">Hanna Lisen</h5>
                      <p className="text-muted mb-2">Product Manager</p>
                      <p className="fst-italic text-secondary">
                        “Fasilitas lengkap dan nyaman. Cocok untuk staycation
                        maupun meeting kantor.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* === SLIDE 2 === */}
              <div className="carousel-item">
                <div className="row justify-content-center">
                  {/* Card 4 */}
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm p-4 rounded-4 testimonial-card">
                      <img
                        src="/Kamang-Resort/woman.png"
                        alt="Hanna Lisen"
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="fw-bold mb-1">James Collins</h5>
                      <p className="text-muted mb-2">Engineer</p>
                      <p className="fst-italic text-secondary">
                        “Sangat tenang dan damai. Saya pasti akan kembali lagi
                        ke sini.”
                      </p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm p-4 rounded-4 testimonial-card">
                      <img
                        src="/Kamang-Resort/man.png"
                        alt="Ethan Reed"
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="fw-bold mb-1">Ethan Reed</h5>
                      <p className="text-muted mb-2">Traveler</p>
                      <p className="fst-italic text-secondary">
                        “Kebersihan dan kenyamanan resort ini luar biasa. Sangat
                        memuaskan!”
                      </p>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm p-4 rounded-4 testimonial-card">
                      <img
                        src="/Kamang-Resort/man.png"
                        alt="Noah Smith"
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="fw-bold mb-1">Noah Smith</h5>
                      <p className="text-muted mb-2">Business Owner</p>
                      <p className="fst-italic text-secondary">
                        “Tempat ini benar-benar memberikan pengalaman menginap
                        yang luar biasa.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BULATAN PREV/NEXT DI BAWAH */}
            <div className="d-flex justify-content-center mt-2 gap-3">
              <button
                className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
                style={{
                  width: "40px",
                  height: "40px",
                  borderWidth: "2px",
                }}
              >
                <i className="bi bi-chevron-left"></i>
              </button>

              <button
                className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
                style={{
                  width: "40px",
                  height: "40px",
                  borderWidth: "2px",
                }}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Another Highlight */}
      {/* Highlight Section */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url('/Kamang-Resort/Resort2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "300px",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Overlay transparan */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(49, 91, 81, 0.65)", // warna overlay
            zIndex: 1,
          }}
        ></div>

        {/* Konten di atas overlay */}
        <div style={{ zIndex: 2 }}>
          <h5 style={{ color: "#FFFFFF", marginBottom: "1.5rem" }}>
            Rayakan berbagai macam momen spesial anda di resort kami
          </h5>

          {/* Tombol Highlight Acara */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {[
              "Wedding Party",
              "Family Gathering",
              "Corporate Event",
              "Romantic Dinner",
              "Birthday Celebration",
              "Retreat & Outbound",
            ].map((event) => (
              <button
                key={event}
                style={{
                  backgroundColor: "#D7BE93",
                  color: "#315B51",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#315B51";
                  e.target.style.color = "#D7BE93";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#D7BE93";
                  e.target.style.color = "#315B51";
                }}
              >
                {event}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-2 mt-5 mb-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <h4 className="mb-5 text-center fw-bold" style={{ color: "#315B51" }}>
            Frequently Asked Questions
          </h4>

          <div className="accordion shadow-sm rounded" id="faqAccordion">
            {/* FAQ 1 */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  style={{
                    backgroundColor: "#fff",
                    color: "#315B51",
                    border: "1px solid #315B51",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  Apa itu Resort Kamang?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "#EAF4F1",
                    color: "#315B51",
                  }}
                >
                  Resort Kamang adalah tempat penginapan bernuansa alam yang
                  cocok untuk liburan, gathering, dan acara keluarga.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{
                    backgroundColor: "#fff",
                    color: "#315B51",
                    border: "1px solid #315B51",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  Apakah tersedia paket rombongan?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "#EAF4F1",
                    color: "#315B51",
                  }}
                >
                  Ya, tersedia paket khusus untuk rombongan dengan harga lebih
                  hemat dan fasilitas tambahan.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{
                    backgroundColor: "#fff",
                    color: "#315B51",
                    border: "1px solid #315B51",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  Bagaimana cara reservasi?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "#EAF4F1",
                    color: "#315B51",
                  }}
                >
                  Reservasi bisa dilakukan langsung melalui website atau hubungi
                  kontak resmi kami di WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </>
  );
}

export default Home;
