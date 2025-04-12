// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Checkout({ cart, removeFromCart, clearCart }) {
//   const navigate = useNavigate();
  
//   const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
//   const handlePlaceOrder = async () => {
//     try {
//       const orderData = {
//         items: cart,
//         amount: totalAmount,
//         date: new Date().toISOString()
//       };
      
//       const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(orderData),
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to place order');
//       }
      
//       // Clear cart and navigate to confirmation page
//       clearCart();
//       navigate('/order-confirmation');
      
//     } catch (error) {
//       console.error('Error placing order:', error);
//       alert('Failed to place order. Please try again.');
//     }
//   };
  
//   if (cart.length === 0) {
//     return (
//       <div className="checkout-empty">
//         <h2>Your cart is empty</h2>
//         <p>Add items to your cart to checkout</p>
//       </div>
//     );
//   }
  
//   return (
//     <div className="checkout-page">
//       <h1>Checkout</h1>
      
//       <div className="checkout-container">
//         <div className="cart-items">
//           <h2>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h2>
          
//           {cart.map(item => (
//             <div key={item.id} className="cart-item">
//               <div className="item-image">
//                 <img src={item.preview} alt={item.name} />
//               </div>
//               <div className="item-details">
//                 <h3>{item.name}</h3>
//                 <p>x{item.quantity}</p>
//                 <p>Amount: Rs. {item.price * item.quantity}</p>
//                 <button 
//                   className="remove-btn" 
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="order-summary">
//           <h2>Total Amount</h2>
//           <p className="total-amount">Amount: Rs. {totalAmount}</p>
//           <button 
//             className="place-order-btn" 
//             onClick={handlePlaceOrder}
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, removeFromCart, clearCart }) {
  const navigate = useNavigate();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderError, setOrderError] = useState(null);
  
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  const handlePlaceOrder = async () => {
    if (isPlacingOrder) return; // Prevent multiple clicks
    
    setIsPlacingOrder(true);
    setOrderError(null);
    
    try {
      const orderData = {
        items: cart,
        amount: totalAmount,
        date: new Date().toISOString()
      };
      
      /* 
      const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
      */
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      clearCart();
      navigate('/order-confirmation');
      
    } catch (error) {
      console.error('Error placing order:', error);
      setOrderError('Failed to place order. Please try again.');
    } finally {
      setIsPlacingOrder(false);
    }
  };
  
  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <p>Add items to your cart to checkout</p>
      </div>
    );
  }
  
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="cart-items">
          <h2>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h2>
          
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.preview} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>x{item.quantity}</p>
                <p>Amount: Rs. {item.price * item.quantity}</p>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="order-summary">
          <h2>Total Amount</h2>
          <p className="total-amount">Amount: Rs. {totalAmount}</p>
          {orderError && <p className="error-message">{orderError}</p>}
          <button 
            className="place-order-btn" 
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
          >
            {isPlacingOrder ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;