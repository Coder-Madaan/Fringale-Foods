import React from 'react';
import FoodCard from './FoodCard';
import { foods } from '../assets/data';

const FoodMenu = ({ cart, onAddToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center my-5 p-4 font-bold text-3xl">Food Menu</h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center">
        {foods.map((foodItem) => (
          <FoodCard key={foodItem.id} foodItem={foodItem} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
