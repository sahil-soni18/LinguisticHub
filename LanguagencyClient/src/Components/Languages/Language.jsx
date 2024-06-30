import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to extract URL parameters
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "../../../public/CSS/English.css";
import Background from "../../../public/Images/Background.jpg";

const English = () => {
  const { id } = useParams(); // Extract the ID from URL parameters
  const [englishData, setEnglishData] = useState([]);

  useEffect(() => {
    const fetchEnglishData = async () => {
      try {
        // Fetch English data from the backend using the ID
        const response = await axios.get(`http://localhost:3000/languages/${id}`); 
        setEnglishData(response.data);
        console.log(`languagedata: ${englishData}`);
      } catch (error) {
        console.error("Error fetching English data:", error);
      }
    };

    fetchEnglishData();
  }, [id]); // Fetch data whenever the ID changes

  return (
    <div className="english-page">
      <div className="BlurishFrame"></div>
      <div className="background-image">
        <img src={Background} className="background-image" alt="background" />
        <h1 className="Heading">ENGLISH</h1>
      </div>

      <div className="LanguageContent">
        <Container className="content-container">
          {/* Check if englishData is available before rendering */}
          {englishData && (
            <>
              {/* Heading */}
              <h1 className="text-center mb-5">{englishData.heading}</h1>

              {/* Paragraph */}
              <p className="content-paragraph">{englishData.paragraph}</p>

              <hr className="content-divider" />

              {/* Content with sections */}
              <Row>
                <Col>
                  {englishData.methodologies && (
                    <div className="content-section">
                      <h2 className="content-section-heading">Methodologies</h2>
                      <p>{englishData.methodologies}</p>
                    </div>
                  )}

                  {englishData.why_learn && (
                    <div className="content-section">
                      <h2 className="content-section-heading">Why Learn </h2>
                      <p>{englishData.why_learn}</p>
                    </div>
                  )}

{englishData.exams_offered && (
  <div className="content-section">
    <h2 className="content-section-heading">Exams Offered</h2>
    <div className="exams-list">
      {englishData.exams_offered.split(",").map((exam, index) => (
        <span key={index} className="exam">
          {exam.trim()}
          {index !== englishData.exams_offered.split(",").length - 1 && <span className="separator">,&nbsp;</span>}
        </span>
      ))}
    </div>
  </div>
)}




                  {englishData.scope && (
                    <div className="content-section">
                      <h2 className="content-section-heading">Scope</h2>
                      <p>{englishData.scope}</p>
                    </div>
                  )}
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default English;
