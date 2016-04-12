const initialState = () => { 
	if (JSON.parse(localStorage.getItem('todos')) === null) {
		return [];
	} else {
		return JSON.parse(localStorage.getItem('todos'));
	}
}

export default function todoItems(state = initialState(), action) {

	let combinedTodoList;

	switch(action.type) {

		case 'TODO_ADDED':
			combinedTodoList = state.concat(action.payload);
			localStorage.setItem('todos', JSON.stringify(combinedTodoList));
			return combinedTodoList;

		case 'TODO_DELETED':
			combinedTodoList = state.filter(todo =>
        todo.id !== action.payload
      );
      localStorage.setItem('todos', JSON.stringify(combinedTodoList));
			return combinedTodoList;

		case 'TODO_COMPLETED':
			combinedTodoList = state.map((todo) => {
				if (todo.id === action.payload)
				{
					todo.completed = !todo.completed;
				}
        return todo;
			});
      localStorage.setItem('todos', JSON.stringify(combinedTodoList));
			return combinedTodoList;

	}
	return state; 
}

