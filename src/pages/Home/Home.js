import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <Container>
          <Row className="min-vh-100 align-items-center">
            <Col lg={6}>
              <motion.div
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="hero-content"
              >
                <motion.h1 
                  className="hero-title"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Welcome to <span className="gradient-text">Shopify</span>
                  <br />
                  <span className="hero-subtitle">Kids Store</span>
                </motion.h1>
                
                <motion.p 
                  className="hero-description"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Discover amazing products for kids of all ages. From toys to clothes, 
                  we have everything your little ones need to grow, learn, and play!
                </motion.p>
                
                <motion.div 
                  className="hero-buttons"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button 
                      className="btn-shopify me-3"
                      onClick={() => navigate('/products')}
                    >
                      Shop Now
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button 
                      className="btn-secondary-shopify"
                      onClick={() => navigate('/about')}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="floating-elements">
                  <motion.div 
                    className="floating-toy toy-1"
                    animate={{ 
                      y: [-20, 20, -20],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🧸
                  </motion.div>
                  
                  <motion.div 
                    className="floating-toy toy-2"
                    animate={{ 
                      y: [20, -20, 20],
                      rotate: [0, -5, 0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    🚗
                  </motion.div>
                  
                  <motion.div 
                    className="floating-toy toy-3"
                    animate={{ 
                      y: [-15, 25, -15],
                      x: [-5, 5, -5]
                    }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    🎨
                  </motion.div>
                  
                  <motion.div 
                    className="floating-toy toy-4"
                    animate={{ 
                      y: [25, -15, 25],
                      rotate: [0, 10, 0, -10, 0]
                    }}
                    transition={{ 
                      duration: 4.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    ⚽
                  </motion.div>
                </div>
                
                <div className="hero-image-main">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop" 
                    alt="Happy Kids"
                    className="main-hero-img"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <motion.h2 
                className="section-title"
                data-aos="fade-up"
              >
                Why Choose <span className="gradient-text">Shopify Kids</span>?
              </motion.h2>
              <motion.p 
                className="section-description"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We're committed to providing the best products for your children
              </motion.p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4">
              <motion.div 
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="feature-icon">🛡️</div>
                <h4>Safe & Secure</h4>
                <p>All our products are tested for safety and quality standards</p>
              </motion.div>
            </Col>
            
            <Col md={4} className="mb-4">
              <motion.div 
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="feature-icon">🚚</div>
                <h4>Fast Shipping</h4>
                <p>Quick and reliable delivery to your doorstep</p>
              </motion.div>
            </Col>
            
            <Col md={4} className="mb-4">
              <motion.div 
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="feature-icon">💝</div>
                <h4>Great Value</h4>
                <p>Premium quality products at affordable prices</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <motion.div
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <h2 className="cta-title">
                  Ready to Start Shopping?
                </h2>
                <p className="cta-description">
                  Join thousands of happy parents who trust Shopify Kids for their children's needs
                </p>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    className="btn-shopify btn-lg"
                    onClick={() => navigate('/products')}
                  >
                    Explore Products
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
