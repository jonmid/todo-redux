import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { agregarTarea, borrarTarea } from './redux/actions/todoActions';

const App = () => {
  const tareas = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const guardar = (e) => {
    e.preventDefault();
    dispatch(agregarTarea(e.target.tarea.value));
  };

  const borrar = (id) => {
    dispatch(borrarTarea(id));
  };

  return (
    <div className='App'>
      <form onSubmit={guardar}>
        <input type='text' name='tarea' />
        <button>Guardar</button>
      </form>
      <div>
        <ul>
          {tareas.map((item) => {
            return (
              <li key={item.id}>
                {item.valor} <button onClick={() => borrar(item.id)}>Borrar</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
