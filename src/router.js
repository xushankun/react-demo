import React from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";
import PageC from "./pages/pageC";
import Todos from "./conponents/todos";
// 路由
const getRouter = () => (
    // 组件渲染的地方
    <Switch>
        <Route exact path="/" component={PageA} />
        <Route path="/pageb" component={PageB} />
        <Route path="/pagec/:id" component={PageC} />
        <Route path="/todos" component={Todos} />
    </Switch>
);
export default getRouter;
