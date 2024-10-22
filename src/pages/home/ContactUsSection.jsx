import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const ContactUsSection = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for modal
  const [showModal, setShowModal] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can add more validation here if needed
    if (formData.name && formData.email && formData.message) {
      // Show modal on successful submission
      setShowModal(true);
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  // Handle modal close
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Container fluid className="contact-section p-5 bg-black text-white" >
        <Row className="mb-4 text-center" data-aos="fade-up" data-aos-offset="0" >
          <Col>
            <h2 className="section-title">Contact Us</h2>
            <p>We'd love to hear from you! Please feel free to reach out with any questions or feedback.</p>
          </Col>
        </Row>

        <Row className="mb-4 " data-aos="fade-up" data-aos-offset="0">
          {/* Contact Information */}
          <Col md={6} className="contact-info mb-4 d-flex align-items-center">
          <div className="">
            <h3>Get In Touch</h3>
              <p><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p><strong>Email:</strong> contact@yourcompany.com</p>
              <p><strong>Address:</strong> 123 Adventure Road, City, Country</p>
          </div>
         
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <h3>Send Us a Message</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  name="subject" 
                  placeholder="Enter the subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  name="message" 
                  rows={5} 
                  placeholder="Enter your message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

         
                <Button className=" rounded-pill px-5" variant="light">
                Send Message
           </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Success Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your message! We'll get back to you as soon as possible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUsSection;
