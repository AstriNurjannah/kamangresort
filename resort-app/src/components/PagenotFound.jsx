import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #f3f7f5, #cfe7e1)",
        textAlign: "center",
        color: "#315B50",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "5rem", fontWeight: "700", marginBottom: "0.5rem" }}>
        404
      </h1>
      <h2 style={{ fontWeight: "600", marginBottom: "1rem" }}>
        Halaman Tidak Ditemukan
      </h2>
      <p style={{ maxWidth: "500px", marginBottom: "2rem", lineHeight: "1.6" }}>
        Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        Pastikan URL sudah benar, atau kembali ke halaman utama.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#315B50",
          color: "white",
          padding: "10px 25px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#23453f")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#315B50")}
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFound;
