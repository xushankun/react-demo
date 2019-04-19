// 导入依赖，包括其它组件，图片资源，或者css
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './headertpl/headertpl.js'


// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

class App extends Component {
  render() {
    return (
      <div className="App">
          <Welcome name="shankun" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World</h1>
        </header>
      </div>
    );
  }
}

export default App;
