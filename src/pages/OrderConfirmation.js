import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <div className="success-icon">
        <div className="checkmark">✓</div>
      </div>
      <h1>Order Placed Successfully!!</h1>
      <p>We have sent you an email with the order details.</p>
      <Link to="/" className="continue-shopping-btn">
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderConfirmation;