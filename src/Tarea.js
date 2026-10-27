import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleSaveClick = () => {
    if (!editedText.trim()) return;
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className={`tarea ${completada ? 'completada' : ''}`}>
      <input type="checkbox" checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <input
            className="editar-input"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="btn btn-guardar" onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <>
          <span className="tarea-texto">{tarea}</span>
          <div className="acciones">
            <button className="btn btn-editar" onClick={() => setIsEditing(true)}>Editar</button>
            <button className="btn btn-eliminar" onClick={onDelete}>Eliminar</button>
          </div>
        </>
      )}
    </li>
  );
}

export default Tarea;