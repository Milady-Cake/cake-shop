import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import MyOrders from './pages/MyOrders/MyOrders'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/Verify/Verify'
import BakeryUI from './pages/Home/Hero';
import ContactSection from './pages/Home/ContactUs';
import ProductSection from './pages/Home/Category';
import BestSelling from './pages/Home/BestSelling';
import ProductDetials from './pages/Home/ProductDetials';
import "./index.css"; // Import global styles
import CheckoutForm from './pages/Home/CheckOut'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app px-2">

        <Navbar setShowLogin={setShowLogin} />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/detail/:id" element={<ProductDetials/>} />

{/* 
          <Route path="/hero" element={<BakeryUI />} />
          <Route path="/naav" element={<ToplineNavbar />} />
        
          <Route path="/card" element={<ProductSection/>} />
          <Route path="/best" element={<BestSelling/>} /> */}
        
          <Route path="check" element={<CheckoutForm/>} />

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
