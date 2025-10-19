import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Reservation.css";

function Reservation() {
  const [bookings, setBookings] = useState([
    {
      roomName: "Deluxe Room",
      guestName: "John Doe",
      checkIn: "2025-10-15",
      checkOut: "2025-10-17",
      status: "Booked",
    },
    {
      roomName: "Family Suite",
      guestName: "Sarah Ahmad",
      checkIn: "2025-10-18",
      checkOut: "2025-10-20",
      status: "Booked",
    },
  ]);

  const [availableRooms, setAvailableRooms] = useState([
    { id: 1, name: "Deluxe Room", available: 3 },
    { id: 2, name: "Family Suite", available: 1 },
    { id: 3, name: "Villas Garden View", available: 2 },
  ]);

  const [formData, setFormData] = useState({
    guestName: "",
    roomName: "",
    checkin: "",
    checkout: "",
    adults: 1,
    children: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!formData.guestName || !formData.roomName || !formData.checkin || !formData.checkout) {
      alert("Silakan lengkapi semua data reservasi.");
      return;
    }

    const selectedRoom = availableRooms.find((r) => r.name === formData.roomName);
    if (selectedRoom.available === 0) {
      alert(`Maaf, kamar ${selectedRoom.name} sedang penuh.`);
      return;
    }

    const newBooking = {
      roomName: formData.roomName,
      guestName: formData.guestName,
      checkIn: formData.checkin,
      checkOut: formData.checkout,
      status: "Booked",
    };

    setBookings((prev) => [...prev, newBooking]);
    setAvailableRooms((prev) =>
      prev.map((r) =>
        r.name === formData.roomName ? { ...r, available: r.available - 1 } : r
      )
    );

    alert("Reservasi berhasil dibuat!");
    setFormData({
      guestName: "",
      roomName: "",
      checkin: "",
      checkout: "",
      adults: 1,
      children: 0,
    });
  };

  return (
    <div className="reservation-page d-flex flex-column align-items-center p-4">
      {/* Background animasi */}
      <div className="animated-bg">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
      </div>

      {/* Judul */}
      <h1 className="fw-bold mb-4 mt-5" style={{ color: "#315B51" }}>
        Room Reservation
      </h1>

      {/* Bagian tabel */}
      <div className="container-fluid mb-5" style={{ maxWidth: "1400px" }}>
        <div className="row g-4 justify-content-center">
          {/* Active Bookings */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              <h4 className="fw-semibold mb-3" style={{ color: "#315B51" }}>
                Active Bookings
              </h4>
              <div className="table-responsive">
                <table className="table table-striped text-center align-middle">
                  <thead className="table-success">
                    <tr>
                      <th>Guest Name</th>
                      <th>Room</th>
                      <th>Check-in</th>
                      <th>Check-out</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b, index) => (
                      <tr key={index}>
                        <td>{b.guestName}</td>
                        <td>{b.roomName}</td>
                        <td>{b.checkIn}</td>
                        <td>{b.checkOut}</td>
                        <td>
                          <span className="badge bg-success">{b.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Available Rooms */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              <h4 className="fw-semibold mb-3" style={{ color: "#315B51" }}>
                Available Rooms
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered align-middle text-center">
                  <thead className="table-success">
                    <tr>
                      <th>Room Type</th>
                      <th>Rooms Left</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availableRooms.map((room) => (
                      <tr key={room.id}>
                        <td>{room.name}</td>
                        <td>{room.available}</td>
                        <td>
                          {room.available > 0 ? (
                            <span className="badge bg-success">Available</span>
                          ) : (
                            <span className="badge bg-danger">Full</span>
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

      {/* Form Reservasi */}
      <div
        className="container p-4 shadow-lg rounded-4 mb-5"
        style={{
          maxWidth: "700px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <h4 className="fw-bold mb-3 text-center" style={{ color: "#315B51" }}>
          Booking Form
        </h4>

        <form>
          <div className="mb-3">
            <label htmlFor="guestName" className="form-label">
              Guest Name <span className="text-danger">*</span>
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
              Room Type <span className="text-danger">*</span>
            </label>
            <select
              id="roomName"
              className="form-select"
              value={formData.roomName}
              onChange={handleChange}
            >
              <option value="">Select Room</option>
              {availableRooms.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="checkin" className="form-label">
                Check-in <span className="text-danger">*</span>
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
                Check-out <span className="text-danger">*</span>
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

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="adults" className="form-label">
                Adults
              </label>
              <select
                id="adults"
                className="form-select"
                value={formData.adults}
                onChange={handleChange}
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6 mb-4">
              <label htmlFor="children" className="form-label">
                Children
              </label>
              <select
                id="children"
                className="form-select"
                value={formData.children}
                onChange={handleChange}
              >
                {[0, 1, 2].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn w-100 text-white fw-semibold shadow-sm"
            style={{
              backgroundColor: "#315B51",
              transition: "all 0.3s ease",
            }}
          >
            Submit Reservation
          </button>
        </form>
      </div>

      {/* Resort Information */}
      <div
        className="container mb-5"
        style={{ maxWidth: "1000px", textAlign: "center" }}
      >
        <h3 className="fw-bold mb-4" style={{ color: "#315B51" }}>
          Resort Information
        </h3>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="card border-0 shadow-sm p-4 rounded-4"
              style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
            >
              <h5 className="fw-semibold" style={{ color: "#315B51" }}>
                Total Rooms
              </h5>
              <h2 className="fw-bold text-success">25</h2>
              <p className="text-muted">Deluxe, Family, and Villa Rooms</p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="card border-0 shadow-sm p-4 rounded-4"
              style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
            >
              <h5 className="fw-semibold" style={{ color: "#315B51" }}>
                Facilities
              </h5>
              <h2 className="fw-bold text-success">12</h2>
              <p className="text-muted">
                Pool, Restaurant, Gym, Meeting Hall, and more
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="card border-0 shadow-sm p-4 rounded-4"
              style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
            >
              <h5 className="fw-semibold" style={{ color: "#315B51" }}>
                Guest Capacity
              </h5>
              <h2 className="fw-bold text-success">80+</h2>
              <p className="text-muted">Maximum guest capacity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
