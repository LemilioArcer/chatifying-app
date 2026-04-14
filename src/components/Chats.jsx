import React from 'react';
import MyForm from './MyForm';

const Chats = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff'
  };

  const bubbleLeft = {
    alignSelf: 'flex-start',
    backgroundColor: '#e4e6eb',
    padding: '8px 12px',
    borderRadius: '18px',
    margin: '5px 0',
    maxWidth: '70%'
  };

  const bubbleRight = {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '18px',
    margin: '5px 0',
    maxWidth: '70%'
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ padding: '15px', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>
        Usuario de Prueba
      </div>

      {/* Mensajes */}
      <div style={{ flex: 1, padding: '15px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={bubbleLeft}>Hola! ¿Cómo va el proyecto?</div>
        <div style={bubbleRight}>Todo bien, ya funciona el diseño.</div>
      </div>

      {/* Input de MyForm */}
      <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
        <MyForm />
      </div>
    </div>
  );
};

export default Chats;