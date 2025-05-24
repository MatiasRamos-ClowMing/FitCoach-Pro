import React from 'react';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isUser ? 'bg-blue-700 text-white' : 'bg-gray-700 text-black'}`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;

// DONE