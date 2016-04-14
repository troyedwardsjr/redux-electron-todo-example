export function addTodo(todo) {
  return {
    type: 'TODO_ADDED',
    payload: todo
  };
}

export function deleteTodo(id) {
  return { 
    type: 'TODO_DELETED', 
    payload: id 
  }
}

export function completeTodo(id) {
  return { 
    type: 'TODO_COMPLETED', 
    payload: id 
  }
}