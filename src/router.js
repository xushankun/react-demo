import React from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";
import PageC from "./pages/pageC";
// 路由
const getRouter = () => (
    // 组件渲染的地方
    <Switch>
        <Route exact path="/" component={PageA} />
        <Route path="/pageb" component={PageB} />
        <Route path="/pagec/:id" component={PageC} />
    </Switch>
);
export default getRouter;
