import React from 'react';

const ReviewCard = ({ review }) => {
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    ));
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src={review.profilePhoto} 
          alt={review.clientName}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-yellow-400"
        />
        <div>
          <h3 className="font-bold">{review.clientName}</h3>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>
      <p className="text-gray-400 mb-2">{review.comment}</p>
      <p className="text-sm text-gray-500">{review.date}</p>
    </div>
  );
};

export default ReviewCard;