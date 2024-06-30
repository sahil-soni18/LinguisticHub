import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../public/CSS/Fact.css'; // Import custom CSS file for styling

const Fact = () => {
    const [factData, setFactData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('http://localhost:3000/')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
            console.log(`data.fact = ${data.fact[0].dyk_title}`)
            setFactData(data.fact[0])
    })
          .catch(error => setError(error.message));
  }, []);

    const style = {
        margin: "10vw auto",
        marginBottom: "1vh"
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container className="fact-container" style={style}>
            <Row className="justify-content-center align-items-center">
              {console.log(`factData = ${factData?.dyk_title}`)}
                <Col xs={12} md={6} className="mb-4">
                    <Card className="fact-card">
                        <Card.Body className='card-Body'>
                            <h2 className="fact-title">{factData?.dyk_title}</h2>
                            <p className="fact-content">{factData?.dyk_content}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} className="mb-4">
          <img src="/Images/pexels-shvets-production-7516363.jpg" alt="Language Learning" className="img-fluid" />
        </Col>
            </Row>
        </Container>
    );
};

export default Fact;
