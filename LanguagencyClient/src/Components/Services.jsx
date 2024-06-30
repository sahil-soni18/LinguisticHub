import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../public/CSS/Services.css'; // Import custom CSS file for styling

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setServicesData(data.services))
            .catch(error => setError(error.message));
    }, []);

    const style = {
        top: '0vh',
        position: 'relative',
        margin: '0 10vw'
    };

    if (error) {
        return <div>Error fetching services data: {error}</div>;
    }

    return (
        <Container className="services-container" style={style}>
            <Row className="justify-content-center">
                <Col xs={12} className="text-center mb-5">
                    <h2 className="services-heading">Explore Our Services</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {console.log(servicesData)}
                {servicesData.map((service, index) => (
                    <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
                        <Link to={`/service/${service.id}`} className='link'> {/* Wrap Card inside Link */}
                            <Card className={`service-card service-card-${index + 1}`}>
                                <Card.Body className='cardBody'>
                                    <h3 className="service-title">{service.service_name}</h3>
                                    <p className="service-description">{service.service_desc}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
