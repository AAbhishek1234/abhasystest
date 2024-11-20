import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import './Ventures.css';

function Ventures() {
  return (
    <>
      <Navbar />

      {/* Add a margin-top of 10rem to the Container */}
      <Container fluid className="features-section text-center py-5 mt-5" style={{ marginTop: '10rem' }}>
        {/* Heading */}
        <h2 className="section-heading">Our Key Features</h2>

        {/* Paragraph */}
        <p className="section-paragraph">
          Explore our top features that help you achieve your goals efficiently. Click on any image below to find out more!
        </p>

        {/* Image Links with Headings */}
        <Row className="mt-4">
          <Col xs={12} md={3}>
            <a href="https://shreebankebiharijimandir.org" target="_blank" rel="noopener noreferrer">
              <img src="/Images/abovenav.png" alt="Feature 1" className="feature-image" />
            </a>
            <h5 className="image-heading">Shree Banke Bihari Mandir</h5>
          </Col>
          <Col xs={12} md={3}>
            <a href="/DigitalMarketing" target="_blank" rel="noopener noreferrer">
              <img src="/Images/feature2.jpg" alt="Feature 2" className="feature-image" />
            </a>
            <h5 className="image-heading">Digital Marketing</h5>
          </Col>
          <Col xs={12} md={3}>
            <a href="https://example.com/feature3" target="_blank" rel="noopener noreferrer">
              <img src="/Images/feature3.jpg" alt="Feature 3" className="feature-image" />
            </a>
            <h5 className="image-heading">CollegeMilgya</h5>
          </Col>
          <Col xs={12} md={3}>
            <a href="https://example.com/feature4" target="_blank" rel="noopener noreferrer">
              <img src="/Images/feature4.jpg" alt="Feature 4" className="feature-image" />
            </a>
            <h5 className="image-heading">DreamsOnWheels</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Ventures;
