"use client"
import React, { useState } from 'react';

const simulateChat = async (userInput) => {
  // You can add logic to generate responses based on user input here
  return new Promise((resolve) => {
    setTimeout(() => {
      let botResponse = '';
      // Add your response generation logic based on userInput
      if (userInput.toLowerCase().includes('hello')) {
        botResponse = 'Hello there!';
      } else if (userInput.toLowerCase().includes('how are you')) {
        botResponse = "I'm just a bot, but I'm doing fine!";
      } else {
        botResponse = 'I did not understand your query.';
      }
      resolve(`:>${botResponse}`);
    }, 1000);
  });
};


function Chatbot({ isOpen, onToggle }) {
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
    <div className={`chatbot-panel ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header grid grid-cols-2 gap-10 bg-gray-700 text-white p-4">
        <h2 className="text-lg font-bold">Chatbot</h2>
        <button onClick={onToggle} className="text-sm text-red-500 hover:text-white cursor-pointer">
          Close
        </button>
      </div>
      <div className="h-52 chatbot-messages p-4 bg-white overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.type === 'user' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input bg-white p-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          className="flex-1 px-2 py-1 border rounded-md mr-2"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white py-2 px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
