import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Reservation() {
  return (
    <div className="container  reservation" style={{ maxWidth: "600px" }}>
      <h1 className="fw-bold mb-4" style={{ color: "#315B51" }}>
        Reservation
      </h1>
      <p className="text-muted" style={{ fontSize: "0.9rem" }}>
        Required fields are followed by <span className="text-danger">*</span>
      </p>

      <form>
        {/* Check-in */}
        <div className="mb-3">
          <label htmlFor="checkin" className="form-label">
            Check-in <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="checkin"
            placeholder="Check-in Date"
            required
          />
        </div>

        {/* Check-out */}
        <div className="mb-3">
          <label htmlFor="checkout" className="form-label">
            Check-out <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="checkout"
            placeholder="Check-out Date"
            required
          />
        </div>

        {/* Adults */}
        <div className="mb-3">
          <label htmlFor="adults" className="form-label">
            Adults
          </label>
          <select id="adults" className="form-select">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        {/* Children */}
        <div className="mb-4">
          <label htmlFor="children" className="form-label">
            Children
          </label>
          <select id="children" className="form-select">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        {/* Search Button */}
        
        <button type="button" className="btn btn-success" style={{backgroundColor: "#315B51"}}>Submit</button>
      </form>
    </div>
  );
}

export default Reservation;
