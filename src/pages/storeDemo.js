import React, { Component } from 'react';
import { Button } from 'antd';
// import store from '../store/store';

class storeDemo extends Component {
    constructor (data) {
        super(data);
        this.state = {
            count:2
        }
    };
    onIncrement=()=>{
        // let action={type:"INCREMENT",count:this.state.count};
        // store.dispatch(action); // 更新state
        // console.log(store.getState());  // 获取state
    };
    onDecrement=()=>{
        // let action={type:"DECREMENT",count:this.state.count};
        // store.dispatch(action)
    };

    render() {
        return (
            <div className="App">
                <h2>redux Counter</h2>
                {/*<h2>store值：{store.getState()}</h2>*/}
                <Button type="primary" onClick={this.onIncrement}>加</Button>
                <Button type="primary" onClick={this.onDecrement}>减</Button>
            </div>
        );
    }
}

export default storeDemo;
