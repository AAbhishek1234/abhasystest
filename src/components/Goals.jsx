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
          <h1 className="unique-heading">You Can Count On Us</h1>
          <p className="unique-subheading mt-3">

            Guided by the continuous feedback from our clients, and building more and more user friendly solutions, we have developed trust in the IT market. Most of our leads come from references and we are proud of this. In a short span of time we have grown exponentially.
          </p>

          <Row className="unique-info-section mt-4">
            <Col xs={6} lg={4} className="unique-info-box mb-3">
              <h4 className="unique-info-number">5 +</h4>
              <p className="unique-info-text">Years of working experience</p>
            </Col>
            <Col xs={6} lg={4} className="unique-info-box mb-3">
              <h4 className="unique-info-number">25 +</h4>
              <p className="unique-info-text">Clients</p>
            </Col>
            <Col xs={6} lg={4} className="unique-info-box mb-3">
              <h4 className="unique-info-number">1000 +</h4>
              <p className="unique-info-text">Task completed</p>
            </Col>
          </Row>

        
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
