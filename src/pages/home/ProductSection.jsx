import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Button } from 'react-bootstrap';
//import './ProductCarousel.css'; // Custom CSS for styling

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productImage1 from "../../images/product-image-1.png"
import productImage2 from "../../images/product-image-2.png"
import productImage3 from "../../images/product-image-3.png"
import productImage4 from "../../images/product-image-3.png"



const ProductSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000, // 3000ms = 3 
    speed: 500,
    slidesToShow: 4, // Number of items visible
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const products = [
    { id: 1, name: 'Road Bike Kiross', price: '$1,599.99', img: productImage1 },
    { id: 2, name: 'Road Bike Kiross', price: '$1,599.99', img: productImage4 },
    { id: 3, name: 'Road Bike Kiross', price: '$1,599.99', img: productImage3 },
    { id: 4, name: 'Road Bike Kiross', price: '$1,599.99', img: productImage3 },

  ];

  return (
    <Container fluid className="product-section p-5">
      <Row className="mb-3 justify-content-between align-items-center" data-aos="fade-up" data-aos-offset="0">
        <Col md={6}>
          <h2 className="section-title">Our Products</h2>
        </Col>
 
        <Col md={12}>

          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image-wrapper">
                  <img src={product.img} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>

    </Container>
  );
};

export default ProductSection;
