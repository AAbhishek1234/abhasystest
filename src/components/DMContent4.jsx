import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DMContent4 = () => {
  const offerings = [
    {
      title: "Placement Assistance",
      image: "/images/placement.jpg",
      description: "We provide excellent placement assistance to help you secure jobs at top companies.",
      bgColor: '#FFEBEE' // Light Pastel Red
    },
    {
      title: "Industry Expert Trainers",
      image: "/images/expert.jpg",
      description: "Learn from the industry experts with years of experience in the field",
      bgColor: '#FFF8E1' // Light Pastel Yellow
    },
    {
      title: "Abhasys Certification",
      image: "/images/certificate.jpg",
      description: "Receive certification upon completion to enhance your resume and skills",
      bgColor: '#E8F5E9' // Light Pastel Green
    },
    {
      title: "Extra Doubt Clarification Sessions",
      image: "/images/solving.jpg",
      description: "Get access to extra doubt-solving sessions to ensure complete clarity and understanding of concepts.",
      bgColor: '#E3F2FD' // Light Pastel Blue
    }
  ];

  return (
    <div className="container my-5">
      {/* Heading */}
      <h1 className="text-center mb-4">Our Course Offerings</h1>

      {/* Desktop View: Containers in a single row */}
      <div className="d-none d-md-flex justify-content-between">
        {offerings.map((offering, index) => (
          <div key={index} className="p-3 rounded" 
            style={{ 
              flex: 1, 
              margin: '0 10px',
              backgroundColor: offering.bgColor, 
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
              transition: 'transform 0.3s ease-in-out',
              borderRadius: '8px'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={offering.image} alt={offering.title} className="img-fluid mb-2" style={{ borderRadius: '8px' }} />
            <h5 style={{ fontWeight: '500', color: '#333' }}>{offering.title}</h5>
            <p style={{ color: '#555' }}>{offering.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile View: Carousel (Slider) */}
      <div className="d-md-none">
        <Carousel controls={false} indicators={true} interval={3000}>
          {offerings.map((offering, index) => (
            <Carousel.Item key={index}>
              <div className="p-3 rounded" 
                style={{ 
                  backgroundColor: offering.bgColor, 
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
                  borderRadius: '8px'
                }}
              >
                <img src={offering.image} alt={offering.title} className="img-fluid mb-2" style={{ borderRadius: '8px' }} />
                <h5 style={{ fontWeight: '500', color: '#333' }}>{offering.title}</h5>
                <p style={{ color: '#555' }}>{offering.description}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DMContent4;
