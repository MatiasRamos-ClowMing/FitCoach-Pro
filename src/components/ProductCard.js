import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
          {product.rating} ★
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-yellow-400">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${product.price}</span>
          <button className="px-3 py-1 bg-yellow-400 text-black text-sm rounded-lg hover:bg-yellow-500 transition-colors">
            Añadir
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.colors.map((color, index) => (
            <span 
              key={index} 
              className="w-4 h-4 rounded-full border border-gray-700"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;