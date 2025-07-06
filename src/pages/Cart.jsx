import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 border p-2">
              <div>
                <h5>{item.name}</h5>
                <p>₹{item.price} x {item.qty}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h4>Total: ₹{total}</h4>
          <Link to="/checkout" className="btn btn-success" style={{ backgroundColor: "#0F172A" }}>Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;