import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ourclients.css'; // Create this file for custom styling

// Sample data for clients
const clients = [
  { id: 1, name: 'Shree Banke Bihari Mandir', logo: '/Images/abovenav.png' },
  { id: 2, name: 'Digital Marketing', logo: '/Images/Screenshot (334).png' },
  { id: 3, name: 'CollegeMilgya', logo: '/Images/Screenshot (333).png' },
  { id: 4, name: 'Dreams On Wheelz', logo: '/Images/dreamslogo.jpg' },
 
];

function OurClients() {
  return (
    <Container className="our-clients-section" fluid>
      <h2 className="section-heading text-center mb-4">Our Clients</h2>
      <Row className="justify-content-center">
        {clients.map((client) => (
          <Col xs={12} sm={6} md={4} lg={3} key={client.id} className="mb-4">
            <Card className="client-card text-center">
              <Card.Img 
                variant="top" 
                src={client.logo} 
                alt={client.name} 
                className="client-logo" 
              />
              <Card.Body>
                <Card.Title className="client-name">{client.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OurClients;
