import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DMContent3.css";

const DMContent3 = () => {
  const images = [
    '/images/google-ads.png',
    '/images/google-analytics.png',
    '/images/instagram.png',
    '/images/wordpress.png',
    '/images/fb-ads.png',
    '/images/video_3880279.png'
  ];

  return (
    <div className="container-fluid my-5 p-0"> {/* Added p-0 to remove padding */}
      {/* Heading */}
      <h1 className="text-center mb-4">Tools You Will Learn</h1>

      {/* Desktop View: Images in a single row */}
      <div className="d-none d-md-flex justify-content-between" style={{ backgroundColor: "white", width: "100%", boxShadow:"0 0 8px",height:"100px" }}>
        {images.map((image, index) => (
          <div key={index} className="p-2" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="img-fluid"
              style={{ maxWidth: '150px', height: '50px', borderRadius: '8px' }}
            />
          </div>
        ))}
      </div>

      {/* Mobile View: Carousel (Marquee-like effect) */}
      <div className="d-md-none">
        <Carousel controls={false} indicators={false} interval={2000} wrap={true} pause={false}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="d-block w-100"
                style={{ maxHeight: '150px', objectFit: 'contain' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DMContent3;
