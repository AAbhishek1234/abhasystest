import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './whyus.css'
const services = [
  "Remote IT Assistance",
  "Solving IT Problems",
  "Practice IT Management",
  "IT Security Services",
  // "Managed IT Service",
  // "Cloud Services",
];

const Whyus = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Column: Illustration */}
        <Col lg={6} className="text-center">
          <img
            src="/Images/wy.jpg" // Replace with your actual illustration URL
            alt="Technology Illustration"
            className="img-fluid"
            style={{ borderRadius: "10px" }}
          />
        </Col>

        {/* Right Column: Content */}
        <Col lg={6}>
          {/* <p className="text-warning fw-bold mb-2">WHY CHOOSE US?</p> */}
          <h3 className="wy-fw-bold" >
     
            In the world of IT service, what matters most is the commitment to deliver the robust solution in time!
          </h3>
          <p className="wy-text-muted">
          Our expertise combines cutting-edge technology with a human touch, ensuring innovative and robust solutions tailored to our client's unique needs. 
          </p>

          {/* Services Buttons Styled as Cards */}
          <Row className="gy-3">
  {services.map((service, index) => (
    <Col xs={12} sm={6} key={index}>
      <Card className="whyus-card shadow-sm border-0">
        <Card.Body className="wy-text-center">
          <span className="ws-fw-bold" style={{ fontSize: "1.1rem" }}>
            {service}
          </span>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

        </Col>
      </Row>
    </Container>
  );
};

export default Whyus;
