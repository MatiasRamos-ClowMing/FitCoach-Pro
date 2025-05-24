import React, { useState } from 'react';
import fitnessProducts from '../mock/fitnessProducts';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';

const FitShopSection = () => {
  const categories = [...new Set(fitnessProducts.map(product => product.category))];
  const [filteredProducts, setFilteredProducts] = useState(fitnessProducts);

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredProducts(fitnessProducts);
    } else {
      setFilteredProducts(fitnessProducts.filter(product => product.category === category));
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Tienda FitShop</h2>
      
      <ProductFilter categories={categories} onFilter={handleFilter} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FitShopSection;