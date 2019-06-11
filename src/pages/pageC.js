import React,{ Component } from 'react';

class pageC extends Component{
    render () {
        return (
            <div>
                <h1>我是子组件pageC</h1>
                <h1>我的ID是：{this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default pageC
