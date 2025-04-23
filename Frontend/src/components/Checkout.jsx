// Cart.js
import React from 'react';
import "../styles/checkout.css";


const Cart = () => {
  const cartItems = [
    { medicine: 'Paracetamol', mg: '500Mg', quantity: '24 Tablets', price: 1000 },
    { medicine: 'Ibuprofen', mg: '400Mg', quantity: '1 Pack', price: 1000 },
    { medicine: 'Atrovastatin', mg: '200Mg', quantity: '30 Tablets', price: 38000 },
  ];

  return (
    <div className="cart-container">
      <div className="cart-header">
        <span className="user-name">John Doe</span>
        <span className="date">10/02/2025</span>
      </div>
      <div className="cart-table">
        <div className="table-header">
          <span>Medicine</span>
          <span>MG</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className="table-row">
            <span>{item.medicine}</span>
            <span>{item.mg}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
            <span className="actions">
              <button className="action-btn">×</button>
              <button className="action-btn">✓</button>
            </span>
          </div>
        ))}
      </div>
      <div className="checkout">
        <button className="checkout-btn">Check out</button>
      </div>
    </div>
  );
};

export default Cart;