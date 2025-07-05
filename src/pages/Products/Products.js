import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { addToCart } from '../../store/cartSlice';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector(state => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        color={index < Math.floor(rating) ? '#ffc107' : '#e4e5e9'} 
        size={14}
      />
    ));
  };

  return (
    <div className="products-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <motion.h1 
              className="gradient-text mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Kids Products
            </motion.h1>
            <motion.p 
              className="lead"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our amazing collection of kids' products
            </motion.p>
          </Col>
        </Row>

        <Row>
          {filteredProducts.map((product, index) => (
            <Col key={product.id} lg={4} md={6} className="mb-4">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-shopify h-100 product-card">
                  <div className="product-image-container">
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      className="product-image"
                      alt={product.title}
                    />
                    <div className="product-overlay">
                      <Button
                        className="btn-shopify quick-add-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        <FaShoppingCart className="me-2" />
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <div className="product-header">
                      <Badge bg="info" className="product-category mb-2">
                        {product.category}
                      </Badge>
                      <Badge bg="secondary" className="product-age mb-2 ms-2">
                        {product.age}
                      </Badge>
                    </div>
                    
                    <Card.Title className="product-title">
                      {product.title}
                    </Card.Title>
                    
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>
                    
                    <div className="product-rating mb-3">
                      {renderStars(product.rating)}
                      <span className="rating-text ms-2">
                        ({product.rating})
                      </span>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="product-price mb-3">
                        <h5 className="price-text">${product.price.toFixed(2)}</h5>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          className="btn-shopify w-100 add-to-cart-btn"
                          onClick={() => handleAddToCart(product)}
                        >
                          <FaShoppingCart className="me-2" />
                          Add to Cart
                        </Button>
                      </motion.div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
