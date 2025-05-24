import React from 'react';

const SnackCard = ({ snack }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-3 text-yellow-400">{snack.name}</h3>
      <div className="mb-4">
        <h4 className="font-medium mb-1 text-gray-400">Ingredientes:</h4>
        <ul className="space-y-1">
          {snack.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{snack.calories} kcal</span>
        <span>{snack.prepTime} preparación</span>
      </div>
    </div>
  );
};

export default SnackCard;