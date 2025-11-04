import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom"; // ⬅️ Tambahkan ini
import "../Reservation.css";

function Reservation() {
  const location = useLocation();
  const fromRecommendation = location.state || {}; // data dari navigate()
  const [loginModal, setLoginModal] = useState(false);

  

  const [bookings, setBookings] = useState([
    {
      roomName: "Deluxe Room 201",
      guestName: "John Doe",
      checkIn: "2025-10-15",
      checkOut: "2025-10-17",
      status: "Dipesan",
      totalCost: 1500000,
    },
  ]);

  const [availableRooms, setAvailableRooms] = useState([
    { id: 1, name: "Deluxe Room 201", available: 2, price: 750000, guests: 3 },
    { id: 2, name: "Deluxe Room 202 – 206", available: 4, price: 750000, guests: 1 },
    { id: 3, name: "Durian Cottage", available: 1, price: 1500000, guests: 10 },
    { id: 4, name: "Lengkok Cottage", available: 1, price: 1500000, guests: 10 },
    { id: 5, name: "Ngalau Cottage", available: 1, price: 1500000, guests: 10 },
    { id: 6, name: "Tarusan Cottage", available: 1, price: 1500000, guests: 10 },
    { id: 7, name: "Bansa Cottage", available: 1, price: 1500000, guests: 10 },
  ]);

  const [formData, setFormData] = useState({
    guestName: "",
    roomName: "",
    checkin: "",
    checkout: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [paymentType, setPaymentType] = useState("dp");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [days, setDays] = useState(0);
  const [alertModal, setAlertModal] = useState({
    show: false,
    title: "",
    message: "",
  });

  // ⬇️ PRE-FILL data dari halaman rekomendasi
useEffect(() => {
  if (fromRecommendation && Object.keys(fromRecommendation).length > 0) {
    setFormData((prev) => {
      // kalau data sama, tidak perlu update
      if (
        prev.roomName === fromRecommendation.selectedRoom &&
        prev.checkin === fromRecommendation.checkin &&
        prev.checkout === fromRecommendation.checkout
      ) {
        return prev;
      }
      return {
        ...prev,
        roomName: fromRecommendation.selectedRoom || "",
        checkin: fromRecommendation.checkin || "",
        checkout: fromRecommendation.checkout || "",
      };
    });
  }
}, [fromRecommendation]);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const showAlert = (title, message) => {
    setAlertModal({ show: true, title, message });
  };

  const handleSubmit = () => {
    if (!formData.guestName || !formData.roomName || !formData.checkin || !formData.checkout) {
      showAlert("Data Belum Lengkap", "Silakan lengkapi semua data pemesanan sebelum melanjutkan.");
      return;
    }

    const selected = availableRooms.find((r) => r.name === formData.roomName);
    if (!selected || selected.available === 0) {
      showAlert("Kamar Tidak Tersedia", `Maaf, kamar ${formData.roomName} sedang penuh.`);
      return;
    }

    const checkInDate = new Date(formData.checkin);
    const checkOutDate = new Date(formData.checkout);
    const diffDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24));
    if (diffDays <= 0) {
      showAlert("Tanggal Tidak Valid", "Tanggal check-out harus setelah tanggal check-in.");
      return;
    }

    const total = diffDays * selected.price;

    setSelectedRoom(selected);
    setTotalCost(total);
    setDays(diffDays);
    setShowModal(true);
  };

  const confirmBooking = () => {
    const newBooking = {
      roomName: formData.roomName,
      guestName: formData.guestName,
      checkIn: formData.checkin,
      checkOut: formData.checkout,
      status: "Dipesan",
      totalCost,
    };

    setBookings((prev) => [...prev, newBooking]);
    setAvailableRooms((prev) =>
      prev.map((r) =>
        r.name === formData.roomName ? { ...r, available: r.available - 1 } : r
      )
    );

    setShowModal(false);

    const message =
      `Kamar: ${formData.roomName}\n` +
      `Nama: ${formData.guestName}\n` +
      `Total Biaya: Rp${totalCost.toLocaleString("id-ID")}\n` +
      (paymentType === "dp"
        ? `DP (50%): Rp${(totalCost * 0.5).toLocaleString("id-ID")}`
        : `Pembayaran penuh diterapkan.`);

    showAlert("✅ Pemesanan Berhasil", message.replace(/\n/g, "<br/>"));

    setFormData({
      guestName: "",
      roomName: "",
      checkin: "",
      checkout: "",
    });
  };

  const totalKapasitas = availableRooms.reduce((sum, r) => sum + r.guests, 0);
  const totalKamar = availableRooms.length;
  const totalBiaya = bookings.reduce((sum, b) => sum + (b.totalCost || 0), 0);

  return (
    <div className="reservation-page d-flex flex-column align-items-center p-4">
      <h1 className="fw-bold mb-4 mt-5" style={{ color: "#315B51" }}>
        Pemesanan Kamar
      </h1>

      {/* ======= Daftar Pemesanan dan Ketersediaan ======= */}
      <div className="container-fluid mb-5" style={{ maxWidth: "1400px" }}>
        <div className="row g-4 justify-content-center">
          {/* Pemesanan Aktif */}
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 shadow-sm bg-white h-100">
              <h4 className="fw-semibold mb-3" style={{ color: "#315B51" }}>
                Daftar Pemesanan Aktif
              </h4>
              <div className="table-responsive">
                <table className="table table-striped text-center align-middle">
                  <thead style={{ backgroundColor: "#315B51", color: "#fff" }}>
                    <tr>
                      <th>Nama Tamu</th>
                      <th>Kamar</th>
                      <th>Check-in</th>
                      <th>Check-out</th>
                      <th>Status</th>
                      <th>Biaya</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b, i) => (
                      <tr key={i}>
                        <td>{b.guestName}</td>
                        <td>{b.roomName}</td>
                        <td>{b.checkIn}</td>
                        <td>{b.checkOut}</td>
                        <td>
                          <span className="badge bg-success">{b.status}</span>
                        </td>
                        <td>Rp{b.totalCost.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Ketersediaan Kamar */}
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 shadow-sm bg-white h-100">
              <h4 className="fw-semibold mb-3" style={{ color: "#315B51" }}>
                Ketersediaan Kamar
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                  <thead style={{ backgroundColor: "#315B51", color: "#fff" }}>
                    <tr>
                      <th>Nama Kamar</th>
                      <th>Sisa</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availableRooms.map((r) => (
                      <tr key={r.id}>
                        <td>{r.name}</td>
                        <td>{r.available}</td>
                        <td>
                          {r.available > 0 ? (
                            <span className="badge bg-success">Tersedia</span>
                          ) : (
                            <span className="badge bg-danger">Penuh</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Formulir Pemesanan ======= */}
  {/* ======= Formulir Pemesanan ======= */}
<div
  className="container p-4 shadow-lg rounded-4 mb-5"
  style={{ maxWidth: "700px", backgroundColor: "rgba(255,255,255,0.95)" }}
>
  <h4 className="fw-bold mb-3 text-center" style={{ color: "#315B51" }}>
    Lengkapi Informasi
  </h4>
  <p className="text-muted small text-center mb-4">
    Kolom yang wajib diisi ditandai dengan <span className="text-danger">*</span>
  </p>

  <form>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        Nama Lengkap <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        id="firstName"
        placeholder="Masukan Nama Anda"
      />
    </div>



    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email <span className="text-danger">*</span>
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="example@mail.com"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Nomer Hp/Telephone <span className="text-danger">*</span>
      </label>
      <input
        type="tel"
        className="form-control"
        id="phone"
        placeholder=" Masukan Nomer Anda"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="notes" className="form-label">
        Catatan
      </label>
      <textarea
        className="form-control"
        id="notes"
        rows="3"
        placeholder="Tambahkan Informasi"
      ></textarea>
    </div>

    <hr className="my-4" />

    <h5 className="fw-bold mb-3" style={{ color: "#315B51" }}>
      Informasi Pemesanan
    </h5>

    <div className="mb-3">
      <label htmlFor="guestName" className="form-label">
        Nama Tamu
      </label>
      <input
        type="text"
        className="form-control"
        id="guestName"
        value={formData.guestName}
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="roomName" className="form-label">
        Pilih Kamar
      </label>
      <select
        id="roomName"
        className="form-select"
        value={formData.roomName}
        onChange={handleChange}
      >
        <option value="">Pilih Kamar</option>
        {availableRooms.map((r) => (
          <option key={r.id} value={r.name}>
            {r.name} (Rp{r.price.toLocaleString()}/malam)
          </option>
        ))}
      </select>
    </div>

    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="checkin" className="form-label">
          Check-in
        </label>
        <input
          type="date"
          className="form-control"
          id="checkin"
          value={formData.checkin}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="checkout" className="form-label">
          Check-out
        </label>
        <input
          type="date"
          className="form-control"
          id="checkout"
          value={formData.checkout}
          onChange={handleChange}
        />
      </div>
    </div>

    <button
      type="button"
      onClick={handleSubmit}
      className="btn w-100 text-white fw-semibold"
      style={{ backgroundColor: "#315B51" }}
    >
      Kirim Pemesanan
    </button>
  </form>
</div>

{/* ======= Payment Method Card ======= */}
<div
  className="container p-4 shadow-lg rounded-4 mb-5"
  style={{ maxWidth: "700px", backgroundColor: "rgba(255,255,255,0.95)" }}
>
  <h4 className="fw-bold mb-3" style={{ color: "#315B51" }}>
    Metode Pembayaran
  </h4>

 <p><b>Transfer Bank Langsung</b></p>
<p>Lakukan pembayaran Anda langsung ke rekening bank kami.</p>

<p className="mb-1"><b>Rekening Pembayaran :</b></p>
<ul className="list-unstyled mb-3">
  <li><b>BCA :</b> 230 XXX 9839<br />a.n. PT Geo Mandiri Utama</li>
  <li className="mt-2"><b>BSI :</b> 718 XXX 8812<br />a.n. PT Geo Mandiri Utama</li>
</ul>

<p>
  Mohon <b>kirim bukti transfer</b> ke WhatsApp kami.
</p>
<ul className="list-unstyled mb-3">
  <li><b>WA 1:</b> 0811-9XXX-4429</li>
  <li><b>WA 2:</b> 0819-9XXX-9699</li>
</ul>

<p>Terima kasih.</p>

</div>


      {/* (modals tetap seperti punyamu — tidak diubah) */}
      {/* ======= Modal Konfirmasi Pembayaran ======= */}
      {showModal && selectedRoom && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow-lg">
              <div className="modal-header text-white" style={{ backgroundColor: "#315B51" }}>
                <h5 className="modal-title fw-bold">Konfirmasi Pembayaran</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p><b>Nama Tamu:</b> {formData.guestName}</p>
                <p><b>Kamar:</b> {formData.roomName}</p>
                <p><b>Lama Menginap:</b> {days} malam</p>
                <p><b>Total:</b> Rp{totalCost.toLocaleString("id-ID")}</p>
                <div className="mt-3">
                  <label className="form-label fw-semibold">Jenis Pembayaran</label>
                  <select
                    className="form-select"
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                  >
                    <option value="dp">
                      DP 50% (Rp{(totalCost * 0.5).toLocaleString("id-ID")})
                    </option>
                    <option value="full">
                      Bayar Penuh (Rp{totalCost.toLocaleString("id-ID")})
                    </option>
                  </select>
                </div>
                <p className="text-muted small mt-3">
                  Setelah dikonfirmasi, Anda akan diarahkan ke proses pembayaran dan menerima bukti transaksi resmi.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-outline-secondary rounded-3"
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </button>
                <button
                  className="btn text-white fw-semibold rounded-3"
                  style={{ backgroundColor: "#315B51" }}
                  onClick={() => setLoginModal(true)}
                >
                  Konfirmasi & Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal login dan alert tetap sama */}
      {loginModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow-lg">
              <div className="modal-header text-white" style={{ backgroundColor: "#315B51" }}>
                <h5 className="modal-title fw-bold">Konfirmasi Login</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setLoginModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Anda sudah login, ingin melanjutkan pemesanan?</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-outline-secondary rounded-3"
                  onClick={() => setLoginModal(false)}
                >
                  No
                </button>
                <button
                  className="btn text-white fw-semibold rounded-3"
                  style={{ backgroundColor: "#315B51" }}
                  onClick={() => {
                    setLoginModal(false);
                    confirmBooking();
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {alertModal.show && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow-lg">
              <div className="modal-header text-white" style={{ backgroundColor: "#315B51" }}>
                <h5 className="modal-title fw-bold">{alertModal.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setAlertModal({ ...alertModal, show: false })}
                ></button>
              </div>
              <div
                className="modal-body"
                dangerouslySetInnerHTML={{ __html: alertModal.message }}
              ></div>
              <div className="modal-footer">
                <button
                  className="btn text-white fw-semibold rounded-3"
                  style={{ backgroundColor: "#315B51" }}
                  onClick={() => setAlertModal({ ...alertModal, show: false })}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reservation;
