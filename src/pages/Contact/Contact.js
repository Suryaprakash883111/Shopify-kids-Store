import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="gradient-text mb-4">Contact Us</h1>
            <p className="lead">
              Get in touch with us for any questions about our products or services.
              We're here to help make your shopping experience amazing!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
