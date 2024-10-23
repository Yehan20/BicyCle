
import React from "react";
import { Col, Container, Row,Button } from "react-bootstrap";

import BikeImage from '../../images/bicycle.png'


const IntroSection =()=> {
  return (
    <Container fluid className="overflow-hidden intro-sec px-5" style={{ backgroundColor: '#000', color: 'white', position: 'relative' }}>
    <Row className="d-flex align-items-center">
      <Col md={6} className="text-left  banner-sec-a text" data-aos="fade-up">
        <h1 className="display-4 text-upper-case">Ride Into Adventure!</h1>
        <p className="h4 text-uppercase">QRBiter Electronic Bike</p>
        <Button className="mt-5 rounded-pill px-5" variant="light" size="lg">
          BUY IT
        </Button>
      </Col>
      <Col md={6} className="banner-sec-b text-center pe-0 d-flex justify-content-end position-relative z-index-1">
       <h4 className="shadow-text text-white">
         EXTREME
       </h4>
        <img
          src={BikeImage}
          className=""
          alt="Bicycle"
          width={650}
        
        />
      </Col>
    </Row>

  </Container>
  );
}

export default IntroSection;