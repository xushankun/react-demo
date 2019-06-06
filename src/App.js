// 导入依赖，包括其它组件，图片资源，或者css
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './conponents/welcome.js'
import Demo from './conponents/demo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Welcome name="shankun" />
          <Demo></Demo>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World</h1>
        </header>
      </div>
    );
  }
}

export default App;
