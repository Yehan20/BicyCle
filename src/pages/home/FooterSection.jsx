import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer>
      <Container fluid className="p-5  color-white footer-container">
        <Row className="text-white">
          <Col md={3}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><Link to="/all-bikes" className="text-white text-decoration-none">All Bikes</Link></li>
              <li><Link to="/womens-bikes" className="text-white text-decoration-none">Women's Bikes</Link></li>
              <li><Link to="/mens-bikes" className="text-white text-decoration-none">Men's Bikes</Link></li>
              <li><Link to="/accessories" className="text-white text-decoration-none">Accessories</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/our-story" className="text-white text-decoration-none">Our Story</Link></li>
              <li><Link to="/test-ride" className="text-white text-decoration-none">Test Ride Your Bike</Link></li>
              <li><Link to="/delivery" className="text-white text-decoration-none">Fully Delivery</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><Link to="/find-retailer" className="text-white text-decoration-none">Find a Retailer</Link></li>
              <li><Link to="/become-dealer" className="text-white text-decoration-none">Become a Dealer</Link></li>
              <li><Link to="/register-bike" className="text-white text-decoration-none">Register Your Bike</Link></li>
              <li><Link to="/corporate-purchasing" className="text-white text-decoration-none">Corporate & Bulk Purchasing</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/visit-store" className="text-white text-decoration-none">Visit Our Store</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Email Us</Link></li>
              <li><a href="tel:+3538272188" className="text-white text-decoration-none">(353) 827-2188</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container  fluid className="py-2   color-white footer-2-container bg-black">
        <Row className="text-white">
          <Col md={12}>
           <p className="text-center m-0">
                <span>Bicycle</span>&nbsp;
                    &copy;   &nbsp;2024 | All Rights
                Reserved 
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
