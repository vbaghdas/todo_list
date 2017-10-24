import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from './todos_reducer';

export default combineReducers({
    todos: todos,
    form: formReducer
});