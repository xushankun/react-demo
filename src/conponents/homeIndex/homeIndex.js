import React,{ Component } from 'react';
// 首先我们需要导入一些组件...
import {BrowserRouter as Router, Link} from 'react-router-dom';
import getRouter from '../../router';

export default class homeIndex extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render() {
        return (
            // 子路由的书写,在4.x的版本中必须嵌套写子路由，子路由必须在子组件内部
            <Router>
                <div>
                    <h1>这里是路由组件</h1>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/children1">children1</Link></li>
                        <li><Link to="/children2/12345654321">children2</Link></li>
                    </ul>
                </div>
                {getRouter()}
            </Router>
        )
    }
}
