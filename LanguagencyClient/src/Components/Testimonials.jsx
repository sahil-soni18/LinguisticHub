import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../public/CSS/Testimonial.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]); // Array to store fetched testimonials
  const [error, setError] = useState(null); // Error message if fetching fails

  useEffect(() => {
    // Fetch testimonials data when component mounts
    fetch("http://localhost:3000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        return response.json();
      })
      .then((data) => {
        console.log(`data: ${data.testimonials[0].testimonial_name}`);
        setTestimonials(data.testimonials);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  if (error) {
    return <div>Error fetching testimonials: {error}</div>;
  }

  return (
    <>
      <h3 className="text-center display-4 mb-4">
        Our happy clients say about us
      </h3>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="myCarousel">
              <h3>{testimonial.testimonial_name}</h3>
              <h4>{testimonial.testimonial_post}</h4>
              <p>{testimonial.testimonial_review}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Testimonials;
