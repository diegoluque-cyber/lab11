import React, { useState } from 'react';

function TareaForm({ onAdd }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    onAdd(texto);
    setTexto('');
  };

  return (
    <form className="tarea-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="¿Qué tienes que hacer hoy?"
      />
      <button className="btn btn-agregar" type="submit">Agregar</button>
    </form>
  );
}

export default TareaForm;