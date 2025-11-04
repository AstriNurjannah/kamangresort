import Hero from "../components/Hero";
// import Modal from "../components/Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Tambahkan ini
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Hitung total tamu
    const totalGuests = Number(adults) + Number(children);

    // Validasi sederhana
    if (!checkin || !checkout) {
      alert("Silakan pilih tanggal check-in dan check-out!");
      return;
    }

    // Redirect ke halaman rekomendasi dengan membawa data input
    navigate("/recomendation", {
      state: { totalGuests, checkin, checkout },
    });

    setShow(false);
  };

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
  // Alam & Pemandangan
  {
    id: 1,
    category: "nature",
    image: "/Kamang-Resort/resort-gunung.jpg",
    title: "Pemandangan Gunung",
    description: "Pemandangan menakjubkan dari area resort",
  },

  // Fasilitas
  {
    id: 4,
    category: "facilities",
    image: "/Kamang-Resort/resort-kolam.jpg",
    title: "Kolam Renang",
    description: "Kolam infinity dengan pemandangan panorama",
  },

  // Kamar
  {
    id: 7,
    category: "rooms",
    image: "/Kamang-Resort/resort-bed2.jpg",
    title: "Kamar Deluxe",
    description: "Kamar luas dengan pemandangan pegunungan",
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
      // lokasi: "Kamang Magek, Agam",
      jarak: "2.5 km",
      // video: "/Kamang-Resort/rafting.MP4",
      gambar: "/Kamang-Resort/rafting.JPG", // thumbnail fallback
    },
    {
      id: 2,
      nama: "PULAU SOETAN",
      kategori: "Wisata Alam & Pulau",
      // lokasi:
      //   "Ampang Pulai, Koto XI Tarusan, Kabupaten Pesisir Selatan, Sumatera Barat",
      jarak: "15 km",
      // video: "/Kamang-Resort/pulau-soetan.MP4",
      gambar: "/Kamang-Resort/pulau-soetan.png", // thumbnail fallback
    },
    {
      id: 3,
      nama: "JUMPING PULAU SIRONJONG",
      kategori: "Wisata Air & Petualangan",
      // lokasi:
      //   "Ampang Pulai, Koto XI Tarusan, Kabupaten Pesisir Selatan, Sumatera Barat",
      jarak: "18 km",
      video: "/Kamang-Resort/jumping-sironjong.MP4",
      gambar: "/Kamang-Resort/jumping.png",
    },
    {
      id: 4,
      nama: "JAM GADANG",
      kategori: "Wisata Ikonik & Sejarah",
      // lokasi:
      //   "Benteng Ps. Atas, Kec. Guguk Panjang, Kota Bukittinggi, Sumatera Barat",
      jarak: "25 km",
      // video: "/Kamang-Resort/jam-gadang.MP4",
      gambar: "/Kamang-Resort/Jam-gadang.png",
    },
{
  id: 5,
  nama: "Istano Basa Pagaruyung",
  kategori: "Wisata Sejarah & Budaya",
  jarak: "25 km",
  gambar: "/Kamang-Resort/istanaPaguruyung.webp",
},
{
  id: 6,
  nama: "Ngarai Sianok",
  kategori: "Wisata Alam & Ikonik",
  jarak: "25 km",
  gambar: "/Kamang-Resort/Ngarai-sianok.webp",
},
{
  id: 7,
  nama: "Puncak Lawang",
  kategori: "Wisata Alam & Panorama",
  jarak: "25 km",
  gambar: "/Kamang-Resort/puncak-lawang.webp",
},

  ];

  return (
    <>
      {/* Hero Section */}
<section
  className="hero-section position-relative d-flex flex-column justify-content-center align-items-start text-start"
  style={{
    paddingTop: "90px",
    paddingLeft: "120px",
    overflow: "hidden",
  }}
>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    playsinline="true"
    preload="auto"
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      objectFit: "cover",
      zIndex: "-1",
      height: "300px",
      pointerEvents: "none", // supaya tidak bisa diklik play
    }}
  >
    <source src="/Kamang-Resort/kamangresort7.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: "rgba(0, 0, 0, 0)",
      zIndex: "0",
    }}
  ></div>
</section>

      {/* Intro Text */}
      <section
        className="kamang-section  text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          padding: "60px 10px",
          backgroundColor: "#fff",
        }}
      >
          <h3
          className="text-center my-4 "
          style={{ color: "#315B51", fontWeight: "bold" }}
        >
          Kamang Resort & Convention
        </h3>

        <p
          className="text-muted justify"
          style={{
            lineHeight: "1.8",
            fontSize: "1.05rem",
            color: "#555",
          }}
        >
          Rasakan ketenangan di Kamang Resort & Convention, tempat di mana kenyamanan modern berpadu dengan keindahan alam. Pilihan sempurna untuk liburan yang menenangkan.
        </p>

           <Button
            variant="primary"
            onClick={() => setShow(true)}
            style={{
              backgroundColor: "#315B51",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Check Rekomendasi Kamar
          </Button>

          <Modal show={show} onHide={() => setShow(false)} centered size="md">
            <Modal.Header
              closeButton
              style={{ backgroundColor: "#F8F6F1", borderBottom: "none" }}
            >
              <Modal.Title
                className="w-100 text-center fw-bold"
                style={{ color: "#315B51" }}
              >
                Reservasi
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
                      value={checkin}
                      onChange={(e) => setCheckin(e.target.value)}
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
                      value={checkout}
                      onChange={(e) => setCheckout(e.target.value)}
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
                    <select
                      className="form-select border-0 shadow-sm py-2"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                    >
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
                    <select
                      className="form-select border-0 shadow-sm py-2"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                    >
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <option key={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ backgroundColor: "#315B51", border: "none" }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>
            </Modal.Body>
          </Modal>
      </section>

      {/* About & Services */}
      <section className="py-1" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
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
                  <p className="mb-0" style={{ color: "#333" }}>
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
                <Button
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
                </Button>
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
          margin: "30px auto",
        }}
      />

      {/*destinasi terdekat */}
      <div className="container">
        <h3
          className="text-center my-5 "
          style={{ color: "#315B51", fontWeight: "bold" }}
        >
          Wisata Favorit
        </h3>

        <p
          className="justify text-muted mb-5"
          style={{  margin: "0 auto" }}
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
      className="flex-shrink-0"
      style={{
        width: "clamp(220px, 30vw, 320px)", // fleksibel: min 220px, max 320px
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
            height: "clamp(180px, 25vw, 350px)", // tinggi juga fleksibel
            overflow: "hidden",
          }}
        >
          {/* Gambar / Video */}
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
            <h6 className="fw-bold mb-1">{item.nama}</h6>
            <p className="mb-0 small">{item.lokasi}</p>
          </div>
        </div>

        {/* Keterangan */}
        <div className="p-2 text-center">
          <p className="text-muted mb-1 small">{item.kategori}</p>
        </div>
      </div>
    </div>
  ))}
        </div>
      </div>

 <hr
        style={{
          border: "none",
          height: "3px",
          backgroundColor: "#315B51",
          width: "80%",
          margin: "50px auto",
        }}
      />
      {/* Gallery Grid */}
      <div className="row mb-5">
        {/* Judul Gallery */}
        <div className="col-12">
          <h3
            className="my-4 text-center fancy-heading"
            style={{ color: "#315B51" }}
          >
            <b>Galeri</b>
          </h3>

          {/* Narasi Tepat Setelah Heading */}
          <p
            className="justify text-muted mb-5"
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
      </div>

      {/* Highlight Section */}
  <section
  style={{
    position: "relative",
    backgroundImage: "url('/Kamang-Resort/Resort1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "300px",
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "60px 0",
  }}
>
  {/* Overlay Transparan */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(49, 91, 81, 0.7)",
      zIndex: 1,
    }}
  ></div>

  {/* Konten Statistik */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
      width: "90%",
      maxWidth: "1000px",
      backgroundColor: "white",
      borderRadius: "20px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      padding: "40px 20px",
      color: "#315B51",
      textAlign: "center",
    }}
  >
    {[
      { number: "5++", label: "Penilaian di Maps" },
{ number: "100", label: "Pelayanan" },
{ number: "10", label: "Staf Lokal" },
{ number: "4.8", label: "Penilaian Tamu" },

    ].map((item, index) => (
      <div key={index}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {item.number}
        </h2>
        <p style={{ fontSize: "1rem", color: "#333" }}>{item.label}</p>
      </div>
    ))}
  </div>
</section>

      {/* End */}

      {/* Poster */}
      {/* Poster Section */}
      <section
        className="py-5 poster"
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
                onClick={() => {
                  setSelectedImage("POSTER_RESORT.png");
                  setIsModalOpen(true);
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>

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
                onClick={() => {
                  setSelectedImage("POSTER_RESORT2.png");
                  setIsModalOpen(true);
                }}
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
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSelectedImage("DaftarMenu1.jpg");
                  setIsModalOpen(true);
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>

            <div className="col-md-6 text-md-start text-center mt-4 mt-md-0">
              <h4 className="fw-bold mb-3" style={{ color: "#315B51" }}>
                Masakan Kamang Resort
              </h4>
              <p style={{ color: "#333", textAlign: "justify" }}>
                Nikmati pengalaman kuliner lengkap di Kamang Resort dengan
                berbagai pilihan menu lezat yang memadukan cita rasa lokal dan
                internasional. Mulai dari Maincourse Nusantara seperti Iga Bakar
                Madu dan Dendeng Bakar Cabe Ijo, hingga hidangan Continental
              </p>
            </div>

            {/* Modal - Hanya Gambar */}
            {isModalOpen && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  zIndex: 1050,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  cursor: "pointer",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                <img
                  src={selectedImage}
                  alt="Full View"
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
      <section
        style={{
          background: "linear-gradient(180deg, #f7f9f8 0%, #ffffff 100%)",
          padding: "20px 20px",
        }}
      >
        <div className="container text-center">
          <h3
            className="fw-bold mb-3"
            style={{
              color: "#315B50",
              fontSize: "2rem",
              letterSpacing: "0.5px",
            }}
          >
            Kamang Bersama Kamala
          </h3>
          <p
            style={{
              color: "#555",
              maxWidth: "600px",
              margin: "0 auto 40px",
              fontSize: "1.1rem",
            }}
          >
            Saksikan bagaimana <strong>Kamala</strong> — asisten virtual Kamang Resort —
            membantu Anda menjelajahi keindahan dan layanan terbaik kami.
          </p>

          <div
            className="video-card mx-auto shadow-lg fade-in"
            style={{
              maxWidth: "720px",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div className="ratio ratio-16x9">
              <video
                controls
                poster="thumbnail-video.jpg" // opsional: gambar cover video
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              >
                <source src="Ai-Kamang.mp4" type="video/mp4" />
                Browser kamu tidak mendukung video.
              </video>
            </div>
          </div>
        </div>
      </section>



      {/* Another Highlight */}
  <section
      className="Highlight position-relative d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage: "url('/Kamang-Resort/Resort2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "300px",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Overlay Transparan */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(49, 91, 81, 0.65)",
          zIndex: 1,
        }}
      ></div>

      {/* Konten di atas overlay */}
      <div className="responsive-text" style={{ zIndex: 2, padding: "1rem" }}>
        <h5 className="highlight-title">
          Rayakan berbagai macam momen spesial anda di resort kami
        </h5>

        {/* Tombol Highlight Acara */}
        <div className="highlight-buttons">
          {[
            "Pesta Pernikahan",
            "Acara Kumpul Keluarga",
            "Acara Perusahaan",
            "Makan Malam Romantis",
            "Perayaan Ulang Tahun",
            "Kegiatan Retreat & Outbound",
          ].map((event) => (
            <button key={event} className="highlight-btn">
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
                    className={`accordion-button faq-btn ${activeIndex === index ? "" : "collapsed"
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
                  className={`accordion-content ${activeIndex === index ? "open" : ""
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
