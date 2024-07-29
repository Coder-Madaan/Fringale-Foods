import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Cart = ({ cart, onRemoveFromCart }) => {
  const navigate = useNavigate();

  const handleProceedToBuy = () => {
    navigate('/checkout');
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-center my-5 p-4 font-bold text-3xl">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center">
            {cart.map((item, index) => (
              <div
                key={index}
                className="max-w-sm w-full sm:w-64 lg:w-72 h-auto rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">Price: ${item.price}</p>
                  <button
                    onClick={() => onRemoveFromCart(item)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleProceedToBuy}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Proceed to Buy
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;
