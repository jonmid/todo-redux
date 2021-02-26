import { AGREGAR_TODO, BORRAR_TODO } from '../types/todoType';

const dataInicial = [];

const todo = (state = dataInicial, action) => {
  switch (action.type) {
    case AGREGAR_TODO:
      return [...state, action.data];
    case BORRAR_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default todo;
