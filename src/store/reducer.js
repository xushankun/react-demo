import { CHANGE_INPUT, ADD_TODO, DEL_TODO } from "./actionTypes";
const initalState = {
  inputValue: "defaultValue",
  list: []
};
export default function(state = initalState, action) {
  const type = action.type;
  let newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    // 输入事件
    case CHANGE_INPUT:
      newState.inputValue = action.value;
      return newState;
    // 添加事件
    case ADD_TODO:
      newState.list.push(newState.inputValue);
      newState.inputValue = "";
      return newState;
    // 删除事件
    case DEL_TODO:
      newState.list.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
}
