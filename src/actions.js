export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const CLEAR_FINISHED = 'CLEAR_FINISHED';

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

let nextTodoId = 0;
export function addTodo(text) {
    return { type: ADD_TODO, text, id: nextTodoId++};
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}

export function clearFinished() {
    return { type: CLEAR_FINISHED };
}
