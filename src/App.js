import React, { useState } from 'react';
import './App.css';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('Todas');

  const agregarTarea = (texto) => {
    setTareas([...tareas, { id: Date.now(), texto, completada: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, texto: nuevoTexto } : t)));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)));
  };

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === 'Pendientes') return !t.completada;
    if (filtro === 'Completadas') return t.completada;
    return true;
  });

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div className="app">
      <h1>📝 Mis Tareas</h1>
      <p className="contador">
        {pendientes} {pendientes === 1 ? 'tarea pendiente' : 'tareas pendientes'}
      </p>
      <TareaForm onAdd={agregarTarea} />
      <Filtros filtrarTareas={setFiltro} filtroActual={filtro} />
      <ListaTareas
        tareas={tareasFiltradas}
        onDelete={eliminarTarea}
        onEdit={editarTarea}
        onToggleCompletada={toggleCompletada}
      />
    </div>
  );
}

export default App;