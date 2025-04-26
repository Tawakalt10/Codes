// src/components/Cart.jsx
import React, { useState } from "react";
import styles from "./Cart.module.css";

// Sample data (replace with your actual data source)
const initialCartItems = [
  { id: 1, medicine: "Paracetamol", mg: "500Mg", quantity: "24 Tablets", price: 1000 },
  { id: 2, medicine: "Ibuprofen", mg: "400Mg", quantity: "1 Pack", price: 1000 },
  { id: 3, medicine: "Atrovastatin", mg: "200Mg", quantity: "30 Tablets", price: 38000 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to handle deleting an item
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Function to handle editing an item (placeholder)
  const handleEdit = (id) => {
    alert(`Edit item with ID: ${id}`);
    // Add your edit logic here (e.g., open a modal to edit the item)
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.header}>
        <span className={styles.user}>John Doe</span>
        <span className={styles.date}>10/02/2025</span>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>MG</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.medicine}</td>
              <td>{item.mg}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className={styles.actionButton}
                  onClick={() => handleDelete(item.id)}
                  aria-label="Delete item"
                >
                  ✕
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => handleEdit(item.id)}
                  aria-label="Edit item"
                >
                  ▼
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.checkoutContainer}>
        <button className={styles.checkoutButton}>Check out</button>
      </div>
    </div>
  );
};

export default Cart;