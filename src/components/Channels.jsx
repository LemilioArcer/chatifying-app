import React from 'react'

export default function Channels() {
  return (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <h2>Chats</h2>
      </div>
      
      <div className="item">
        <div className="avatar-circle"></div>
        <div className="chat-info">Chatify</div>
      </div>
      
      <div className="item">
        <div className="avatar-circle"></div>
        <div className="chat-info">
            <span className="chat-name">Bill</span>
            <span className="chat-last-message"> Gates: Mereces un punto extr...</span>
        </div>
      </div>
    </div>
  )
}