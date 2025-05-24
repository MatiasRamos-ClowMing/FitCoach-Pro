import React from 'react';

const PaymentMethodCard = ({ method }) => {
  return (
    <div className={`bg-gray-700 text-white p-4 rounded-xl shadow-md ${method.primary ? 'border-2 border-yellow-400' : ''}`}>
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{method.type}</h3>
        {method.primary && (
          <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
            Principal
          </span>
        )}
      </div>
      <p className="text-gray-400 mt-2">
        {method.lastFour || method.email || method.account}
      </p>
    </div>
  );
};

export default PaymentMethodCard;