import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "./Navbar"
import './AllServices.css';

function AllServices() {
  return (
    <>
    <Navbar></Navbar>
    <Container className="py-5">
      {/* Section for each image and text */}
      <Row className="align-items-center my-4">
        <Col xs={12} md={6}>
          <img src="/images/image1.jpg" alt="Description 1" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="text-section">
          <h3>Innovative IT Solutions</h3>
          <p>
            Our team delivers cutting-edge IT solutions that help businesses stay competitive in today's tech-driven landscape. From software development to IT consulting, we cover it all.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center my-4">
        <Col xs={12} md={6} className="order-md-2">
          <img src="/images/image2.jpg" alt="Description 2" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="text-section order-md-1">
          <h3>Comprehensive School Services</h3>
          <p>
            Our services support schools in creating a dynamic learning environment with the latest technology integrations and customized educational tools designed for students and educators alike.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center my-4">
        <Col xs={12} md={6}>
          <img src="/images/image3.jpg" alt="Description 3" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="text-section">
          <h3>Transformative College Programs</h3>
          <p>
            We work closely with colleges to implement transformative programs that align with industry needs, ensuring students are well-prepared for their future careers.
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default AllServices;
