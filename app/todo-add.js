import React, {Component} from 'react';

class TodoAdd extends Component {
    render() {
        let {actions} = this.props;
        return (
            <div>
                <button onClick={() => { actions.getTodo(); } }>
                    获取事项
                </button>
            </div>
        );
    }
}

export default TodoAdd;