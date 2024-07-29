import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodMenu from './components/FoodMenu';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Search from './pages/Search'; // Import the Search component
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (foodItem) => {
    setCart((prevCart) => [...prevCart, foodItem]);
    toast.success(`${foodItem.name} added to cart!`, {
      position: 'top-right',
    });
  };

  const handleRemoveFromCart = (foodItem) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== foodItem.id));
    toast.info(`${foodItem.name} removed from cart!`, {
      position: 'top-right',
    });
  };

  return (
    <BrowserRouter>
      
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/menu" element={<FoodMenu onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
