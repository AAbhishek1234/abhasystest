import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content4.css'; // Make sure to create this file for custom styles

const testimonials = [
  {
    id: 1,
    text: "This service is fantastic! It helped me grow my business immensely.",
    author: "John Doe",
    position: "CEO of Example Co.",
  },
  {
    id: 2,
    text: "I can't recommend this enough! The team is super supportive.",
    author: "Jane Smith",
    position: "Marketing Manager at Another Co.",
  },
  {
    id: 3,
    text: "A life-changing experience! The support was incredible.",
    author: "Alice Johnson",
    position: "Entrepreneur",
  },
];

function Content4() {
  return (
    <div className="testimonials-section">
      {/* For Mobile Slider */}
      <Carousel className="d-lg-none">
        {testimonials.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <Card className="text-center testimonial-card">
              <Card.Body>
                <Card.Text>"{testimonial.text}"</Card.Text>
                <Card.Title>{testimonial.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{testimonial.position}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* For Desktop View */}
      <Row className="d-none d-lg-flex">
        {testimonials.map((testimonial) => (
          <Col xs={12} md={4} key={testimonial.id} className="mb-4">
            <Card className="text-center testimonial-card">
              <Card.Body>
                <Card.Text>"{testimonial.text}"</Card.Text>
                <Card.Title>{testimonial.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{testimonial.position}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Content4;
