import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const CTASection = () => {
  return (
  
      <Container  fluid className="cta-section p-5 text-white " >
        <Row className="align-items-center">
          <Col md={8} className="text-light" data-aos="fade-right" data-aos-offset="0" data-aos-delay="500"  >
            <h2 className="cta-heading">Join the Adventure</h2>
            <p className="cta-text">
              Discover our latest collection of high-performance bikes designed to take you further. Explore now and gear up for your next adventure!
            </p>
          </Col>
          <Col md={4} className="text-md-end text-center">
          <Button className="mt-2 md-mt-5 rounded-pill px-5" variant="light" size="lg">
         Email US
           </Button>
          </Col>
        </Row>
      </Container>
   
  );
};

export default CTASection;
