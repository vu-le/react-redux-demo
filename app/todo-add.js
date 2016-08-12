import React, {Component} from 'react';

import Image  from './pic.gif'

class TodoAdd extends Component {
    render() {
        let {actions} = this.props;
        return (
            <div>
                <img src={Image} />
                <button onClick={() => { actions.getTodoList(); } }>
                    获取事项
                </button>
            </div>
        );
    }
}

export default TodoAdd;