import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./os.css"; // Import external CSS (optional)

const services = [
  {
    title: "Web Development",
    description:
      "Our expert team designs and develops websites that are functional, intuitive, and scalable. From static websites to complex web applications, we focus on creating seamless user experiences and modern, clean designs that engage visitors.",
    icon: "/Images/webd.png", // Replace with actual icon URL
  },
  {
    title: "Startup Solutions",
    description:
      "startups looking to secure funding, we offer expert assistance in preparing pitch decks, business plans, and presentations that highlight your company’s potential. We guide you through the fundraising process, connecting you with potential investors and helping you position your startup for success.",
    icon: "/Images/startup.png",
  },
  {
    title: "Digital Marketing",
    description:
      "We help businesses grow online with targeted digital marketing strategies. Our services include Search Engine Optimization (SEO), content marketing, pay-per-click (PPC) advertising, social media marketing, and email campaigns. We’ll help you drive traffic, engage your audience, and convert leads into loyal customers.",
    icon: "/Images/dm.png",
  },
  {
    title: "SEO Optimization",
    description:
      "In today’s competitive market, appearing at the top of search engines is crucial. Our SEO experts will ensure that your website is optimized for search engines, increasing visibility and improving rankings. From keyword research to on-page and off-page SEO, we implement proven strategies to help you attract more visitors and grow your business.",
    icon: "/Images/seo.png",
  },
  {
    title: "Apps Development",
    description:
      "We craft intuitive and efficient mobile applications that give your users a great experience. Whether its for iOS or Android, we provide end-to-end mobile app development that includes planning, design, and deployment. Our apps help your business reach customers wherever they are.",
    icon: "/Images/appd.png",
  },
  {
    title: "Security & Hosting",
    description:
      "We offer reliable hosting services that ensure your website is always online and performs at its best. Our hosting solutions come with enhanced security features to protect your data and provide peace of mind. We also offer ongoing maintenance and support, so you can focus on growing your business while we take care of the technical side.",
    icon: "/Images/hosting.png",
  },
];

const Services = () => {
  return (
    <Container className=" h-my-4">
      {/* Section Header */}
      <div className="text-center mb-5">
        {/* <p className="text-warning fw-bold">WHAT WE PROVIDE</p> */}
        <h1 className="se-fw-bold">
          <span className="text-warning" >Our</span> Services
        </h1>
      </div>

      {/* Services Grid */}
      <Row className="gy-4">
        {services.map((service, index) => (
          <Col
            key={index}
            sm={12}
            md={6}
            lg={4}
            style={{ paddingLeft: "15px", paddingRight: "15px" }} // Add horizontal spacing
          >
            
            <Card className="shadow-sm border-0 h-100 text-center">
              <Card.Body>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mb-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-muted" style={{ color: "black" }}>
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
