import React, { useState, useEffect, useRef } from 'react';
import { getChatbotResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { XIcon } from './Icons';

interface ChatbotProps {
  closeChatbot: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ closeChatbot }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: "Hello! I am the KaSha AI Planner, your personal event assistant. How can I help you plan your perfect event today?" }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getChatbotResponse([...messages, userMessage]);
      const modelMessage: ChatMessage = { role: 'model', parts: [{ text: responseText }] };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', parts: [{ text: "Sorry, I'm having trouble connecting right now." }] };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 bg-black/50" onClick={closeChatbot}>
      <div className="relative w-full max-w-md h-[70vh] flex flex-col bg-brand-light dark:bg-brand-dark rounded-lg shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <header className="p-4 flex justify-between items-center bg-brand-light-gray dark:bg-brand-gray border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-heading text-lg font-bold">
            Ka<span className="text-brand-gold">Sha</span> AI Planner
          </h3>
          <button onClick={closeChatbot} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
            <XIcon />
          </button>
        </header>
        
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${msg.role === 'user' ? 'bg-brand-gold text-brand-dark rounded-br-none' : 'bg-brand-light-gray dark:bg-brand-gray rounded-bl-none'}`}>
                  <p className="text-sm">{msg.parts[0].text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-sm rounded-lg px-4 py-2 bg-brand-light-gray dark:bg-brand-gray rounded-bl-none">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse [animation-delay:0.4s]"></div>
                    </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-brand-light-gray dark:bg-brand-gray">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about our services..."
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full py-2 px-4 focus:ring-brand-gold focus:border-brand-gold"
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="bg-brand-gold text-brand-dark p-2 rounded-full disabled:opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;