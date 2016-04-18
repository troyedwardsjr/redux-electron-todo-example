const initialState = () => {
  const todos = localStorage.getItem('todos');
  
  return todos ? JSON.parse(todos) : [];
}

export default function todoItems(state = initialState(), action) {
    switch (action.type) {
      case 'TODO_ADDED':
        return state.concat(action.payload);

      case 'TODO_DELETED':
        return state.filter(todo =>
            todo.id !== action.payload
        );

      case 'TODO_COMPLETED':
        return state.map((todo) => {
            if (todo.id === action.payload) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
    }
    return state; 
}