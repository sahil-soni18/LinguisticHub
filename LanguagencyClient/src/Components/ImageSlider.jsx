import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ImageSlider = () => {

  const style = {
    marginTop: '10px',
    top: '12vh',
    position: 'relative',
    left: '20vw',
    width: '55vw',
    borderRadius: '2vw',
    overflow: 'hidden', // Ensure the border radius applies to the images
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add a larger shadow for more depth
  };

  const imageStyle = {
    height: '60vh',
    objectFit: 'cover',
    animation: 'fadeIn 2s ease-in-out', // Animation for image
    filter: 'brightness(80%)', // Slightly darken the images to make overlays more visible
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom right, rgba(255,0,150,0.3), rgba(0,204,255,0.3))', // Colorful gradient overlay
    zIndex: 1,
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)', // Additional shadow for the gradient
  };

  const captionStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    zIndex: 2,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for text readability
    padding: '10px 20px',
    borderRadius: '5px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better readability
    animation: 'fadeInUp 1s ease-in-out', // Animation for caption
  };

  const navButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '1.5rem',
    zIndex: 2,
    padding: '10px', // Add padding for better clickability
    margin: '10px', // Add margin to separate from the edges
    transition: 'background-color 0.3s', // Smooth transition for hover effect
  };

  const navButtonHoverStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  };

  const carouselItemStyle = {
    position: 'relative',
  };

  return (
    <Carousel 
      style={style} 
      nextIcon={<span className="carousel-control-next-icon" style={{ ...navButtonStyle, ...navButtonHoverStyle }} />} 
      prevIcon={<span className="carousel-control-prev-icon" style={{ ...navButtonStyle, ...navButtonHoverStyle }} />}
    >
      <Carousel.Item style={carouselItemStyle}>
        <div style={overlayStyle}></div>
        <img
          className="d-block w-100"
          src="/Images/pexels-aliaksei-lepik-17955398.jpg"
          alt="First slide"
          style={imageStyle}
        />

      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <div style={overlayStyle}></div>
        <img
          className="d-block w-100"
          src="/Images/pexels-amaury-michaux-18189684.jpg"
          alt="Second slide"
          style={imageStyle}
        />

      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <div style={overlayStyle}></div>
        <img
          className="d-block w-100"
          src="/Images/pexels-atypeek-dgn-5781917.jpg"
          alt="Third slide"
          style={imageStyle}
        />
  
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
