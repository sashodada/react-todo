import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import ClearFinished from '../containers/ClearFinished';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <ClearFinished />
        <Footer />
    </div>
);

export default App;
