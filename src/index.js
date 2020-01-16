import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 渲染app组件到public/index.html 的 id为root的div【我们将其称为根DOM节点，开发应用时一般只会定义一个根节点】
ReactDOM.render(<App />, document.getElementById('root'));

// 如果你想让你的应用离线运行并更快地加载，你可以在下面把unregister（）改为register（）
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
