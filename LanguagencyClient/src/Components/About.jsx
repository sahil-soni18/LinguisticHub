// import React, { useState, useEffect } from 'react';
// import Background from "../../public/Images/Background.jpg";
// import '../../public/CSS/About.css'; // Import your custom CSS file

// const About = () => {
//   const [sections, setSections] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from backend when component mounts
//     fetch('http://localhost:3000/about')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setSections(data);
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="about-container">
//       <section className="hero">
//         <img src={Background} alt="Background" className="hero-image" />
//         <div className="hero-text">
//           <h1>About Us</h1>
//           <p>Break Barriers With Languagency</p>
//         </div>
//       </section>
//       <section className="about-us">
//         <h2>About Languagency</h2>
//         <p className="about-description">
//           Established in 2019 and headquartered in the vibrant city of Ajmer, Languagency is dedicated to providing absolute language solutions and the best online class solutions. With a passion for languages and a commitment to excellence, we strive to empower individuals and organizations with the tools they need to succeed in today's globalized world.
//         </p>
//       </section>
//       <section className="card-container">
//         {sections.map((section, index) => (
//           <div key={index} className={`card card-${index % 5 + 1}`}>
//             <h2>{section.title}</h2>
//             <p>{section.text}</p>
//           </div>
//         ))}
//       </section>
//       <section className="contact-us">
//         <h2>Contact Us</h2>
//         <p>Ready to take the next step in your language learning journey or in need of expert language solutions? Get in touch with us today to learn more about our services and how we can assist you. We look forward to welcoming you to the Languagency family!</p>
//       </section>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from 'react';
import Background from "../../public/Images/Background.jpg";
import '../../public/CSS/About.css'; // Import your custom CSS file

const About = () => {
  const [sections, setSections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetch('http://localhost:3000/about')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setSections(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="about-container">
      <section className="hero">
        <img src={Background} alt="Background" className="hero-image" />
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Break Barriers With Languagency</p>
        </div>
      </section>
      <section className="about-us">
        <h2>About Languagency</h2>
        <p className="about-description">
          Established in 2019 and headquartered in the vibrant city of Ajmer, Languagency is dedicated to providing absolute language solutions and the best online class solutions. With a passion for languages and a commitment to excellence, we strive to empower individuals and organizations with the tools they need to succeed in today's globalized world.
        </p>
      </section>
      <section className="cards-section">
        {sections.map((section, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Ready to take the next step in your language learning journey or in need of expert language solutions? Get in touch with us today to learn more about our services and how we can assist you. We look forward to welcoming you to the Languagency family!</p>
      </section>
    </div>
  );
};

export default About;
