import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { toggleCart } from '../../store/cartSlice';
import './Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(state => state.cart);

  const handleCartToggle = () => {
    dispatch(toggleCart());
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const cartIconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <BootstrapNavbar 
        expand="lg" 
        className="custom-navbar"
        expanded={expanded}
        onToggle={setExpanded}
        fixed="top"
      >
        <Container>
          <motion.div
            variants={logoVariants}
            whileHover="hover"
          >
            <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand-custom">
              <span className="brand-text gradient-text">Shopify</span>
              <span className="brand-subtitle">Kids Store</span>
            </BootstrapNavbar.Brand>
          </motion.div>

          <div className="d-flex align-items-center d-lg-none">
            <motion.button
              className="cart-btn-mobile me-3"
              onClick={handleCartToggle}
              variants={cartIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaShoppingCart size={20} />
              {totalQuantity > 0 && (
                <Badge bg="danger" className="cart-badge">
                  {totalQuantity}
                </Badge>
              )}\n            </motion.button>

            <BootstrapNavbar.Toggle 
              aria-controls="basic-navbar-nav"
              className="navbar-toggler-custom"
            >
              {expanded ? <FaTimes /> : <FaBars />}
            </BootstrapNavbar.Toggle>
          </div>

          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.span>
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/about" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.span>
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/services" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.span>
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/products" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Products
                </motion.span>
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.span>
              </Nav.Link>
            </Nav>

            <div className="navbar-actions d-none d-lg-flex">
              <motion.button
                className="search-btn me-3"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch size={18} />
              </motion.button>

              <motion.button
                className="cart-btn"
                onClick={handleCartToggle}
                variants={cartIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaShoppingCart size={20} />
                {totalQuantity > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="cart-badge-container"
                  >
                    <Badge bg="danger" className="cart-badge">
                      {totalQuantity}
                    </Badge>
                  </motion.div>
                )}
              </motion.button>
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </motion.div>
  );
};

export default Navbar;
