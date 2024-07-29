import React from 'react';
import Navbar from '../components/Navbar';
const Checkout = ({ cart }) => {
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-center my-5 p-4 font-bold text-3xl">Checkout</h1>
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
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
            {cart.length > 0 && (
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
              >
                Confirm Purchase
              </button>
            )}
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Checkout;
