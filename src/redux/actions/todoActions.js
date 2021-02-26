import { AGREGAR_TODO, BORRAR_TODO } from '../types/todoType';

export const agregarTarea = (x) => ({
  type: AGREGAR_TODO,
  data: {
    id: Math.random(),
    valor: x,
  },
});

export const borrarTarea = (id) => ({
  type: BORRAR_TODO,
  id,
});
