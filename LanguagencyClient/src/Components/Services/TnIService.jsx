import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "../../../public/CSS/TniService.css";

const TnIServices = () => {
  const { id } = useParams();
  console.log(`Id: ${id}`);
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/services/${id}`);
        setServiceData(response.data[0]);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [id]);

  return (
    <div className="services-container d-flex flex-column align-items-center">
      <section className="hero">
        <img
          src="https://source.unsplash.com/1600x900/?technology,business" // Replace with high-resolution image URL
          alt="Hero background"
          className="hero-image"
        />
        {serviceData && <h1 className="hero-title">{serviceData.service_name}</h1>}
        <Button variant="primary" className="call-to-action">Contact Us</Button> {/* Add a call to action button here */}
      </section>

      <section className="content mt-5 py-5">
        <Container>
          {serviceData && (
            <>
              <Row className="justify-content-center">
                <Col md={8}>
                  <h2 className="services-heading">Our Services</h2>
                  <ul className="services-list list-unstyled">
                    <li>{serviceData.supported_languages}</li>
                  </ul>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={8}>
                  <h2>{serviceData.service_name}</h2>
                  <div className="service-description">
                    {serviceData.service_description.split("\n").map(
                      (paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      )
                    )}
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </section>
    </div>
  );
};

export default TnIServices;
