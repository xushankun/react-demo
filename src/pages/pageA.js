import React,{ Component } from 'react';
import Demo from "../conponents/demo";
import { Button } from 'antd';

class pageA extends Component{
    render () {
        return (
            <div>
                <h1>我是组件pageA</h1>
                <Demo></Demo>
                <Button type="primary">Antd 按钮</Button>
            </div>
        );
    }
}

export default pageA
