import React from 'react'
import App from '../App.css'
import '../styles/Navbar.css';

function navbar() {
  return (
    <nav class="navbar navbar-expand-md shadow-lg p-3 mb-5 bg-white rounded">
  <a class="navbar-brand"  src="your-logo.png" alt="Your Logo">Ame_Pizzaria</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default navbar





























































// import React, { useState } from "react";
// import '../styles/Navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
    
       
//     <nav className="navbar navbar-expand-lg navbar-light bg-warning">
//       <div className="container-fluid">

//         <a className="navbar-brand" href="/"><span className="pizza">🍕</span><strong className="ame_pizza">Ame_Pizzaria</strong></a>
//         <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/menu">Menu</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;















