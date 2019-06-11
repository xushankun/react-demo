// 导入依赖，包括其它组件，图片资源，或者css
import React, { Component } from 'react';
import './App.css';
// 首先我们需要导入一些组件...
import {BrowserRouter as Router, Link} from 'react-router-dom';
import getRouter from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>我是组件app</h1>
          {/*// 子路由的书写,在4.x的版本中必须嵌套写子路由，子路由必须在子组件内部*/}
          <Router>
              <div>
                  <h1>我是组件homeIndex</h1>
                  <ul>
                      <li> <Link to="/">PageA</Link></li>
                      <li><Link to="/pageb">PageB</Link></li>
                      <li><Link to="/pagec/12345654321">PageC</Link></li>
                  </ul>
              </div>
              {getRouter()}
          </Router>
      </div>
    );
  }
}

export default App;
