import React from 'react';

const Users = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '10px',
    backgroundColor: '#fff'
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#f0f2f5',
    marginBottom: '8px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '22px', margin: '10px 0' }}>Chats</h2>
      <input 
        type="text" 
        placeholder="Buscar" 
        style={{ padding: '8px 15px', borderRadius: '20px', border: 'none', backgroundColor: '#f0f2f5', marginBottom: '15px', outline: 'none' }}
      />
      
      <div style={itemStyle}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '10px' }}></div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Usuario de Prueba</div>
          <div style={{ fontSize: '12px', color: '#666' }}>Activo ahora</div>
        </div>
      </div>
    </div>
  );
};

export default Users;