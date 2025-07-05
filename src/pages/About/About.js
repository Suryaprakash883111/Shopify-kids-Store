import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="gradient-text mb-4">About Shopify Kids</h1>
            <p className="lead">
              We are dedicated to providing the best products for children of all ages.
              Our mission is to bring joy, learning, and safety to every child's life.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
