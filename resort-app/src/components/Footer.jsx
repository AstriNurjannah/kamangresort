import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


function Footer() {
  return (
    <footer
      style={{
        color: "white",
        backgroundColor: "#315B51",
        paddingTop: "40px",
      }}
    >
      <div className="container">
        <div className="row text-start">
          {/* Kolom 1 - Maps & Nama Resort (lebih besar) */}
          <div className="col-md-5 mb-4">
            <h5 className="">Kamang Resort</h5>
            <div
              style={{
                width: "100%",
                height: "300px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.476995354446!2d100.34739358009551!3d-0.2517315522538777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd545007d6d2733%3A0x74d26d06ba5ca52e!2sKamang%20Resort%20%26%20Convention!5e0!3m2!1sid!2sid!4v1759505954822!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Kolom 2 - Contact Us */}
          <div className="col-md-3 mb-4">
            <h5 className="">Contact Us</h5>
            <p>Email: info@kemangresort.com</p>
            <p>Phone: +62 812-3456-7890</p>
            <p>Address: Jl. Raya Pauah - Bukittinggi, Kamang Mudiak, Kec. Kamang Magek, Kabupaten Agam, Sumatera Barat 26152
</p>
          </div>

          {/* Kolom 3 - Media Sosial */}
          <div className="col-md-2 mb-4">
            <h5 className="">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" style={{ color: "white", fontSize: "20px" }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" style={{ color: "white", fontSize: "20px" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" style={{ color: "white", fontSize: "20px" }}>
                <i className="bi bi-twitter"></i>
              </a>
           
            </div>
          </div>

          {/* Kolom 4 - Logo pendukung */}
          <div className="col-md-2 mb-4 ">
            <h5 className="">Our Partner</h5>
            <img
              src="/LogoResort.png"
              alt="Logo Resort"
              width="120"
              className="my-2"
            />
            <img
              src="/LogoGroup.png"
              alt="Logo Support"
              width="120"
              className="my-2"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-3 border-top border-light mt-3">
          <p className="mb-0">© Copyright by Kamang Resort 2025 - Created by Proper.Id</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
