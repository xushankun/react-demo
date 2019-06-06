import React,{ Component } from 'react';
// 定义组件分两种

// 函数定义   【函数定义时  this.props 要换成 props】
// function Welcome(props) {
//     return (
//         <h1>Hello, {props.name}</h1>
//     )
// }

// 类定义组价
class Welcome extends Component {
    constructor(data) {
        super(data);
        // 设置组件内部定义的值
        // 构造函数是唯一能够初始化 this.state 的地方。【这里的state类似小程序的data】
        this.state = {
            tips:'',
            name: '',
            age:18,
            btnState: false
        };
    }
    // 当组件输出到 DOM 后会执行 componentDidMount() 钩子
    componentDidMount() {
        // 注意事项：更新state的值必须使用setState()[类似小程序的setData]
        this.setState({
            name:'小花'
        });

        // 箭头函数写法【接收参数整个state 作为参数】
        this.setState(state => ({
            tips: `我叫${state.name},今年${state.age}岁了`
        }));
    }
    componentWillUnmount() {
        // 卸载组件
    }
    clickBtn = () => {
        this.setState(state=>({
            btnState:!state.btnState
        }))
    }
    render() {
        return (
            <div>
                <h1>我是组件内部state定义的name： {this.state.name}</h1>
                <h1>我是来自父组件的props的name：{this.props.name}</h1>
                <h2>{this.state.tips}</h2>

                <button onClick={this.clickBtn}>{this.state.btnState ? '开' : '关'}</button>
            </div>
        )
    }
}

export default Welcome


