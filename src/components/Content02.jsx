import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Content02.css"; // Ensure this file exists for custom styles

const Content02 = () => {
  return (
    <Container fluid className="about-us-section">
      <h1 className="about-us-heading" style={{ color: "black" }}>
        Welcome to Abhasys Technologies!
      </h1>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={8}>
          <Card className="about-card shadow  custom-card-height">
            <Row className="g-0">
              <Col md={6} className="about-image-col">
                <Card.Img
                  src="/Images/About-us.jpg" // Replace with your image path
                  alt="About Us"
                  className="about-image"
                />
              </Col>
              <Col md={6} className="about-text-col" style={{color:"black"}}>
                <Card.Body>
                  <Card.Text>
                    We are committed to providing the best IT and Media services
                    to our clients. Our team comprises of experienced and expert
                    IT professionals passionate about delivering high-quality
                    solutions and services, be it website, software, digital
                    marketing, SEO or social media management. We believe that,
                    at the end of the day, result matters and the result helps
                    in building trust and strong relationships with the clients.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content02;
