import { useLocation, useNavigate } from "react-router-dom";

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

const RecommendationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalGuests = 1, checkin = "-", checkout = "-" } = location.state || {};

  // Filter kamar berdasarkan jumlah tamu
  const recommended = rooms.filter((room) => room.guests >= totalGuests);

  // Fungsi navigasi ke halaman reservasi dengan data kamar terpilih
  const handleBooking = (room) => {
    navigate("/Reservation", {
      state: {
        selectedRoom: room.name,
        price: room.price,
        checkin,
        checkout,
        totalGuests,
      },
    });
  };

  return (
    <div
      className="recommendation-page text-center"
      style={{ paddingTop: "130px" }}
    >
      <h2 className="fw-bold" style={{ color: "#315B51" }}>
        Rekomendasi Kamar untuk {totalGuests} Tamu
      </h2>
      <p className="text-muted mb-4">
        Periode: <b>{checkin}</b> s/d <b>{checkout}</b>
      </p>

      <div
        className="room-list d-flex flex-wrap justify-content-center gap-4"
        style={{ padding: "20px" }}
      >
        {recommended.map((room) => (
          <div
            key={room.id}
            className="room-card shadow-sm p-3 rounded text-start"
            style={{
              backgroundColor: "#F8F6F1",
              width: "330px",
              borderRadius: "12px",
            }}
          >
            <img
              src={room.images[0]}
              alt={room.name}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3 fw-semibold" style={{ color: "#315B51" }}>
              {room.name}
            </h5>
            <p className="text-muted mb-1">{room.description}</p>
            <p className="fw-bold" style={{ color: "#315B51" }}>
              {room.price} <small>{room.period}</small>
            </p>

            <div style={{ fontSize: "0.9rem", color: "#555" }}>
              <p>
                <b>Max Guests:</b> {room.guests}
              </p>
              <p>
                <b>Bed Type:</b> {room.bedType}
              </p>
              <p>
                <b>Room Size:</b> {room.size}
              </p>
              {room.view && (
                <p>
                  <b>View:</b> {room.view}
                </p>
              )}
              <p>
                <b>Amenities:</b>
              </p>
              <ul style={{ paddingLeft: "20px" }}>
                {room.amenities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button
                className="btn btn-success mt-2"
                style={{
                  backgroundColor: "#315B51",
                  border: "none",
                  width: "100%",
                }}
                onClick={() => handleBooking(room)} // ✅ Klik tombol ini untuk lanjut ke halaman reservasi
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        ))}

        {recommended.length === 0 && (
          <p className="text-danger mt-5">
            Tidak ada kamar yang cocok dengan jumlah tamu.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecommendationPage;
