import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp/*, ADD INIT STATE*/);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
