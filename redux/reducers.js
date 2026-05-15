import {
  ADD_TODO,
  DELETE_TODO
} from "./actions";

const initialState = {
  todos: [],
};


// Reducer handles all Redux actions
// NEVER mutate state directly
const todoReducer = (
  state = initialState,
  action
) => {

  switch (action.type) {

    case ADD_TODO:

      return {
        ...state,

        // Create NEW array
        todos: [
          ...state.todos,
          action.payload
        ],
      };


    case DELETE_TODO:

      return {
        ...state,

        // Filter returns NEW array
        todos: state.todos.filter(
          todo => todo.id !== action.payload
        ),
      };


    default:
      return state;
  }
};

export default todoReducer;
