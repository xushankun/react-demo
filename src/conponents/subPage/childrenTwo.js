import React,{ Component } from 'react';

class childrenTwo extends Component{
    constructor() {
        super();
        this.state = {

        };
    }

    render () {
        return (
            <div>
                <h1>我是子组件2</h1>
                <h1>我是ID：{this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default childrenTwo
