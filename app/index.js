/**
 * Created by qizhang.yang on 2016/8/8 0008.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import './style/style.scss'
import reducers from './reducer';
import TodoContainer from './todo-container'

let store;

if (!__PROD__) {
    store = createStore(reducers, applyMiddleware(
        thunkMiddleware,
        createLogger()
    ));
}
else {
    store = createStore(reducers, applyMiddleware(
        thunkMiddleware
    ));
}

if (typeof console === 'undefined') {
    window.console = {
        log: () => { },
        error: () => { },
        warn: () => { }
    }
}

ReactDOM.render(<Provider store={store}>
    <TodoContainer />
</Provider>, document.querySelector('#app'));