import ContactUs from "../content/ContactUs";
import Beranda from "../content/Home";
import Gallery from "../content/Gallery";
import About from "../content/About";
import Reservation from "../content/Reservation";
import Restaurant from "../content/Restaurant";
import Facilities from "../content/Facilities";
import { Routes, Route } from "react-router-dom";
import BackgroundMusic from "./BackgroundMusic";
import PagenotFound from "../components/PagenotFound";
import RecommendationPage from "../content/RecomendationPage";

function AppRoutes() {
  return (
    <div className="container">
      <BackgroundMusic />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Home" element={<Beranda />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/Recomendation" element={<RecommendationPage />} />

        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
