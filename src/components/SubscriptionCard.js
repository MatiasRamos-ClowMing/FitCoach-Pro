import React from 'react';

const SubscriptionCard = ({ plan }) => {
  return (
    <div className={`bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 ${plan.popular ? 'border-yellow-400' : 'border-transparent'}`}>
      {plan.popular && (
        <div className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
          POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-3xl font-bold mb-6 text-yellow-400">${plan.price}<span className="text-sm font-normal text-gray-400">/mes</span></p>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
        Seleccionar Plan
      </button>
    </div>
  );
};

export default SubscriptionCard;