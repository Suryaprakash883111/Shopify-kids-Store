import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaLock, FaCheckCircle } from 'react-icons/fa';
import { clearCart } from '../../store/cartSlice';

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector(state => state.cart);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      dispatch(clearCart());
      navigate('/');
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="payment-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaCheckCircle size={80} color="#5cb85c" className="mb-4" />
                <h2 className="gradient-text mb-3">Payment Successful!</h2>
                <p>Thank you for your purchase. You'll be redirected to the home page shortly.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="payment-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h1 className="gradient-text mb-4">Checkout</h1>
            <p className="lead">Complete your purchase securely</p>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <Card className="card-shopify">
              <Card.Header>
                <h4><FaCreditCard className="me-2" />Payment Information</h4>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handlePayment}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="123" required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button type="submit" className="btn-shopify w-100">
                    <FaLock className="me-2" />
                    Complete Purchase - ${totalAmount.toFixed(2)}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="card-shopify">
              <Card.Header>
                <h5>Order Summary</h5>
              </Card.Header>
              <Card.Body>
                {items.map(item => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span>{item.title} x{item.quantity}</span>
                    <span>${item.totalPrice.toFixed(2)}</span>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Total: ${totalAmount.toFixed(2)}</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
