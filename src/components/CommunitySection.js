import React, { useState, useEffect } from 'react'; // Importar useEffect
import subscriptionPlans from '../mock/subscriptionPlans';
import blogPosts from '../mock/blogPosts';
import faqs from '../mock/faqs';
import SubscriptionCard from './SubscriptionCard';
import BlogPostCard from './BlogPostCard';
import FaqItem from './FaqItem';
import ChatMessage from './ChatMessage';

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('subscription');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // Iniciar con array vacío

  useEffect(() => {
    // Agregar mensaje de bienvenida al cargar el componente
    setMessages([{ text: "Bienvenido a Loren fitness, en un momento te ayudaremos.", isUser: false }]);
  }, []); // El array vacío asegura que solo se ejecute una vez al montar

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isUser: true }]);
      setMessage('');
      // Simular respuesta automática (opcional, si quieres una segunda respuesta)
      // setTimeout(() => {
      //   setMessages(prev => [...prev, { text: "Claro, ¿qué información necesitas?", isUser: false }]);
      // }, 1000);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('subscription')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'subscription' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Suscripciones
        </button>
        <button 
          onClick={() => setActiveTab('blog')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'blog' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Blog
        </button>
        <button 
          onClick={() => setActiveTab('faq')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'faq' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Preguntas Frecuentes
        </button>
        <button 
          onClick={() => setActiveTab('chat')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'chat' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Chat en Vivo
        </button>
      </div>

      {activeTab === 'subscription' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map(plan => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}

      {activeTab === 'blog' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {activeTab === 'faq' && (
        <div className="max-w-2xl mx-auto">
          {faqs.map(faq => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </div>
      )}

      {activeTab === 'chat' && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-md p-4 mb-4 h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-yellow-400 text-black rounded-r-lg hover:bg-yellow-500"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunitySection;

// DONE