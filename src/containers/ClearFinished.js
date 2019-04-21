import React from 'react'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { clearFinished } from '../actions';

const ClearFinished = ({ dispatch }) => (
    <Button onClick={(e) => {
        e.preventDefault();
        dispatch(clearFinished());
        console.log('Clear finished pressed!');
    }}>Clear finished tasks</Button>
);

export default connect()(ClearFinished);