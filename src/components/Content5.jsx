import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Content5.css';

function Content5() {
  return (
    <Container fluid className="content5 text-center py-5">
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1 id="content5-h1">Ready to bring your idea to life!!</h1>
        </Col>
        <Col xs={12}>
          <h1 id="content5-h2">Just pick up your phone and call us right away!</h1>
        </Col>
        <Col xs={12}>
          <Button id="content5-button" className="mt-3">GET STARTED</Button>
        </Col>
        <Col xs={12} className="mt-4">
          <img id="construct" src="/Images/idea3.png" alt="Construct" style={{height:"25rem",width:"60rem",marginBottom:"-3rem"}} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Content5;
