// 导入依赖，包括其它组件，图片资源，或者css
import React, { Component } from 'react';
import Welcome from './conponents/welcome';
import Demo from './conponents/demo'
import RouterApp from './conponents/routerApp/routerApp'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Welcome name="shankun" />
          {/*<Demo></Demo>*/}
          <RouterApp></RouterApp>
      </div>
    );
  }
}

export default App;
