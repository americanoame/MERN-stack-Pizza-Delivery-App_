import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app">
       <Navbar/>
       <HomePage/>
    </div>
  );
}

export default App;




































// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// // import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer"
// import Homepage from './pages/HomePage';
// import Header from "./components/Header";

// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <>
//       <Router>
//       <Header/>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/menu" element={<Menu />} />
//         </Routes>
//         {/* <Footer/> */}
//       </Router>
      
//     </>
//   );
// }

// export default App;
