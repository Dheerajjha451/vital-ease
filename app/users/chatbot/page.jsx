'use client'
import React, { useState, useEffect } from 'react';

const simulateChat= async (userInput) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const botResponse = `Bot reply:question "${userInput}" and answer`;
      resolve(botResponse);
    }, 1000);
  });
};

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() !== '') {
      const newMessages = [...messages, { text: inputText, type: 'user' }];
      setMessages(newMessages);
      const botResponse = await simulateChat(inputText);
      setMessages([...newMessages, { text: botResponse, type: 'bot' }]);
      setInputText('');
    }
  };

  const handleClearHistory = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/5 bg-gray-700 text-white p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Chat History</h2>
          <button
            onClick={handleClearHistory}
            className="text-sm text-gray-300 hover:text-white cursor-pointer"
          >
            Clear History
          </button>
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.type === 'user' ? 'text-blue-500' : 'text-gray-300'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="w-4/5 bg-white p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Chatbot</h2>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`bg-slate-300 rounded p-2 ${
                  message.type === 'user' ? 'bg-blue-500 text-black' : ''
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-1 right-10 ">
        <div className="chatbot-input flex items-center">
          <input
            type="text"
            placeholder="Type your message.........."
            value={inputText}
            onChange={handleInputChange}
            className="flex-1 px-32 py-1 border rounded-md mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
