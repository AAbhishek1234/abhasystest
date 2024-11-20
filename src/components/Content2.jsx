// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Content2.css';

// function Content2() {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/allservices'); // Updated path to navigate to '/allservices'
//   };

//   return (
//     <Container fluid>
//       {/* First Section */}
//       <Row className="align-items-center custom-section">
//         <Col xs={12} md={12} className="text-center">
//           <h2 className="section-heading">Our Services</h2>
//         </Col>
//       </Row>
      
//       {/* Second Section */}
//       <Row className="align-items-center custom-section no-padding">
//       <Col xs={12} md={6} className="text-section">
//   <h2>Website Designing & Development</h2>
//   <p>
//     We specialize in creating visually stunning and highly functional websites. 
//     From idea to implementation, we bring your vision to life with innovative 
//     designs and robust development.
//   </p>
// </Col>
//         <Col xs={12} md={6} className="image-col no-padding">
//           <img src="/images/web development.jpeg" alt="Image 1" className="full-width-image" />
//         </Col>
//       </Row>

//       {/* Third Section */}
//       <Row className="align-items-center custom-section no-padding">
//         <Col xs={12} md={6} className="image-col no-padding">
//           <img src="/images/College-services.jpg" alt="Image 2" className="full-width-image" />
//         </Col>
//         <Col xs={12} md={6} className=" social-text-section">
//           <h2>Digital Marketing & Social Media Management</h2>
//           <p>
//     We specialize in creating visually stunning and highly functional websites. 
//     From idea to implementation, we bring your vision to life with innovative 
//     designs and robust development.
//   </p>
//           {/* <Button variant="primary" onClick={handleNavigate}>Learn More</Button> */}
//         </Col>
//       </Row>

//       {/* Fourth Section */}
//       <Row className="align-items-center custom-section no-padding">
//         <Col xs={12} md={6} className=" software-text-section">
//           <h2>Software Development</h2>
//           {/* <Button variant="primary" onClick={handleNavigate}>Learn More</Button> */}
//           <p>
//     We specialize in creating visually stunning and highly functional websites. 
//     From idea to implementation, we bring your vision to life with innovative 
//     designs and robust development.
//   </p>
//         </Col>
//         <Col xs={12} md={6} className="image-col no-padding">
//           <img src="/images/School-services.jpg" alt="Image 3" className="full-width-image" />
//         </Col>
//       </Row>
//    {/* Fifth Section */}
//         <Row className="align-items-center custom-section no-padding">
//         <Col xs={12} md={6} className="image-col no-padding">
//           <img src="/images/College-services.jpg" alt="Image 2" className="full-width-image" />
//         </Col>
//         <Col xs={12} md={6} className=" mobile-text-section">
//           <h2>Mobile Application</h2>
//           <p>
//     We specialize in creating visually stunning and highly functional websites. 
//     From idea to implementation, we bring your vision to life with innovative 
//     designs and robust development.
//   </p>
//           {/* <Button variant="primary" onClick={handleNavigate}>Learn More</Button> */}
//         </Col>
//       </Row>




//     </Container>
//   );
// }

// export default Content2;














import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './Content2.css';

function Content2() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate('/allservices');
  // };

  return (
    <Container fluid>
      {/* First Section */}
      <Row className="align-items-start custom-section">
        <Col xs={12} md={12} className="text-center">
          <h1 className="section-heading">Our Services</h1>
        </Col>
      </Row>
      
      {/* Second Section */}
      <Row className="align-items-start custom-section no-padding">
        <Col xs={12} md={6} className="text-section website-text">
          <h2 className="website-heading">Website Designing & Development</h2>
          <p className="website-description">
            We specialize in creating visually stunning and highly functional websites. 
            From idea to implementation, we bring your vision to life with innovative 
            designs and robust development.
          </p>
        </Col>
        <Col xs={12} md={6} className="image-col no-padding">
          <img src="/images/we.png" alt="development" className="full-width-image" />
        </Col>
      </Row>

      {/* Third Section */}
      <Row className="align-items-start custom-section no-padding">
        <Col xs={12} md={6} className="image-col no-padding">
          <img src="/images/dm.jpg" alt="digitalmarkteing" className="full-width-image" />
        </Col>
        <Col xs={12} md={6} className="text-section social-text">
          <h2 className="social-heading">Digital Marketing & Social Media Management</h2>
          <p className="social-description">
            Enhance your digital presence with our expert social media management 
            and marketing strategies tailored for your business.
          </p>
        </Col>
      </Row>

      {/* Fourth Section */}
      <Row className="align-items-start custom-section no-padding">
        <Col xs={12} md={6} className="text-section software-text">
          <h2 className="software-heading">Software Development</h2>
          <p className="software-description">
            Build innovative and scalable software solutions to streamline your business operations.
          </p>
        </Col>
        <Col xs={12} md={6} className="image-col no-padding">
          <img src="/images/software.jpg" alt="softwaredevelopment" className="full-width-image" />
        </Col>
      </Row>

      {/* Fifth Section */}
      <Row className="align-items-start custom-section no-padding">
        <Col xs={12} md={6} className="image-col no-padding">
          <img src="/images/appdevelopment.avif" alt="mobileapplication" className="full-width-image" />
        </Col>
        <Col xs={12} md={6} className="text-section mobile-text">
          <h2 className="mobile-heading">Mobile Application Development</h2>
          <p className="mobile-description">
            Transform your ideas into mobile applications that deliver seamless user experiences.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Content2;
