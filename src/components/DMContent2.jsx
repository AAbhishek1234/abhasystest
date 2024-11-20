import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DMContent2 = () => {
  const cardStyles = [
    {
      bgColor: 'linear-gradient(135deg, #FFFAF3 0%, #FFEFD5 100%)', // Light peach to ivory
      shadowColor: 'rgba(255, 223, 186, 0.4)', // Light orange shadow
    },
    {
      bgColor: 'linear-gradient(135deg, #E6F7FF 0%, #D1FAE5 100%)', // Soft blue to mint green
      shadowColor: 'rgba(189, 236, 182, 0.4)', // Light green-blue shadow
    },
    {
      bgColor: 'linear-gradient(135deg, #FFFDE7 0%, #FFF9C4 100%)', // Light yellow to cream
      shadowColor: 'rgba(255, 249, 196, 0.4)', // Soft yellow shadow
    }
  ];

  return (
    <div className="container my-5">
      {/* Heading */}
      <h1 className="text-center mb-4" style={{ fontSize: '2.5rem', color: '#555' }}>
        Learn From The Industry Experts
      </h1>

      {/* Desktop View */}
      <div className="d-none d-md-flex justify-content-between">
        {[
          {
            name: "Amod Kumar Sharma",
            image: "/path-to-image1.jpg",
            description: "A business strategist with more than 15 years of experience in the edtech industry. A writer, mentor, and motivational speaker, guiding students to build successful careers.",
          },
          {
            name: "Bhavna",
            image: "/path-to-image2.jpg",
            description: "A digital marketing expert with 4 years of experience, specializing in digital marketing strategies, WordPress development, and social media management.",
          },
          {
            name: "Bharat Sharma",
            image: "/path-to-image3.jpg",
            description: "A MERN Stack Developer with deep knowledge of web technologies, guiding students to build futuristic career goals.",
          }
        ].map((person, index) => (
          <div
            key={index}
            className="p-3 border rounded position-relative"
            style={{
              flex: 1,
              margin: '0 10px',
              background: cardStyles[index].bgColor,
              boxShadow: `0 4px 10px ${cardStyles[index].shadowColor}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              borderRadius: '10px',
              border: '2px solid #f0f0f0', // Light gray border
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 8px 15px ${cardStyles[index].shadowColor}`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 10px ${cardStyles[index].shadowColor}`;
            }}
          >
            {/* Circular Image */}
            <div className="text-center mb-3">
              <img
                src={person.image}
                alt={person.name}
                className="rounded-circle"
                style={{ width: "80px", height: "80px", objectFit: "cover", border: '2px solid #fff' }}
              />
            </div>
            <p style={{ fontSize: '1.2rem', color: '#333', textAlign: 'justify' }}>{person.description}</p>
            <div
              className="position-absolute"
              style={{
                bottom: 0,
                right: 0,
                padding: "10px",
                color: "#555",
                fontStyle: "italic",
                fontSize: "1.1rem"
              }}
            >
              - {person.name}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View with Carousel */}
      <div className="d-md-none">
        <Carousel controls={true} indicators={true} interval={4000}>
          {[
            {
              name: "Amod Kumar Sharma",
              image: "/path-to-image1.jpg",
              description: "A business strategist with more than 15 years of experience in the edtech industry. A writer, mentor, and motivational speaker, guiding students to build successful careers.",
            },
            {
              name: "Bhavna",
              image: "/path-to-image2.jpg",
              description: "A digital marketing expert with 4 years of experience, specializing in digital marketing strategies, WordPress development, and social media management.",
            },
            {
              name: "Bharat Sharma",
              image: "/path-to-image3.jpg",
              description: "A MERN Stack Developer with deep knowledge of web technologies, guiding students to build futuristic career goals.",
            }
          ].map((person, index) => (
            <Carousel.Item key={index}>
              <div
                className="p-3 border rounded position-relative"
                style={{
                  background: cardStyles[index].bgColor,
                  boxShadow: `0 4px 10px ${cardStyles[index].shadowColor}`,
                  borderRadius: '10px',
                  border: '2px solid #f0f0f0',
                }}
              >
                <div className="text-center mb-3">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover", border: '2px solid #fff' }}
                  />
                </div>
                <p style={{ fontSize: '1.1rem', color: '#555' }}>{person.description}</p>
                <div
                  className="position-absolute"
                  style={{
                    bottom: 0,
                    right: 0,
                    padding: "10px",
                    color: "#555",
                    fontStyle: "italic",
                    fontSize: "1.1rem"
                  }}
                >
                  - {person.name}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DMContent2;
