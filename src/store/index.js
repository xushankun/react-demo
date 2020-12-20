import { createStore } from 'redux';
import reducers from './reducers/index';
const store = createStore(reducers);

// import todo  from "./reducers/todo.js";
// const store = createStore(todo);
console.log(store.getState())
export default store
