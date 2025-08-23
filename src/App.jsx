import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer.jsx';
import { useAppContext } from './context/AppContext';  
import Login from './components/Login.jsx';  
import AllProducts from './pages/AllProducts.jsx';
import ProductCatagory from './pages/ProductCatagory.jsx';
import ProductDetails from './pages/ProductDetails.jsx'; 

const App = () => {
  const { pathname } = useLocation();
  const isSellerPath = pathname.includes("seller"); 
  const containerClasses = isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32";
  const { showUserLogin } = useAppContext();

  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />
      <div className={containerClasses}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCatagory />} />
          <Route path="/products/:category/:id" element={<ProductDetails/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
