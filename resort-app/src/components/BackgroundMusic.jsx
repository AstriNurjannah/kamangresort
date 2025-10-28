import { useEffect, useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicHint, setShowMusicHint] = useState(false); // menampilkan hint/tips untuk user di mobile jika autoplay diblokir
  const audioRef = useRef(null); //untuk menyimpan objek audio agar bisa diakses di seluruh komponen
  const hasUserInteracted = useRef(false); //untuk track apakah user sudah melakukan interaksi pertama

  useEffect(() => {
    const audio = new Audio("/Kamang-Resort/KemangResortsound.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio; //// simpan objek audio di ref

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
        setTimeout(() => {
          if (!hasUserInteracted.current) {
            setShowMusicHint(true); // tampilkan hint jika gagal
          }
        }, 3000);
      }
    };

    autoPlay();

    const handleFirstInteraction = () => {
      if (!hasUserInteracted.current) {
        hasUserInteracted.current = true; // Tandai user sudah interaksi
        setShowMusicHint(false); // Hilangkan hint

        // Jika musik belum dimainkan, mainkan sekarang
        if (!isPlaying && audioRef.current) {
          audioRef.current.play().catch((e) => console.log("Play gagal:", e));
        }
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });
    document.addEventListener("scroll", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  const toggleMusic = (e) => {
    e.preventDefault(); // Penting di mobile supaya audio play tidak diblokir
    e.stopPropagation();
    // Tandai interaksi user
    if (!hasUserInteracted.current) {
      hasUserInteracted.current = true;
      setShowMusicHint(false); // sembunyikan hint jika user klik tombol
    }

    if (!audioRef.current) return; // Jika audio belum siap, keluar

    if (isPlaying) {
      audioRef.current.pause(); // Pause jika sedang play
    } else {
      audioRef.current.play().catch(() => console.log("Play gagal"));
      // Play musik, tangani error autoplay
    }
  };

  // Nomor WhatsApp Customer Support
  const phoneNumber = "6289628026356";
  const message =
    "Halo, saya ingin bertanya mengenai reservasi di Kamang Resort.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

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
        onTouchStart={toggleMusic}
        style={{
          position: "fixed",
          bottom: "26px",
          right: "20px",
          zIndex: 1001,
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
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
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

      {/* Hint untuk user (opsional) */}
      {showMusicHint && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            backgroundColor: "rgba(49, 91, 81, 0.9)",
            color: "white",
            padding: "10px 15px",
            borderRadius: "10px",
            fontSize: "14px",
            zIndex: 1000,
            maxWidth: "200px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          🔊 Ketuk untuk memutar musik
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;
