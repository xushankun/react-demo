import React,{ Component } from 'react';
import Welcome from "../conponents/welcome";
import { Link, Route } from 'react-router-dom';

class pageB extends Component{
    render () {
        return (
            <div>
                <h1>我是子组件pageB</h1>
                <h1>pageA组件内的子路由</h1>
                <li><Link to={`${this.props.match.url}/welcome`}>Welcome</Link></li>
                <Route path={`${this.props.match.url}/welcome`} component={Welcome} />
            </div>
        );
    }
}

export default pageB
