import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./latestnews.css"; // Import custom CSS

const LatestNews = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Generative AI in Data Security",
      description:
        "Generative AI is gaining traction for enhancing data security by automating the detection of anomalies within massive data flows. ",
      image: "/Images/generative.jpg",
      route: "",
    },
    {
      id: 2,
      title: "Social Engineering Threats",
      description:
        "Cybersecurity remains critical, with identity-based attacks and social engineering becoming increasingly sophisticated. ",
      image: "/Images/threads.jpg",
      route: "",
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Challenges",
      description:
        "Social engineering attacks, such as phishing, remain prevalent, prompting companies to enhance education and technology to protect against identity theft and credential abuse.",
      image: "/Images/security.jpg",
      route: "",
    },
  ];

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center" style={{fontSize:"2.5rem",fontWeight:"bold"}}>Latest IT News</h1>
      <Row className="g-4">
        {blogs.map((blog) => (
          <Col key={blog.id} xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleNavigate(blog.route)}
              className="latest-custom-card"
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={blog.image}
                alt={blog.title}
                className="latest-custom-image"
              />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestNews;
