import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../public/CSS/SloganStyle.css';

const Slogan = () => {

    const style = {
        top: '20vh',
        position: 'relative',
        margin: '0 2vw'
    }
  return (
    <Container fluid style={style}>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6}>
          <div className="text-center text-md-left slogan-text-container">
            <h2 className="slogan-text">Break Barriers,</h2>
            <h2 className="slogan-text">Connect Cultures</h2>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="text-center">
            <div className="circle-frame">
              <img
                className="img-fluid rounded-circle"
                src="/Images/pexels-markus-winkler-18512927.jpg"
                alt="Circular Image"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Slogan;
