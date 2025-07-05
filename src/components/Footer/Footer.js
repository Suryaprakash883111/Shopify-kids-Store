import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, url: '#', color: '#1877f2' },
    { icon: FaTwitter, url: '#', color: '#1da1f2' },
    { icon: FaInstagram, url: '#', color: '#e4405f' },
    { icon: FaYoutube, url: '#', color: '#ff0000' }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">
                <span className="gradient-text">Shopify</span> Kids Store
              </h5>
              <p className="footer-description">
                Your trusted partner for premium kids' products. We bring joy, 
                learning, and safety to every child's life through our carefully 
                curated collection.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      whileHover={{ 
                        scale: 1.2, 
                        color: social.color,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Quick Links</h6>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Categories</h6>
              <ul className="footer-links">
                <li><a href="/products">Toys</a></li>
                <li><a href="/products">Clothes</a></li>
                <li><a href="/products">Shoes</a></li>
                <li><a href="/products">Accessories</a></li>
                <li><a href="/products">Educational</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Support</h6>
              <ul className="footer-links">
                <li><a href="#help">Help Center</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#size-guide">Size Guide</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Company</h6>
              <ul className="footer-links">
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#sitemap">Sitemap</a></li>
              </ul>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom">
          <Col md={6}>
            <p className="copyright">
              © {currentYear}  Surya Prakas Prakash883111@gmail.com    All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="made-with-love">
              Made with <FaHeart className="heart-icon" /> for amazing kids
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
