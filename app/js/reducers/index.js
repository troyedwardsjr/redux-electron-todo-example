import { combineReducers } from 'redux';
import todoItems from './todoItems.js';

const rootReducer = combineReducers({
	todoItems: todoItems
});

export default rootReducer;
