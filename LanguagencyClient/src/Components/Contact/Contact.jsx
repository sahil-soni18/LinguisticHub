import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../../../public/Images/Background.jpg';
import contactImage from '../../../public/Images/Contact.jpeg';
import FormComponent from '../Form/FormComponent';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [error, setError] = useState(null);

  const blurStyle = {
    height: '65vh',
    objectFit: 'cover',
    filter: 'blur(5px)', /* Adjust blur amount as needed */
    width: '100vw', // Ensure full width for responsive layout
  };

  const imageStyle = {
    margin: "10%",
    height: '75%',
    width: '60%',
    objectFit: 'cover',
  };

  useEffect(() => {
    // Fetch contact information from backend when component mounts
    fetch('http://localhost:3000/contact')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch contact information');
        }
        return response.json();
      })
      .then(data => {
        setContactInfo(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="contact-section">
      <div className="background-container position-relative">
        <img src={backgroundImage} alt="Background" style={blurStyle} />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
          <h1 className="mb-4" style={{ color: 'white' }}>Contact Us</h1>
        </div>
      </div>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <img src={contactImage} alt="Contact" style={imageStyle} className="img-fluid rounded" />
          </Col>
          <Col md={6} className="contact-info">
            <h2>Get In Touch</h2>
            <p>If you have any questions about the services we provide, simply get in touch with us.</p>
            <h3>Address</h3>
            <p>{contactInfo.address}</p>
            <h3>Email</h3>
            <p>{contactInfo.email}</p>
            <h3>Phone Number</h3>
            <p>{contactInfo.phone_number}</p>
          </Col>
        </Row>
      </Container>

      <FormComponent />
    </div>
  );
};

export default Contact;
