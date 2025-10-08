import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  const navbarRef = useRef(null);

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
      bg="white"
      variant="light"
      fixed="top"
      className="shadow-sm"
      ref={navbarRef}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={NavLink}
          to="/Home"
          className="d-flex align-items-center me-1"
        >
          <img src="/Kamang-Resort/LogoResort2.png" alt="Logo" width="250" height="100" />
        </Navbar.Brand>

        {/* Toggle (Hamburger) */}
        <Navbar.Toggle aria-controls="navbarNavDropdown" className="border-0" />

        {/* Menu Collapse */}
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/Home"
              className={({ isActive }) =>
                isActive ? "active text-dark me-4" : "text-secondary me-4"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/ContactUs"
              className={({ isActive }) =>
                isActive ? "active text-dark me-4" : "text-secondary me-4"
              }
            >
              Contact Us
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/About"
              className={({ isActive }) =>
                isActive ? "active text-dark me-4" : "text-secondary me-4"
              }
            >
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/Gallery"
              className={({ isActive }) =>
                isActive ? "active text-dark me-4" : "text-secondary me-4"
              }
            >
              Gallery
            </Nav.Link>

            {/* Dropdown Service */}
            <NavDropdown
              title="Service"
              id="navbarDropdown"
              className="me-4 text-secondary"
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
