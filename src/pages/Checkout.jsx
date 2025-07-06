import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // adjust path if needed
import { useNavigate } from "react-router-dom"; // Add this import

function loadRazorpayScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function Checkout() {
  const { cartItems } = useCart();
  const [address, setAddress] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false); // New state
  const navigate = useNavigate(); // For navigation

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handlePayment = async () => {
    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_4qIngQJb7kNgwD",
      amount: total * 100,
      currency: "INR",
      name: "Zayka Express",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        setOrderConfirmed(true); // Show confirmation message
        setTimeout(() => {
          navigate("/"); // Redirect to home after 2 seconds
        }, 2000);
      },
      prefill: {
        name: "Your Name",
        email: "email@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#0F172A",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (orderConfirmed) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Your order is confirmed</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Checkout Your Order!</h2>
      <p>Total Amount: ₹{total}</p>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="delivery-address" style={{ display: "block", marginBottom: "0.5rem" }}>
          Delivery Address
        </label>
        <input
          id="delivery-address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <button className="btn btn-success" onClick={handlePayment} style={{ backgroundColor: "#0F172A" }}>
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;
















// import React, { useState } from "react";
// import { useCart } from "../context/CartContext"; // adjust path if needed

// function loadRazorpayScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// }

// function Checkout() {
//   const { cartItems } = useCart();
//   const [address, setAddress] = useState(""); // New state for address

//   // Calculate total
//   const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

//   const handlePayment = async () => {
//     if (!address.trim()) {
//       alert("Please enter your delivery address.");
//       return;
//     }

//     const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const options = {
//       key: "rzp_test_4qIngQJb7kNgwD",
//       amount: total * 100, // Razorpay expects amount in paise
//       currency: "INR",
//       name: "Zayka Express",
//       description: "Test Transaction",
//       image: "https://your-logo-url.com/logo.png",
//       handler: function (response) {
//         alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: "Your Name",
//         email: "email@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#0F172A",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div>
//       <h2>Checkout Your Order!</h2>
//       <p>Total Amount: ₹{total}</p>
//       <div style={{ marginBottom: "1rem" }}>
//         <label htmlFor="delivery-address" style={{ display: "block", marginBottom: "0.5rem" }}>
//           Delivery Address
//         </label>
//         <input
//           id="delivery-address"
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your delivery address"
//           style={{ width: "100%", padding: "0.5rem" }}
//         />
//       </div>
//       <button className="btn btn-success" onClick={handlePayment} style={{ backgroundColor: "#0F172A" }}>
//         Pay Now
//       </button>
//     </div>
//   );
// }

// export default Checkout;