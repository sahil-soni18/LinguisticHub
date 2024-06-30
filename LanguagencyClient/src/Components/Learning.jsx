// Learning.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../public/CSS/Learning.css'; // Import custom CSS file for styling
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const languages = [
  { id: 1, name: 'English', icon: '../../public/Images/circle (1).png' }, // Replace with your image path
  { id: 2, name: 'French', icon: '../../public/Images/circle.png' }, // Replace with your image path
  { id: 3, name: 'Spanish', icon: '../../public/Images/circle (2).png' }, // Replace with your image path
  { id: 4, name: 'German', icon: '../../public/Images/circle (4).png' }, // Replace with your image path
  { id: 5, name: 'Russian', icon: '../../public/Images/circle (3).png' }, // Replace with your image path
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const Learning = () => {
  const style = {
    marginTop: "25vh",
  };

  return (
    <Container className="learning-container" style={style}>
      <Row>
        <Col xs={12} className="text-center mb-4">
          <h2 className="learning-heading">I Want to Learn</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {languages.map((language, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <Link to={`/Learn/${language.id}`}>
              <motion.div
                className="learning-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <img src={language.icon} alt={language.name + ' Flag'} className="language-icon" />
                      <span className="language-name ms-2">{language.name}</span>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Learning;