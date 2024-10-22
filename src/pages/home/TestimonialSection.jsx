import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import BikeImage from '../../images/testimonial-image.png'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const testimonials = [
  {
    name: "Juno Ingel",
    role: "Principal Product Marketer",
 //   image: "https://via.placeholder.com/50", // Replace with the actual image URL
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper nulla at efficitur fermentum.",
  },
  {
    name: "Kayla Breitenberg",
    role: "Chief Branding Specialist",
   // image: "https://via.placeholder.com/50", // Replace with the actual image URL
    quote: " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed: 2000,
  }
  

  return (
    <Container fluid className="testi-section py-5 pe-5   bg-black">
      <Row className="m-0">
        <Col md={6} className="testi-sec-col-a d-flex ps-0 align-items-center position-relative z-1">
          <div className="skewed-red-round">
            <h4 className="shadow-text shadow-text-sm text-white text-uppercase">
              testimonials
            </h4>
          </div>

          <img
           loading="lazy"
           data-aos="zoom-in-right" data-aos-offset="0" 
            src={BikeImage} // Replace with the actual bike image URL
            alt="Bike"
            className="img-fluid z-1 mb-2"
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center gap-2 testi-sec-col-b"  md={6}>
          <h2 className="text-white mb-4">Testimonials</h2>
          <div className="">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <Card className="testimonial-item text-white p-4">
                    <Card.Body>
                      <div className="mb-3">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnKTTBASbGs5YtDuHawHxU9W6UD8yfn5Phw&s"
                          alt={testimonial.name}
                          className="rounded-circle mb-3"
                          width="50"
                          height="50"
                        />
                        <div>
                          <h5 className="mb-0">{testimonial.name}</h5>
                          <small className="mb-0 text-white">{testimonial.role} </small>
                        </div>
                      </div>
                     
                       <p className="h6"> <FaQuoteLeft size={16} color="white" /> { testimonial.quote} <FaQuoteRight size={16} color="white" /> </p>
            
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialSection;
