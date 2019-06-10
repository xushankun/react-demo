// 导入依赖，包括其它组件，图片资源，或者css
import React, { Component } from 'react';
import HomeIndex from './conponents/homeIndex/homeIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomeIndex></HomeIndex>
      </div>
    );
  }
}

export default App;
