import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import restaurants from '../assets/data';
import FoodMenu from '../components/FoodMenu';

const Home = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/?searchTerm=${searchTerm}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-center my-5 p-4 font-bold text-3xl sm:text-4xl lg:text-5xl text-indigo-600 shadow-sm">
          Famous Restaurants
        </h1>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center m-5 p-4">
          {restaurants
            .filter((restaurant) =>
              restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((restaurant) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                key={restaurant.id}
              >
                <div className="rounded overflow-hidden shadow-lg bg-white">
                  <img
                    className="w-full h-48 object-cover"
                    src={restaurant.image}
                    alt={restaurant.name}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{restaurant.name}</div>
                    <p className="text-gray-700 text-base">
                      Rating: {restaurant.rating} / 5
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <FoodMenu onAddToCart={onAddToCart} />
      </div>
    </>
  );
};

export default Home;
