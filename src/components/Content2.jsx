

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Content2.css';

function Content2() {
  return (
    <Container fluid>
      <Row className="align-items-start custom-section">
        <Col xs={12} md={12} className="text-center">
          <h1 className="section-heading">Our Services</h1>
        </Col>
      </Row>

      <Row className="align-items-start custom-section d-flex flex-column flex-md-row">
        <Col xs={12} md={6} className="text-section website-text">
          <h2 className="website-heading">Website Designing & Development</h2>
          <p className="website-description">
            We specialize in creating visually stunning and highly functional websites.
            From idea to implementation, we bring your vision to life with innovative
            designs and robust development.
          </p>
        </Col>
        <Col xs={12} md={6} className="image-col">
          <img src="/Images/we.png" alt="development" className="full-width-image" />
        </Col>
      </Row>

      <Row className="align-items-start custom-section d-flex flex-column flex-md-row">
        <Col xs={12} md={6} className="image-col">
          <img src="/Images/dm.jpg" alt="digital marketing" className="full-width-image" />
        </Col>
        <Col xs={12} md={6} className="text-section social-text">
          <h2 className="social-heading">Digital Marketing & Social Media Management</h2>
          <p className="social-description">
            Enhance your digital presence with our expert social media management
            and marketing strategies tailored for your business.
          </p>
        </Col>
      </Row>

      <Row className="align-items-start custom-section d-flex flex-column flex-md-row">
        <Col xs={12} md={6} className="text-section software-text">
          <h2 className="software-heading">Software Development</h2>
          <p className="software-description">
            Build innovative and scalable software solutions to streamline your business operations.
          </p>
        </Col>
        <Col xs={12} md={6} className="image-col">
          <img src="/Images/software.jpg" alt="software development" className="full-width-image" />
        </Col>
      </Row>

      <Row className="align-items-start custom-section d-flex flex-column flex-md-row">
        <Col xs={12} md={6} className="image-col">
          <img src="/Images/appdevelopment.avif" alt="mobile application" className="full-width-image" />
        </Col>
        <Col xs={12} md={6} className="text-section mobile-text">
          <h2 className="mobile-heading">Mobile Application Development</h2>
          <p className="mobile-description">
            Transform your ideas into mobile applications that deliver seamless user experiences.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Content2;
