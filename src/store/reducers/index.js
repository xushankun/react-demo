//index.js
//combineReducers方法，用于 Reducer 的拆分，便于以后添加其他函数
import { combineReducers } from "redux";
// 按照业务拆分
import todo from "./todo.js";

export default combineReducers({
    todo
});
