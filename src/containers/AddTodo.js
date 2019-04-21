import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button, TextField } from '@material-ui/core';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <TextField
                onChange={(e) => {
                    input = e.target;
                }}
            />
            <Button type='submit' onClick={(e) =>{
                console.log(input);
                e.preventDefault();
                if(!input.value && !input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = ''; 
            }}>Add Todo</Button>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
