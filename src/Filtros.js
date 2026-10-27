import React from 'react';

function Filtros({ filtrarTareas, filtroActual }) {
  const opciones = ['Todas', 'Pendientes', 'Completadas'];

  return (
    <div className="filtros">
      {opciones.map((opcion) => (
        <button
          key={opcion}
          className={`filtro-btn ${filtroActual === opcion ? 'activo' : ''}`}
          onClick={() => filtrarTareas(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
}

export default Filtros;