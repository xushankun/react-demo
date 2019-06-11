// 导入依赖，包括其它组件，图片资源，或者css
import React, { Component } from 'react';
import './App.css';
// 首先我们需要导入一些组件...
import {BrowserRouter as Router, Link} from 'react-router-dom';
import getRouter from './router';


import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends Component {
    constructor(data) {
        super(data);
        // 构造函数是唯一能够初始化 this.state 的地方。【这里的state类似小程序的data】
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
  render() {
    return (
        <Layout style={{
            height:'100vh'
        }}>
            <Router>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="home" />
                            <span>pageA</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/pageb">
                            <Icon type="user" />
                            <span>pageB</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/pagec/12345654321">
                            <Icon type="idcard" />
                            <span>pageC</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 ,display:'flex',alignItems:'center'}}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    <h1 style={{margin:'0 0 0 20px'}}>我是组件homeIndex</h1>
                </Header>
                <Content style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}>
                    {getRouter()}
                </Content>
            </Layout>
            </Router>
        </Layout>
    );
  }
}

export default App;
