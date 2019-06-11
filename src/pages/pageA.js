import React,{ Component } from 'react';
import Demo from "../conponents/demo";
import { Button ,Message} from 'antd';


class pageA extends Component{
    info () {
        Message.info('This is a normal message');
    };
    render () {
        return (
            <div>
                <h1>我是组件pageA</h1>
                <Demo></Demo>
                <Button type="primary" onClick={this.info}>Antd 按钮</Button>
            </div>
        );
    }
}

export default pageA
