import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function NavigationBar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Cek apakah user sedang di halaman Home
  const isHomePage = location.pathname === "/Home";

  //Effect untuk detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = navbarRef.current;
      if (
        navbar &&
        !navbar.contains(event.target) &&
        document.querySelector(".navbar-collapse.show")
      ) {
        const toggleButton = document.querySelector(".navbar-toggler");
        if (toggleButton) toggleButton.click();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
   <Navbar
  expand="lg"
  variant="light"
  fixed="top"
  className={`custom-navbar ${
    isHomePage && !isScrolled ? "navbar-transparent" : "navbar-scrolled"
  }`}
  ref={navbarRef}
>
  <Container>
    <Navbar.Brand
      as={NavLink}
      to="/Home"
      className="d-flex align-items-center me-1"
    >
      <img
        src="/Kamang-Resort/LogoResort2.png"
        alt="Logo"
        width="250"
        height="100"
      />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarNavDropdown" className="border-0" />

    <Navbar.Collapse id="navbarNavDropdown">
      <Nav className="ms-auto  d-flex  gap-5">
        <Nav.Link
          as={NavLink}
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? isHomePage
                ? "active text-dark me-4"
                : "active text-white me-4"
              : isHomePage
              ? "text-dark me-4"
              : "text-light me-4"
          }
        >
          Home
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/ContactUs"
          className={({ isActive }) =>
            isActive ? "active text-white me-4" : "text-light me-4"
          }
        >
          Contact Us
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/About"
          className={({ isActive }) =>
            isActive ? "active text-white me-4" : "text-light me-4"
          }
        >
          About
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/Gallery"
          className={({ isActive }) =>
            isActive ? "active text-white me-4" : "text-light me-4"
          }
        >
          Gallery
        </Nav.Link>

        <NavDropdown
          title="Service"
          id="navbarDropdown"
          className={isHomePage ? "me-4 text-dark" : "me-4 text-light"}
          menuVariant="light"
        >
          <NavDropdown.Item
            as={NavLink}
            to="/Reservation"
            className={({ isActive }) =>
              isActive
                ? "dropdown-item active text-dark"
                : "dropdown-item text-secondary"
            }
          >
            Reservation
          </NavDropdown.Item>

          <NavDropdown.Item
            as={NavLink}
            to="/Facilities"
            className={({ isActive }) =>
              isActive
                ? "dropdown-item active text-dark"
                : "dropdown-item text-secondary"
            }
          >
            Facilities
          </NavDropdown.Item>

          <NavDropdown.Item
            as={NavLink}
            to="/Restaurant"
            className={({ isActive }) =>
              isActive
                ? "dropdown-item active text-dark"
                : "dropdown-item text-secondary"
            }
          >
            Restaurant
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default NavigationBar;
