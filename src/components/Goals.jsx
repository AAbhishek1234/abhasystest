import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './goals.css'; // Custom CSS file
import imageSrc from '../bsns.jpg'; // Replace with the actual path to your image

const HomePage = () => {
  return (
    <Container fluid className="unique-homepage-container py-4">
      <Row className="align-items-center">
        {/* Left Section: Image */}
        <Col md={6} className="unique-image-section text-center">
          <Image src={imageSrc} alt="Team Image" className="unique-main-image img-fluid" />
        </Col>

        {/* Right Section: Text and Info */}
        <Col md={6} className="unique-text-section text-start">
          <h2 className="unique-heading">Our Main Goal</h2>
          <p className="unique-subheading mt-3">
            Guiding Our Work
            <br />
            Our mission is to succeed in every aspect of our work, ensuring progress every step of the way.
          </p>

          <Row className="unique-info-section mt-4">
            <Col xs={6} lg={4} className="unique-info-box mb-3">
              <h4 className="unique-info-number">10 +</h4>
              <p className="unique-info-text">years of working experience</p>
            </Col>
            <Col xs={6} lg={4} className="unique-info-box mb-3">
              <h4 className="unique-info-number">20 +</h4>
              <p className="unique-info-text">collaboration with tech firms</p>
            </Col>
            <Col xs={6} lg={4} className="unique-info-box mb-3">
              <h4 className="unique-info-number">15 +</h4>
              <p className="unique-info-text">software operations</p>
            </Col>
          </Row>

        
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
