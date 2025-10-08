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
  return (
    <>
      {/* Hero Section */}
     <section
  className="hero-section d-flex align-items-center justify-content-center text-center"
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ objectFit: "cover", zIndex: "-1" }}
  >
    <source src="/Kamang-Resort/KemangResort.mp4" type="video/mp4" />
  </video>

  <div
    className="position-absolute top-0 start-0 w-100 h-100"
  ></div>
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
            backgroundColor: "#D7BE93",
            zIndex: 1,
          }}
        ></div>

        {/* Carousel text */}
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="6000"
          style={{ zIndex: 2 }}
        >
          <div
            className="carousel-inner text-center mb-3"
            style={{
              color: "#355B4F",
              fontStyle: "italic",
              fontSize: "1.2rem",
            }}
          >
            <div className="carousel-item active">
              <h5 className="d-block w-100 mb-0">
                “Tempat ideal untuk acara keluarga, gathering, hingga konvensi —
                semua dalam harmoni alam yang memikat.”
              </h5>
            </div>
            <div className="carousel-item">
              <h5 className="d-block w-100 mb-0">
                “Nikmati suasana damai di setiap sudut, dengan pelayanan yang
                ramah dan fasilitas berkelas.”
              </h5>
            </div>
            <div className="carousel-item">
              <h5 className="d-block w-100 mb-0">
                “Rasakan ketenangan di Kamang Resort & Convention, tempat di
                mana kenyamanan modern berpadu dengan keindahan alam. Pilihan
                sempurna untuk liburan yang menenangkan.”
              </h5>
            </div>
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
              Rasakan kesejukan udara pegunungan dan nikmati keindahan alam hijau yang menenangkan.
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
              Dilengkapi Wi-Fi cepat, double bed nyaman, ruang karaoke, dan kolam renang yang menenangkan.
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
              Nikmati kelezatan kuliner autentik khas Sumatera Barat yang kaya akan cita rasa dan tradisi.
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
              Nikmati akses mudah menuju berbagai destinasi wisata dari panorama alam hingga tempat bersejarah yang menarik.
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
          <Button variant="primary" onClick={() => setShow(true)} >
            Check Sekarang
          </Button>

        <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="md"
      
      >
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
                <label className="form-label fw-semibold" style={{ color: "#355B4F" }}>
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
                <label className="form-label fw-semibold" style={{ color: "#355B4F" }}>
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
                <label className="form-label fw-semibold" style={{ color: "#355B4F" }}>
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
                <label className="form-label fw-semibold" style={{ color: "#355B4F" }}>
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
              <button type="button" class="btn btn-success" style={{backgroundColor: "#315B51"}}>Submit</button>
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
        >
   
        </Modal.Footer>
      </Modal>
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
              <div
                className="card border-0 shadow-sm p-4 rounded-4 testimonial-card"
              >
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
              <div
                className="card border-0 shadow-sm p-4 rounded-4 testimonial-card"
              >
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
                  “Pelayanan yang sangat ramah dan pemandangan luar biasa.”
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div
                className="card border-0 shadow-sm p-4 http://localhost:5173/Kamang-Resort/Galleryrounded-4 testimonial-card"
              >
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
              <div
                className="card border-0 shadow-sm p-4 rounded-4 testimonial-card"
              >
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
              <div
                className="card border-0 shadow-sm p-4 rounded-4 testimonial-card"
              >
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
              <div
                className="card border-0 shadow-sm p-4 rounded-4 testimonial-card"
              >
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
                    <source src="/Kamang-Resort/KemangResort.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
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
      <section className="py-2 mt-5 mb-5" style={{ backgroundColor: "#ffffff" }}>
  <div className="container">
    <h4
      className="mb-5 text-center fw-bold"
      style={{ color: "#315B51" }}
    >
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
            Resort Kamang adalah tempat penginapan bernuansa alam yang cocok
            untuk liburan, gathering, dan acara keluarga.
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
            Ya, tersedia paket khusus untuk rombongan dengan harga lebih hemat
            dan fasilitas tambahan.
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
