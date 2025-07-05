import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <div className="services-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="gradient-text mb-4">Our Services</h1>
            <p className="lead">
              We offer premium services for all your kids' needs including fast shipping,
              quality assurance, and excellent customer support.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
