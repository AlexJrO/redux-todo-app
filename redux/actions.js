export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";


// Action creator to add todo
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});


// Action creator to delete todo
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});