import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();
  const collapseRef = useRef();

  // Function to close the navbar on link click
  const handleNavLinkClick = () => {
    if (window.innerWidth < 992 && collapseRef.current) {
      // Bootstrap 5 Collapse API
      const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current);
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0F172A" }}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/">ZaykaExpress</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon shadow"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
              {/* ref={collapseRef} */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/menu" onClick={handleNavLinkClick}>Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart" onClick={handleNavLinkClick}>
                Cart<span className="badge bg-warning text-dark">{cartItems.length}</span>
                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" onClick={handleNavLinkClick}>About</Link>
            </li>
            <li className="nav-item "  >
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item " >
              <Link className="nav-link text-white" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;










// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// function Navbar() {
//   const { cartItems } = useCart();



//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0F172A" }}>
//       <div className="container">
//         <Link className="navbar-brand text-white" to="/">ZaykaExpress</Link>
//         {/* Toggler button for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon shadow "></span>
//         </button>
//         {/* Responsive navbar links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/">Home</Link>
//                </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/menu">Menu</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/cart">
//                 Cart <span className="badge bg-warning text-dark">{cartItems.length}</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark "  style={{ backgroundColor: "#0F172A" }}>
//       <div className="container">
//         <Link className="navbar-brand text-white" to="/">ZaykaExpress</Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto text-white">
//             <li className="nav-item">
//                 <Link className="nav-link " to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/menu">Menu</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">
//                 Cart <span className="badge bg-warning text-dark">{cartItems.length}</span>
//               </Link>        
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link " to="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;