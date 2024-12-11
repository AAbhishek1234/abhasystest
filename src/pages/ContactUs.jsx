import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';
import CustomNavbar from '../components/Navbar';

function ContactUs() {
  useEffect(() => {
    // Ensure the page scrolls to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <CustomNavbar />
      <Container fluid className="contact-us-section py-5" style={{ marginTop: '5rem'}}>
        <h2 className="text-center mb-4">Contact Us</h2>

        <Row className="justify-content-center">
          {/* Contact Information */}
          <Col xs={12} md={4} className="contact-info text-center mb-4">
            <h4>Get in Touch</h4>
            <p id='cts'>We'd love to hear from you! Reach out via any of the methods below:</p>

            <p id='eml'><strong>Email:</strong> contactabhasys@gmail.com</p>
            <p id='phn'><strong>Phone:</strong> +91 9717024896</p>
          </Col>

          {/* Contact Form */}
          <Col xs={12} md={6}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
