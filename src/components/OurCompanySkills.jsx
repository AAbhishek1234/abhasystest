import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ourcompany.css"; // Optional CSS file for additional styling.

const OurCompanySkills = () => {
  return (
    <Container fluid className=" text-center my-5" style={{background:"#FFFFF0"}}>
      {/* Title Section */}
      <h1 className="strength-fw-bold mb-3">Our Strength</h1>
      <p className=" stp-text-muted mb-5" style={{fontSize:"1.2rem",color:"black"}}>
      We leverage cutting-edge tools and technologies to stay ahead in the competitive market.<br/>
      By optimizing workflows and focusing on results, we consistently deliver exceptional value.

      </p>
      <Row className="align-items-center">
        {/* Left Column */}
        <Col md={4} className="mb-4">
          <div className="d-flex align-items-start mb-4">
            <div
              className="icon bg-warning text-white me-3 p-3 rounded-circle"
              style={{ height: "2px", width: "5px" }}
            >
              <i
                className="bi bi-lightning-charge-fill"
                style={{
                  height: "2px",
                  width: "5px",
                  marginTop: "-1.5rem",
                  marginLeft: "-9px",
                }}
              ></i>
            </div>
            <div>
              <h5 className="fw-bold" style={{ marginTop: "1rem" }}>
                Latest Technology
              </h5>
              <p style={{fontSize:"1.1rem",color:"black"}}>
                Our team is skilled in implementing the latest advancements,
                ensuring innovation and efficiency in every project.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <div
              className="icon bg-info text-white me-3 p-3 rounded-circle"
              style={{ height: "2px", width: "5px" }}
            >
              <i
                className="bi bi-bar-chart-line-fill"
                style={{
                  height: "2px",
                  width: "5px",
                  marginTop: "-1.5rem",
                  marginLeft: "-9px",
                }}
              ></i>
            </div>
            <div>
              <h5 className="fw-bold" style={{ marginTop: "1rem" }}>
                High Performance
              </h5>
              <p style={{fontSize:"1.1rem",color:"black"}}>
                Our commitment to excellence drives high-performance solutions
                tailored to meet client needs.
              </p>
            </div>
          </div>
        </Col>

        {/* Center Image */}
        <Col md={4} className="mb-4">
          <img
            src="/Images/growth.jpg" /* Replace with your actual image */
            alt="Skills Illustration"
            className="img-fluid"
            style={{ borderRadius: "5px" }}
          />
        </Col>

        {/* Right Column */}
        <Col md={4} className="mb-4">
          <div className="d-flex align-items-start mb-4">
            <div
              className="icon bg-danger text-white me-3 p-3 rounded-circle"
              style={{ height: "2px", width: "6px" }}
            >
              <i
                className="bi bi-headset"
                style={{
                  height: "2px",
                  width: "5px",
                  marginTop: "-1.5rem",
                  marginLeft: "-9px",
                }}
              ></i>
            </div>
            <div>
              <h5 className="fw-bold" style={{ marginTop: "1rem" }}>
                24x7 Customer Support
              </h5>
              <p style={{fontSize:"1.1rem",color:"black"}}>
                With a customer-first approach, we provide personalized
                assistance to address every challenge.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <div
              className="icon bg-primary text-white me-3 p-3 rounded-circle"
              style={{ height: "2px", width: "6px" }}
            >
              <i
                className="bi bi-people-fill"
                style={{
                  height: "2px",
                  width: "5px",
                  marginTop: "-1.5rem",
                  marginLeft: "-9px",
                }}
              ></i>
            </div>
            <div>
              <h5 className="fw-bold" style={{ marginTop: "1rem" }}>
                Dedicated Employees
              </h5>
              <p style={{fontSize:"1.1rem",color:"black"}}>
                We value teamwork and dedication, creating a thriving work
                culture that prioritizes client satisfaction.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurCompanySkills;
