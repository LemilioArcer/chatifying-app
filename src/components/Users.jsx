import React from 'react'

export default function Users() {
  return (
    <div className="sidebar-content">

      <div className="sidebar-header">
        <h2>Detalles</h2>
        <h3>Nombre del Chat</h3>
      </div>

      <div className="details-section">
        <h3>Opciones</h3>
        <p>Cambiar color</p>
        <p>Mutear notificaciones</p>
      </div>

      <div className="details-section">
        <h3>Personas conectadas:</h3>
        <p>Chatify</p>
        <p>Bill Gates</p>
      </div>

    </div>
  )
}