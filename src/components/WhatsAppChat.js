import React, { useState } from 'react';

const WhatsAppChat = ({ isVisible, onClose }) => { // Recibe onClose
  const [message, setMessage] = useState('');

  const sendToWhatsApp = () => {
    if (message.trim() !== '') {
      const phone = '573332755764'; // Número actualizado
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      alert('Por favor escribe un mensaje.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-white border border-gray-300 p-3 rounded-xl shadow-lg z-50 flex flex-col">
      <div className="flex justify-end mb-2">
        <button 
          onClick={onClose} // Llama a onClose al hacer clic
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
        >
          Salir
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-3 py-2 w-48 rounded-lg border border-gray-300 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
        />
        <button 
          onClick={sendToWhatsApp} 
          className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;