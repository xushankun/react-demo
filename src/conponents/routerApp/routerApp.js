import React,{ Component } from 'react';
import Home from "../subPage/home";
import Children from "../subPage/children";
import ChildrenTwo from "../subPage/childrenTwo";

// 首先我们需要导入一些组件...
import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class routerApp extends Component {
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
                    {/*exact  属性来规定我们是否严格匹配*/}
                    {/*假设我们加了 exact*/}
                    {/*那么路径完全等于/的时候才会渲染  Home*/}
                    {/*/ /children1 /children2/:id后面这三种情况均不会渲染App*/}
                    <Route exact path="/" component={Home} />
                    <Route path="/children1" component={Children} />
                    <Route path="/children2/:id" component={ChildrenTwo} />
                </div>
            </Router>
        )
    }
}
