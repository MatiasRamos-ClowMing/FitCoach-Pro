import React, { useState } from 'react';

const ProductFilter = ({ categories, onFilter }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleFilter = (category) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
      <button 
        onClick={() => handleFilter('all')}
        className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeCategory === 'all' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
      >
        Todos
      </button>
      {categories.map(category => (
        <button 
          key={category}
          onClick={() => handleFilter(category)}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeCategory === category ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;