import React, {Component} from 'react';
import ToDoAdd from './todo-add';
import ToDoList from './todo-list';
import * as todoActions from './action/todo';
import redux, {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

var style = {
    width: 300,
    padding: 50,
    margin: '0 auto'
}

class TodoContainer extends Component {
    render() {
        let {dispatch, todo} = this.props;
        let actions = bindActionCreators(todoActions, dispatch);
        return (
            <div style={style}>
                <h1>TODO LIST</h1>
                <ToDoAdd actions={actions}/>
                <ToDoList actions={actions} todo={todo}/>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        todo: state.todo
    }
})(TodoContainer);