import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const BackgroundMusic = () => {
  const [audio] = useState(new Audio("/Kamang-Resort/KemangResortsound.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    const autoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Autoplay diblokir oleh browser:", e);
      }
    };

    autoPlay();

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((e) => console.log("Play gagal:", e));
    }
  };

  // Nomor WhatsApp Customer Support
  const phoneNumber = "6289628026356";
  const message = "Halo, saya ingin bertanya mengenai reservasi di Kamang Resort.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Tombol WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "135px", // posisi di atas tombol musik
          right: "20px",
          backgroundColor: "#315B51",
          color: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        title="Hubungi Customer Support"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Tombol Musik */}
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "26px",
          right: "20px",
          zIndex: 999,
          backgroundColor: "#315B51",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          fontSize: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease",
        }}
        title={isPlaying ? "Matikan Musik" : "Nyalakan Musik"}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {isPlaying ? (
          <i className="bi bi-volume-up-fill"></i>
        ) : (
          <i className="bi bi-volume-mute-fill"></i>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
