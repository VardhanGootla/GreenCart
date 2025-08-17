import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer.jsx';

const App = () => {
  const { pathname } = useLocation();
  const isSellerPath = pathname.includes("seller"); // or pathname.startsWith("/seller")
  const containerClasses = isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32";

  return (
    <div>
      {!isSellerPath && <Navbar />}
      <Toaster />
      <div className={containerClasses}>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  );
};

export default App;
