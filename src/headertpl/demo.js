import React,{ Component } from 'react';

class Demo extends Component{
    constructor() {
        super();
        this.state = {name:'Hello ',name2:'shankun'};
    }

    preventPop(name,name2,e){    //使用bind时，事件对象e要放在最后
        e.preventDefault();
        alert(name + name2);
    }
    render () {
        return (
            <div>
                <h1>向事件传入参数的两种写法</h1>
                1.<a href="https://reactjs.org" onClick={(e) => this.preventPop(this.state.name,this.state.name2,e)}>箭头函数写法Click1</a>推荐使用箭头函数<br/>
                2.<a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name,this.state.name2)}>bind写法Click2</a><br/>


                <h1>上次看到</h1>
                <a href="https://react.docschina.org/docs/lists-and-keys.html" target='_blank'>列表 & Keys</a>
            </div>
        );
    }
}

export default Demo
