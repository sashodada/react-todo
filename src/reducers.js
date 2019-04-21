import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    CLEAR_FINISHED,
    VisibilityFilter
} from './actions';

function visibilityFilter(state = VisibilityFilter.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map(todo => (
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            ));
        case CLEAR_FINISHED:
            return state.filter(todo => !todo.completed);
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
});

export default todoApp;
