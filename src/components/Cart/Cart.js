import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaShoppingBag } from 'react-icons/fa';
import { toggleCart, removeFromCart, updateQuantity } from '../../store/cartSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount, isOpen } = useSelector(state => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleCheckout = () => {
    dispatch(toggleCart());
    navigate('/payment');
  };

  const cartVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: 100,
      transition: { duration: 0.2 }
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="cart-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => dispatch(toggleCart())}
          />

          {/* Cart Sidebar */}
          <motion.div
            className="cart-sidebar"
            variants={cartVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="cart-header">
              <h3 className="cart-title">
                <FaShoppingBag className="me-2" />
                Shopping Cart
              </h3>
              <button
                className="cart-close-btn"
                onClick={() => dispatch(toggleCart())}
              >
                <FaTimes />
              </button>
            </div>

            <div className="cart-content">
              {items.length === 0 ? (
                <div className="empty-cart">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  >
                    <FaShoppingBag size={60} className="empty-cart-icon" />
                  </motion.div>
                  <h4>Your cart is empty</h4>
                  <p>Add some amazing kids products to get started!</p>
                  <Button
                    className="btn-shopify mt-3"
                    onClick={() => {
                      dispatch(toggleCart());
                      navigate('/products');
                    }}
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    <AnimatePresence>
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          className="cart-item"
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          layout
                        >
                          <div className="cart-item-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          
                          <div className="cart-item-details">
                            <h6 className="cart-item-title">{item.title}</h6>
                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                            
                            <div className="quantity-controls">
                              <button
                                className="quantity-btn"
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <FaMinus size={10} />
                              </button>
                              
                              <span className="quantity-display">{item.quantity}</span>
                              
                              <button
                                className="quantity-btn"
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              >
                                <FaPlus size={10} />
                              </button>
                            </div>
                          </div>
                          
                          <div className="cart-item-actions">
                            <div className="cart-item-total">
                              ${item.totalPrice.toFixed(2)}
                            </div>
                            <button
                              className="remove-btn"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <FaTrash size={12} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  <div className="cart-footer">
                    <div className="cart-total">
                      <div className="total-row">
                        <span>Subtotal:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                      </div>
                      <div className="total-row">
                        <span>Shipping:</span>
                        <span>Free</span>
                      </div>
                      <div className="total-row total-final">
                        <strong>Total: ${totalAmount.toFixed(2)}</strong>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="btn-shopify checkout-btn w-100"
                        onClick={handleCheckout}
                      >
                        Proceed to Checkout
                      </Button>
                    </motion.div>
                    
                    <Button
                      variant="outline-secondary"
                      className="continue-shopping-btn w-100 mt-2"
                      onClick={() => {
                        dispatch(toggleCart());
                        navigate('/products');
                      }}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
