import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content3.css'
const DMContent5 = () => {
  const cardStyle = {
    background: 'linear-gradient(135deg, #f0f0f0, #e2e3e5)',
    color: '#383d41',
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontWeight: 'bold',
    width: '100%',
  };

  const cardContent = [
    "Digital Marketing Manager",
    "SEO Specialist",
    "SEM/PPC Specialist",
    "Social Media Manager",
    "Digital Marketing Strategist",
    "Analytics Manager",
    "Content Marketer",
    "Website Developer",
    "Video Marketing Specialist",
    "Ads Specialist"
  ];

  return (
    <div className="container-fluid my-5 px-0">
      <h1 className="text-center mb-4">Job Oppurtunities After This Course</h1>

      {/* First Row */}
      <div className="row justify-content-center mb-4" style={{ margin: '0' }}>
        {cardContent.slice(0, 5).map((text, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-6 mb-3">
            <div className="p-3 border rounded text-center container1" style={cardStyle}>
              {text}
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="row justify-content-center" style={{ margin: '0' }}>
        {cardContent.slice(5, 10).map((text, index) => (
          <div key={index + 5} className="col-lg-2 col-md-4 col-sm-6 col-6 mb-3">
            <div className="p-3 border rounded text-center container1 " style={cardStyle}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DMContent5;
