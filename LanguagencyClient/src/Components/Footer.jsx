import React, { useState, useEffect } from "react";
import linkedin from "../../public/Images/linkedin.png"
import "../../public/CSS/Footer.css";

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch contact information from backend when component mounts
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/footer");
      if (!response.ok) {
        throw new Error("Failed to fetch contact information");
      }
      const data = await response.json();
      setContactInfo(data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>About Us</h5>
            <p>{contactInfo.about}</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: {contactInfo.email}</p>
            <p>Phone: {contactInfo.phone}</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              {/* <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li> */}
              <li className="list-inline-item">
                <a href={contactInfo.linkedin}>
                  <img src={linkedin} alt="LinkedIn" className="linkedinIcon" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
