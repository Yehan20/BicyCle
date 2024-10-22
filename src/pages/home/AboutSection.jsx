import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BikeImage from '../../images/about-bike.png'

const AboutSection = () => {
    return (
        <Container fluid className="about-section p-5 bg-black" >
            <Row className="align-items-center">
                <Col md={6} className="position-relative about-section-col-a text-center">

                    <div className="skewed-red">
                    </div>

                    <img
                        loading='lazy '
                        src={BikeImage}
                        alt="Bicycle"
                        className="bike-image w-100"
                    />
                </Col>

                <Col md={6} className="about-text pe-0" >
                    <div className="d-flex gap-3 mb-4 align-items-end justify-content-between">
                        <h2 className='px-5 mb-0'>About Us</h2>
                        <div className=" bg-light line"></div>
                    </div>

                    <div className="px-5" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1000">
                        <p className='text-white'>
                            At Bicycle, we are passionate about cycling & the freedom it brings.
                            Founded with a vision to promote healthy, eco-friendly transportation,
                            we offer a wide range of high-quality bicycles for riders of all skill levels.
                            Whether you’re commuting to work, exploring new trails, or simply enjoying
                            a leisurely ride, our bikes are designed for performance, comfort, & style.
                            Built with precision & crafted for durability, we strive to provide you with
                            the best cycling experience. Join us in our mission to create a greener,
                            healthier world, one ride at a time!
                        </p>
                        <p>
                            Our commitment to quality goes beyond just the products. We partner with
                            industry-leading manufacturers to ensure that every bike we offer is built
                            to the highest standards, using cutting-edge technology & durable materials.
                        </p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;
