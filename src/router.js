import React from 'react';

import { Route, Switch } from 'react-router-dom';


// 引入页面
import Home from "./conponents/subPage/home";
import Children from "./conponents/subPage/children";
import ChildrenTwo from "./conponents/subPage/childrenTwo";

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/children1" component={Children} />
        <Route path="/children2/:id" component={ChildrenTwo} />
    </Switch>
);

export default getRouter;
