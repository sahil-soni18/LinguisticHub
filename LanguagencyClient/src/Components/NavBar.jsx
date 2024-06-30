import React, { useState, useEffect, useRef } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../../public/CSS/NavBar.css'; // Import your custom CSS for additional styling
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation(); // Hook to get the current path

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    // Add event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run effect only once

  return (
    <Navbar ref={navbarRef} className={`sticky-top ${isSticky ? 'sticky' : ''}`} expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand-link">
          <Navbar.Brand
            href="#home"
            className="logo-container"
          >
            <img
              src="/Images/LANGUAGENCY LOGO.png"
              alt="Languagency Logo"
              className="logo"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Center navigation links on larger screens */}
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/About" className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}>
              About
            </Link>
            {/* <Link to="/Learn" className={`nav-link ${location.pathname === '/Learn' ? 'active' : ''}`}>
              Learn
            </Link>
            <Link to="/Services" className={`nav-link ${location.pathname === '/Services' ? 'active' : ''}`}>
              Services
            </Link> */}
            <Link to="/Exams" className={`nav-link ${location.pathname === '/Exams' ? 'active' : ''}`}>
              Exams
            </Link>
            <Link to="/Contact" className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
