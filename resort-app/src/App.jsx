import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen"; // ⬅️ Tambahkan ini
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading (misalnya fetch awal, animasi, dll)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // tampilkan loading selama 2 detik

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />; // Tampilkan loading screen dulu
  }

  return (
    <BrowserRouter basename="/Kamang-Resort/">
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <div className="flex-grow-1">
          <AppRoutes />
          {/* <FlowiseChat /> */}
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
