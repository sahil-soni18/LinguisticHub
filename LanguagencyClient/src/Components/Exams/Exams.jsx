import React, { useState, useEffect } from "react";
import "../../../public/CSS/Exam.css"; // Import custom CSS for animations and styles
import Exam from "../../../public/Images/Exam.jpeg";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch exam data from backend when component mounts
    fetch('http://localhost:3000/exams')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch exam data');
        }
        return response.json();
      })
      .then(data => {
        console.log(`ExamData: ${JSON.stringify(data)}`);
        setExams(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="exams-page">
      <h1 className="text-center mb-4 adjustPosition">
        Learn Languages and Advance Your Career
      </h1>
      <div className="languages-info text-center py-4 px-5">
        {/* Map over exams data and render dynamically */}
        {exams.map((exam, index) => (
          <div key={index} className="languageDiv language-card">
            <h3>{exam.language_name}</h3>
            <p>{exam.language_description}</p>
       
          </div>
        ))}
      </div>
      <section className="exams-section mb-5">
        <div className="language-exams-heading">
          <h2>Language Exams</h2>
        </div>
        <div className="exam-names-container">
          <div className="exam-name IELTS">
            <div className="circular-image ">IELTS</div>
            <p>IELTS</p>
          </div>
          <div className="exam-name DELF">
            <div className="circular-image DELF-Container">DELF/DALF</div>
            <p >DELF/DALF</p>
          </div>
          <div className="exam-name DELE">
            <div className="circular-image DELE-Container">DELE</div>
            <p>DELE</p>
          </div>
          <div className="exam-name Goethe-Zertifikat">
            <div className="circular-image GZ-Container">Goethe-Zertifikat</div>
            <p style={{position: "relative", right: "1vw"}}>Goethe-Zertifikat</p>
          </div>
          <div className="exam-name TORFL">
            <div className="circular-image TORFL-Container">TORFL</div>
            <p>TORFL </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <img src={Exam} alt="Language Exams" className="examImage " />
        </div>
            
      </section>
    </div>
  );
};

export default Exams;
