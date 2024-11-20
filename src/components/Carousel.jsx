import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContentSection.css';

function ContentSection() {
  return (
    <Container fluid className="content-section py-5">
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={5} className="text-center mb-4 mb-md-0">
          <img src="/Images/example-image.jpg" alt="Example" className="content-image img-fluid" />
        </Col>
        <Col xs={12} md={6}>
          <div className="content-text">
            <p>Innovative ideas can change the world, and every groundbreaking concept starts with a small spark.</p>
            <p>Our team of experts is here to guide you through each step, ensuring that your vision is nurtured and realized.</p>
            <p>We believe in creating meaningful impacts by leveraging technology, creativity, and passion.</p>
            <p>Collaborating with us means working together towards building something exceptional and purposeful.</p>
            <p>Let’s transform your aspirations into a reality that resonates, leaving a lasting legacy for the future.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentSection;
