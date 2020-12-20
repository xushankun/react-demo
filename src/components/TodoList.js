import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actionCreator';
// todolist组件目前只有dom可以写成函数组件以提升效率；
// ui组件
const TodoList = props => {
    const { value, list, inputChange, btnClick, listClick } = props;
    return (
        <div>
            <div>
                <input onChange={inputChange} value={value}></input>
                <button onClick={() => btnClick(value)}>提交</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index} onClick={() => listClick(index)}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    // 合并以后state值，从单个业务【例如todo】获取
    return {
        value: state.todo.inputValue,
        list: state.todo.list,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        inputChange: e => dispatch(actions.getInputChangeAction(e.target.value)),
        btnClick: value => dispatch(actions.btnClickAction(value)),
        listClick: index => dispatch(actions.listDelAction(index)),
    };
};
// 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
