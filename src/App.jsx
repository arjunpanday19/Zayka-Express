import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import { CartProvider } from "./context/CartContext";
import Signup from "./pages/Signup";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />

            
          </Routes>
        </main>
        <br /> <br /><br />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
