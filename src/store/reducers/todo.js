//todo.js
import actionTypes from '../actionTypes';

const defaultState = {
    inputValue: '',
    list: [],
};
const todo = (state = defaultState, action) => {
    // reducers 可以接受state，但是绝不能修改state
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
            // 输入
        case actionTypes.CHANGE_INPUT_VLAUE:
            newState.inputValue = action.value;
            break;
            // 提交
        case actionTypes.BTN_CLICK:
            newState.list.push(action.value);
            newState.inputValue = '';
            break;
            // 删除
        case actionTypes.LIST_DEL:
            newState.list.splice(action.index, 1);
            break;
        default:
            break;
    }
    return newState;
}

export default todo
