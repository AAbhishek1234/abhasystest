import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content02.css'; // Ensure this file exists for custom styles

const Content02 = () => {
  return (
    <Container fluid className="about-us-section">
      <h1 className="about-us-heading" style={{color:"black"}}>About Us</h1>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={8}>
          <Card className="about-card shadow">
            <Row className="g-0">
              <Col md={6} className="about-image-col">
                <Card.Img 
                  src="/Images/About-us.jpg" // Replace with your image path
                  alt="About Us"
                  className="about-image"
                />
              </Col>
              <Col md={6} className="about-text-col">
                <Card.Body>
                  <Card.Text>
                    Welcome to our company! We are dedicated to providing the best 
                    services to our clients. Our team is composed of experienced 
                    professionals who are passionate about delivering high-quality 
                    results. We believe in building strong relationships with our 
                    clients and understanding their needs to provide tailored solutions.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Content02;
