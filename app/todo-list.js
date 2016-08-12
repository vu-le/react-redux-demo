import React, {Component} from 'react';

class ToDoList extends Component {
    render() {
        let {todo} = this.props;
        return (
            <div>
                {todo.isLoading && '加载中...'}
                {
                    todo.list.map((t) => {
                        return (
                            <p key={t}>{t}</p>
                        )
                    })
                }
            </div>
        );
    }
}

export default ToDoList;