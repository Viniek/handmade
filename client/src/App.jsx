import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./pages/login/Signin";
import Signup from "./pages/login/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Admin from "./pages/Admin/Admin";
import Wishlist from "./pages/Wishlist/Wishlist";
import Sellers from "./pages/sellers/Sellers";
import Home from "./pages/Home/Home";
import EditProduct from "./pages/Admin/EditProduct";
import Requests from "./pages/login/Requests";
import AdminNav from "./pages/Admin/AdminNav";
import AddProduct from "./pages/Admin/Addproduct/AddProduct";
import Adminmain from "./pages/Admin/Adminmain";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Sellers" element={<Sellers />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Adminmain" element={<Adminmain />} />
        <Route path="/AdminNav" element={<AdminNav />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/EditProduct" element={<EditProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// import { useState } from 'react'
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import './App.css'
// import Signin from './pages/login/Signin'
// import Signup from './pages/login/Signup'
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Admin from './pages/Admin/Admin';
// import Buyers from './pages/Buyers/Buyers';
// import Sellers from './pages/sellers/Sellers';
// import Home from './pages/Home/Home';

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Signin " element={<Signin />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Buyers" element={<Buyers />} />
//           <Route path="/Sellers" element={<Sellers />} />
//           <Route path="/Admin " element={<Admin />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
