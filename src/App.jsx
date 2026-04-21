import React, { useEffect } from 'react'
import './App.css'
import { socket } from './socket'
import Channels from './components/Channels'
import Users from './components/Users'
import Chats from './components/Chats'
import MyForm from './components/MyForm'
import ManageConnection from './components/ManageConnection'

function App() {
  useEffect(() => {
    const onConnect = () => {
      console.log('Conectado');
    }
    socket.on('connect', onConnect);
    return () => {
      socket.off('disconnect')
      socket.off('connect', onConnect);
    }
  }, []);

  return (
    <div className='messenger-container'>
      <aside className='sidebar-left'>
        <div className='header-icons'>
          <div className='settings-icon'>⚙️</div>
          <h2>Messenger</h2>
          <div className='edit-icon'>📝</div>
        </div>
        <Channels />
      </aside>

      <main className='chat-window'>
        <header className='chat-header'>
          <div className='header-info'>
            <h3>Chatify</h3>
            <ManageConnection />
          </div>
          <div className='header-actions'>ℹ️</div>
        </header>

        <section className='chat-messages'>
          <Chats />
        </section>

        <footer className='chat-footer'>
          <MyForm />
        </footer>
      </main>

      <aside className='sidebar-right'>
        <Users />
      </aside>
    </div>
  );
}

export default App;