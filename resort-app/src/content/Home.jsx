import Hero from "../components/Hero";
// import Modal from "../components/Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Tambahkan ini
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const images = [
    "DaftarMenu1.jpg",
    "DaftarMenu2.jpg",
    "DaftarMenu3.jpg",
    "DaftarMenu4.jpg",
    "DaftarMenu5.jpg",
    "DaftarMenu6.jpg",
    "DaftarMenu7.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // bersihkan interval saat unmount
  }, []);

  const testimonials = [
    {
      name: "Rizky Saputra",
      role: "Traveler dari Jakarta",
      text: "Suasananya sangat tenang dan alami, cocok banget buat healing dari hiruk-pikuk kota. Pelayanan staff-nya juga ramah dan cepat!",
      image: "man.png",
    },
    {
      name: "Siti Rahmawati",
      role: "Keluarga Wisatawan",
      text: "Resort yang bersih dan pemandangan pegunungannya indah sekali. Anak-anak sangat menikmati kolam renangnya!",
      image: "woman.png",
    },
    {
      name: "Andi Pratama",
      role: "Pekerja Remote",
      text: "Tempat yang ideal untuk bekerja sambil berlibur. Internet stabil, makanan enak, dan suasananya mendukung produktivitas.",
      image: "man.png",
    },
  ];

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

  const faqs = [
    {
      question: "Apa itu Resort Kamang?",
      answer:
        "Resort Kamang adalah tempat penginapan bernuansa alam yang cocok untuk liburan, gathering, dan acara keluarga.",
    },
    {
      question: "Apakah tersedia paket rombongan?",
      answer:
        "Ya, tersedia paket khusus untuk rombongan dengan harga lebih hemat dan fasilitas tambahan.",
    },
    {
      question: "Bagaimana cara reservasi?",
      answer:
        "Reservasi bisa dilakukan langsung melalui website atau hubungi kontak resmi kami di WhatsApp.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const [show, setShow] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  // Data wisata terdekat
  const wisataTerdekat = [
    {
      id: 1,
      nama: "RAFTING",
      kategori: "Wisata Petualangan",
      lokasi: "Kamang Magek, Agam",
      jarak: "2.5 km",
      // video: "/Kamang-Resort/rafting.MP4",
      gambar: "/Kamang-Resort/rafting.JPG", // thumbnail fallback
    },
    {
      id: 2,
      nama: "PULAU SOETAN",
      kategori: "Wisata Alam & Pulau",
      lokasi: "Danau Maninjau, Agam",
      jarak: "15 km",
      // video: "/Kamang-Resort/pulau-soetan.MP4",
      gambar: "/Kamang-Resort/pulau-soetan.png", // thumbnail fallback
    },
    {
      id: 3,
      nama: "JUMPING PULAU SIRONJONG",
      kategori: "Wisata Air & Petualangan",
      lokasi: "Pulau Sironjong, Agam",
      jarak: "18 km",
      video: "/Kamang-Resort/jumping-sironjong.MP4",
      gambar: "/Kamang-Resort/jumping.png",
    },
    {
      id: 4,
      nama: "JAM GADANG",
      kategori: "Wisata Ikonik & Sejarah",
      lokasi: "Bukittinggi",
      jarak: "25 km",
      // video: "/Kamang-Resort/jam-gadang.MP4",
      gambar: "/Kamang-Resort/Jam-gadang.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section position-relative d-flex flex-column justify-content-center align-items-start text-start"
        style={{
          paddingTop: "90px",
          height: "80vh",
          minHeight: "850px",
          maxHeight: "900px",
          overflow: "hidden",
          paddingLeft: "120px", // beri jarak dari sisi kiri biar pas
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: "-1", height: "300px" }}
        >
          <source src="/Kamang-Resort/kamangresort2.mp4" type="video/mp4" />
        </video>

        {/* Overlay Gelap Halus */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0, 0, 0, 0)",
            zIndex: "0",
          }}
        ></div>

        {/* Konten Tulisan */}
        <div
          style={{
            zIndex: "1",
            maxWidth: "700px",
          }}
        >
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#ffffffff",
              textShadow: "2px 2px 1px rgba(247, 94, 5, 1)",
            }}
          >
            Welcome To <br />
            Kamang Resort
          </h1>

          <p
            className="lead mb-4"
            style={{
              color: "#ffffffcc",
              textShadow: "1px 1px 10px rgba(0,0,0,0.5)",
            }}
          >
            Temukan ketenangan, kenyamanan, dan keindahan alam yang berpadu
            sempurna. Pengalaman menginap tak terlupakan menanti Anda di Kamang
            Resort.
          </p>
          <Link
            to="/facilities"
            className="btn btn-lg"
            style={{
              backgroundColor: "#F75E05", // oranye awal
              color: "#fff", // teks putih
              padding: "12px 30px",
              borderRadius: "50px",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#F75E05";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#F75E05";
              e.target.style.color = "#fff";
            }}
          >
            Lihat Kamar
          </Link>
        </div>
      </section>

      {/* Intro Text */}
      <section>
        {/* Running Text - Alternative */}
        <div
          style={{
            backgroundColor: "#fff8edff",
            padding: "16px 0",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            overflow: "hidden",
          }}
        >
          <div
            className="run-text"
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
      <section className="py-1" style={{ backgroundColor: "#ffffff" }}>
        <div className="run-text container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            {/* Kiri: Teks */}
            <div className="col-md-6 mt-4 mt-md-0">
              {/* <h3 className="fw-bold mb-4" style={{ color: "#315B51" }}>
                About Us
              </h3> */}

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
                  <p className="tes mb-0" style={{ color: "#333" }}>
                    Rasakan kesejukan udara pegunungan dan nikmati keindahan
                    alam hijau yang menenangkan, dengan keindahan.
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
            <div className=" col-md-6 col-lg-6 text-center mb-2 mt-5 mb-md-0">
              <div
                className="position-relative overflow-hidden rounded-3 shadow-sm d-inline-block"
                style={{ maxWidth: "550px", cursor: "pointer" }}
              >
                <img
                  src="/Kamang-Resort/resort3.png"
                  alt="Kemang Resort"
                  className="img-fluid transition-all"
                  style={{
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

      <hr
        style={{
          border: "none",
          height: "3px",
          backgroundColor: "#315B51",
          width: "80%",
          margin: "40px auto",
        }}
      />

      {/*destinasi terdekat */}
      <div className="container my-5">
        <h3
          className="text-center my-5 "
          style={{ color: "#315B51", fontWeight: "bold" }}
        >
          Wisata Terdekat
        </h3>

        <p
          className="justify  text-muted mb-5"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        >
          Kamang Resort dikelilingi oleh berbagai destinasi wisata menarik yang
          mudah dijangkau. Para tamu dapat menikmati keindahan alam, kegiatan
          petualangan, hingga wisata budaya khas Minangkabau. Dari wisata alam
          yang menenangkan hingga aktivitas seru di luar ruangan, setiap tempat
          menghadirkan pengalaman berbeda yang menambah kesan liburan Anda
          semakin berkesan.
        </p>
        {/* Scroll Container */}
        <div
          className="d-flex flex-row overflow-auto px-2 scroll-container"
          style={{
            gap: "16px",
            scrollBehavior: "smooth",
            paddingBottom: "10px",
          }}
        >
          {wisataTerdekat.map((item) => (
            <div
              key={item.id}
              style={{
                minWidth: "320px",
                flex: "0 0 auto",
              }}
            >
              <div
                className="card shadow-sm border-0"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                }}
              >
                <div
                  className="position-relative"
                  style={{
                    height: "350px",
                    overflow: "hidden",
                  }}
                >
                  {/* Gambar/Video */}
                  {item.video ? (
                    <video
                      src={item.video}
                      poster={item.gambar}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      muted
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    />
                  ) : (
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  )}

                  {/* Overlay Lokasi */}
                  <div
                    className="position-absolute bottom-0 start-0 w-100 text-white p-3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    }}
                  >
                    <h5 className="fw-bold mb-1">{item.nama}</h5>
                    <p className="mb-0 small">{item.lokasi}</p>
                  </div>
                </div>

                {/* Keterangan */}
                <div className="p-3 text-center">
                  <p className="text-muted mb-1">{item.kategori}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="row mb-5">
        {/* Judul Gallery */}
        <div className="col-12">
          <h3
            className="my-4 text-center fancy-heading"
            style={{ color: "#315B51" }}
          >
            <b>Gallery</b>
          </h3>

          {/* Narasi Tepat Setelah Heading */}
          <p
            className="justify  text-muted mb-5"
            style={{ maxWidth: "100%", margin: "0 auto" }}
          >
            Nikmati keindahan alam dan suasana tenang di sekitar Kamang Resort.
            Setiap sudut menghadirkan pengalaman visual yang menenangkan dan
            cocok untuk melepas penat dari aktivitas harian.
          </p>
        </div>

        {/* Semua Gambar Gallery */}
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

        {/* Tombol Lihat Selengkapnya */}
        {/* <div className="col-12 text-center mb-3">
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
  </div> */}
      </div>

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
      {/* End */}

      {/* Poster */}
      {/* Poster Section */}
      <section
        className="py-5"
        // style={{
        //   background: "linear-gradient(180deg, #f8fcff 0%, #e9f6f1 100%)",
        // }}
      >
        <div className="container">
          <h3
            className="fw-bold text-center mb-5"
            style={{ color: "#2f5d50", letterSpacing: "0.5px" }}
          >
            Kamang Resort Menyediakan
          </h3>

          {/* Poster 1 - Gambar kiri, teks kanan */}
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="POSTER_RESORT.png"
                alt="Poster Jurnal Dosen"
                className="img rounded-4 shadow-sm"
                style={{
                  maxWidth: "80%",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() => setShowModal(true)}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>

            {/* Modal - Hanya Gambar */}
            {showModal && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  zIndex: 1050,
                  backgroundColor: "rgba(239, 237, 237, 0.59)",
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(false)}
              >
                <img
                  src="POSTER_RESORT.png"
                  alt="Poster Jurnal Dosen - Full Size"
                  className="img-fluid"
                  style={{
                    maxHeight: "90vh",
                    maxWidth: "90vw",
                    objectFit: "contain",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            <div className="col-md-6 text-md-start text-center mt-4 mt-md-0">
              <h4 className="fw-bold mb-3" style={{ color: "#315B51" }}>
                Kenyamanan dan Fasilitas Lengkap di Kamang Resort
              </h4>
              <p
                style={{
                  color: "#333",
                  // lineHeight: "1.7",
                  textAlign: "justify",
                }}
              >
                Resort ini menawarkan villa kayu bergaya modern dengan suasana
                asri yang menenangkan, dilengkapi dengan berbagai fasilitas
                lengkap seperti restoran, kolam renang, akses WiFi, kamar deluxe
                dan family room, serta sarapan pagi untuk dua orang setiap
                kamar. Selain itu, Kamang Resort juga menyediakan berbagai paket
                kegiatan menarik seperti meeting, wedding, outbound, gathering,
                dan café hangout, yang dirancang untuk memberikan kenyamanan dan
                pengalaman berkesan bagi setiap pengunjung.
              </p>
            </div>
          </div>

          {/* Poster 2 - Gambar kanan, teks kiri */}
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center">
              <img
                src="POSTER_RESORT2.png"
                alt="Poster Chatbot AI"
                className="img-fluid rounded-4 shadow-sm"
                style={{
                  maxWidth: "80%",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() => setShowModal(true)}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
            <div className="col-md-6 text-md-start text-center mt-4 mt-md-0">
              <h4 className="fw-bold mb-3" style={{ color: "#315B51" }}>
                Akomodasi & Aktivitas Seru di Tengah Keindahan Alam Bukittinggi
              </h4>
              <p
                style={{
                  color: "#333",
                  textAlign: "justify",
                }}
              >
                Destinasi yang memadukan kemewahan dan keindahan alam
                Bukittinggi. Menawarkan Villa/Cottage mulai Rp 1.500.000 dan
                Deluxe Room mulai Rp 750.000 per malam, resort ini menghadirkan
                kenyamanan modern dengan suasana alami yang tenang. Dilengkapi
                aktivitas menarik seperti nature walk, gathering, dan event,
                Kamang Resort menjadi pilihan sempurna untuk berlibur atau
                mengadakan acara berkesan. Book now dan rasakan pengalaman
                “Where Luxury Meets Nature.”
              </p>
            </div>

            {/* Modal - Hanya Gambar */}
            {showModal && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  zIndex: 1050,
                  backgroundColor: "rgba(239, 237, 237, 0.59)",
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(false)}
              >
                <img
                  src="POSTER_RESORT2.png"
                  alt="Poster Chatbot AI - Full Size"
                  className="img-fluid"
                  style={{
                    maxHeight: "90vh",
                    maxWidth: "90vw",
                    objectFit: "contain",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>

          {/* Poster 3 - Gambar kiri, teks kanan */}
          <div className="row align-items-center mt-5">
            <div className="col-md-6 text-center">
              <img
                src="DaftarMenu1.jpg"
                alt={`Menu ${currentIndex + 1}`}
                className="img-fluid rounded-4 shadow-sm"
                style={{
                  maxWidth: "70%",
                  transition: "opacity 0.5s ease-in-out",
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(true)}
              />
            </div>

            <div className="col-md-6 text-md-start text-center mt-4 mt-md-0">
              <h4 className="fw-bold mb-3" style={{ color: "#315B51" }}>
                Masakan yang beragam
              </h4>
              <p style={{ color: "#333", textAlign: "justify" }}>
                Nikmati pengalaman kuliner lengkap di Kamang Resort dengan
                berbagai pilihan menu lezat yang memadukan cita rasa lokal dan
                internasional. Mulai dari Maincourse Nusantara seperti Iga Bakar
                Madu dan Dendeng Bakar Cabe Ijo, hingga hidangan Continental
                seperti Chicken Steak dan Dori Fish Finger. Untuk penggemar
                makanan ringan, tersedia berbagai snack dan dessert seperti
                Pisang Goreng Keju, French Fries, dan Ice Cream aneka rasa.
                Lengkapi santapan Anda dengan minuman hangat seperti Kopi Basaka
                dan Teh Talua khas Minang, atau segarkan hari dengan cold drinks
                seperti Milkshake, Juice, dan Mojito. Bagi penyuka pasta dan
                pizza, pilihan seperti Spaghetti Bolognese, Kwetiau Goreng,
                hingga Pizza Large siap memanjakan selera.
              </p>
            </div>

            {/* Modal - Hanya Gambar */}
            {showModal && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  zIndex: 1050,
                  backgroundColor: "rgba(239, 237, 237, 0.59)",
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(false)}
              >
                <img
                  src="DaftarMenu1.jpg"
                  alt={`Menu ${currentIndex + 1} - Full Size`}
                  className="img-fluid"
                  style={{
                    maxHeight: "90vh",
                    maxWidth: "90vw",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
          {/* Tombol ke Halaman Fitur */}
          <div className="btn-poster col-md-12 text-center mt-5 d-flex justify-content-center gap-3 flex-wrap">
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
              Lihat Fasilitas
            </Link>
            <Link
              to="/Restaurant"
              className="btn btn-success px-5 py-2 rounded-pill shadow-sm"
              style={{
                backgroundColor: "#2f5d50",
                border: "none",
                transition: "background-color 0.3s ease, transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#3e7c69")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2f5d50")}
            >
              Lihat Restaurant
            </Link>
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
                      src="/Kamang-Resort/KamangResort.mp4"
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

      {/* Another Highlight */}
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

      {/* Testimoni */}
      <section className="py-5 bg-light" id="testimoni">
        <div className="container">
          <h3 className="text-center mb-5 fw-bold" style={{ color: "#315B51" }}>
            Apa Kata Pengunjung Kami
          </h3>
          <div className="row justify-content-center">
            {testimonials.map((testi, index) => (
              <div className="col-sm-7 col-lg-4 col-md-4 mb-4" key={index}>
                <div className="card testimonial-card border-0 shadow-lg text-center p-4">
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="fw-bold">{testi.name}</h5>
                  <p className="text-muted mb-2">{testi.role}</p>
                  <p className="fst-italic">“{testi.text}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End */}

      {/* FAQ */}
      <section
        className="py-5 mt-5 mb-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <h4 className="mb-5 text-center fw-bold" style={{ color: "#315B51" }}>
            Pertanyaan yang Sering Diajukan
          </h4>

          <div className="accordion shadow-sm rounded">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item border-0 mb-2">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button faq-btn ${
                      activeIndex === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    style={{
                      border: "1px solid #315B51",
                    }}
                  >
                    {faq.question}
                  </button>
                </h2>

                <div
                  className={`accordion-content ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <div
                    className="accordion-body"
                    style={{
                      backgroundColor: "#EAF4F1",
                      color: "#315B51",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
