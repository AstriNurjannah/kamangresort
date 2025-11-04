import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import ChatbotFlowise from "./components/ChatbotFlowise";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleAllAssetsLoaded = () => {
      setTimeout(() => setFadeOut(true), 5000); // mulai fade out
    };

    const images = Array.from(document.images);
    const videos = Array.from(document.getElementsByTagName("video"));
    let total = images.length + videos.length;
    let loaded = 0;

    const checkDone = () => {
      loaded++;
      if (loaded === total) handleAllAssetsLoaded();
    };

    if (total === 0) handleAllAssetsLoaded();
    else {
      images.forEach((img) => {
        if (img.complete) checkDone();
        else img.addEventListener("load", checkDone);
        img.addEventListener("error", checkDone);
      });

      videos.forEach((vid) => {
        if (vid.readyState >= 3) checkDone();
        else vid.addEventListener("loadeddata", checkDone);
        vid.addEventListener("error", checkDone);
      });
    }
  }, []);

  const handleFadeComplete = () => setIsLoading(false);

  return (
    <BrowserRouter basename="/Kamang-Resort/">
      <ScrollToTop />

      {isLoading && (
        <LoadingScreen onFadeComplete={fadeOut ? handleFadeComplete : null} />
      )}

      {!isLoading && (
        <div className="d-flex flex-column min-vh-100 fade-in">
          <Navbar />
          <div className="flex-grow-1">
            <AppRoutes />
            <ChatbotFlowise />
          </div>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
