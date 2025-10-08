import ContactUs from "../content/ContactUs";
import Beranda from "../content/Home";
import Gallery from "../content/Gallery";
import About from "../content/About";
import Reservation from "../content/Reservation"
import Restaurant from "../content/Restaurant"
import Facilities from "../content/Facilities"
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Home" element={<Beranda />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Restaurant" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
