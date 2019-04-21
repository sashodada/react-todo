import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

const TodoList = ({todos, onTodoClick}) => (
    <List>
        {todos.map(todo => (
            <ListItem button onClick={() => onTodoClick(todo.id)}>
                <ListItemText style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}>{todo.text}</ListItemText>
            </ListItem>
        ))}
    </List>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
