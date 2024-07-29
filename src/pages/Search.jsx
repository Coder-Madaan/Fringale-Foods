import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import restaurants from '../assets/data';
import Navbar from '../components/Navbar';
const Search = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    setSearchTerm(searchTermFromUrl || '');
  }, [location.search]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(restaurants);
    }
  }, [searchTerm]);

  return (
    <>
        <Navbar />
      <div className="container mx-auto p-4">
      <h1 className="text-center my-5 p-4 font-bold text-3xl">Search Results:</h1>
      {filteredRestaurants.length > 0 ? (
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center">
          {filteredRestaurants.map((restaurant) => (
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
      ) : (
        <p className="text-center text-gray-600">Sorry No restaurants found of this Name.</p>
      )}
    </div>
    </>
  );
};

export default Search;
