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
import ToDoContainer from './todo-container'

let store;

if (__PROD__) {
    store = createStore(reducers, applyMiddleware(
        thunkMiddleware,
        createLogger()
    ));
}
else{
    store =  createStore(reducers, applyMiddleware(
        thunkMiddleware
    ));
}

ReactDOM.render(<Provider store={store}>
    <ToDoContainer />
</Provider>, document.querySelector('#app'));