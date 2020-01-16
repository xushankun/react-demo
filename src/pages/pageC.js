import React,{ Component } from 'react';
import TodoList from './TodoList'

class pageC extends Component{
    render () {
        return (
            <div>
                <h1>我是子组件pageC</h1>
                <h1>我的ID是：{this.props.match.params.id}</h1>
                <TodoList></TodoList>
            </div>
        );
    }
}

export default pageC
