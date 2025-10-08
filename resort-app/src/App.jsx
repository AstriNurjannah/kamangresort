import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Kamang-Resort/">
      {/* wrapper flexbox full tinggi layar */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        {/* konten akan memenuhi ruang kosong */}
        <div className="flex-grow-1">
          <AppRoutes />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
