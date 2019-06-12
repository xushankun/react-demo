import React,{ Component } from 'react';


// 官方示例【todos】https://github.com/reduxjs/redux/tree/master/examples/todos
import Footer from './Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

class todos extends Component{
    render () {
        return (
            <div>
                <h1>我是子组件todos</h1>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default todos
