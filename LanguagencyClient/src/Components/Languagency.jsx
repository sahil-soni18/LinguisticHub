import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../public/CSS/Languagency.css'; // Ensure this path is correct

const Languagency = () => {
  const style = {
    marginTop: '12vh',
    textAlign: 'center',
    color: '#fff',
    background: 'linear-gradient(180deg, #000 0%, #00c6ff 100%)',
    padding: '50px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  };

  return (
    <Container fluid style={style}>
      <Row className="h-75 justify-content-center align-items-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="languagency-title">Languagency</h1>
          <p className="languagency-subtitle">Absolute Language Solution</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Languagency;