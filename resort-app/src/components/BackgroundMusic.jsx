import { useEffect, useState } from "react";

const BackgroundMusic = () => {
  const [audio] = useState(new Audio("/Kamang-Resort/KemangResortsound.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;

    // Event listeners untuk track state
    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("play", () => setIsPlaying(true));
      audio.removeEventListener("pause", () => setIsPlaying(false));
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((e) => console.log("Play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "#315B51",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        fontSize: "20px",
      }}
      title={isPlaying ? "Matikan Musik" : "Nyalakan Musik"}
    >
      {isPlaying ? (
        <i className="bi bi-volume-mute-fill"></i>
      ) : (
        <i className="bi bi-volume-up-fill"></i>
      )}
    </button>
  );
};

export default BackgroundMusic;
