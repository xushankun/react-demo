import React from "react";
import { connect } from "react-redux";

const TodoList = props => {
    return (
        <div>
            <input value={props.inputValue} onChange={props.inputChange} />
            <button onClick={props.addTodo}>添加</button>

            {props.list.map((item, index) => {
                return (
                    <li key={index} onClick={props.delTodo} data-index={index}>
                        {item}
                    </li>
                );
            })}
        </div>
    );
};

// 将store中的state映射到props
const mapStateToProps = state => {
    return {
        inputValue: state.inputValue,
        list: state.list
    };
};

// 将用户对UI组件的操作映射成Action
// 将dispatch映射到props
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("TCL: mapDispatchToProps -> ownProps", ownProps);
    return {
        inputChange(e) {
            dispatch({
                type: "CHANGE_INPUT",
                value: e.target.value
            });
        },
        addTodo() {
            dispatch({
                type: "ADD_TODO"
            });
        },
        delTodo(e) {
            dispatch({
                type: "DEL_TODO",
                index: e.target.dataset.index
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
