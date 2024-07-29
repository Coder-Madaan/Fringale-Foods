import React from 'react';

const FoodCard = ({ foodItem, onAddToCart }) => {
  return (
    <div className="max-w-sm w-full sm:w-64 lg:w-72 h-96 rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={foodItem.image}
        alt={foodItem.name}
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{foodItem.name}</div>
        <p className="text-gray-700 text-base">Price: ${foodItem.price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => onAddToCart(foodItem)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
