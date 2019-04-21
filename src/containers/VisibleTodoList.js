import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilter } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: id => {
        console.log(id);
        dispatch(toggleTodo(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
