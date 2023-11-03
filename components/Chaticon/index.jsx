"use client"
import React from 'react';

function ChatIcon({ onToggle }) {
  return (
    <div className="chat-icon" onClick={onToggle}>
      <div className="icon text-2xl cursor-pointer">💬</div>
    </div>
  );
}

export default ChatIcon;
