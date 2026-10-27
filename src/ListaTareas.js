import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, onDelete, onEdit, onToggleCompletada }) {
  if (tareas.length === 0) {
    return <p className="vacio">No hay tareas para mostrar 🎉</p>;
  }

  return (
    <ul className="lista">
      {tareas.map((t) => (
        <Tarea
          key={t.id}
          tarea={t.texto}
          completada={t.completada}
          onDelete={() => onDelete(t.id)}
          onEdit={(nuevoTexto) => onEdit(t.id, nuevoTexto)}
          onToggleCompletada={() => onToggleCompletada(t.id)}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;