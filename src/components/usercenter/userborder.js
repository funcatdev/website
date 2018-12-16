import React, { Component } from 'react'
import {
    Layout, Menu, Icon,
} from 'antd';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import MyInfoComponent from './myInfo';
import  {MyOrderComponent} from './myOrder';

const { Content, Sider } = Layout;

export default class UserBorder extends Component {
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">
                            <Link to='/usercenter/useroder'>
                            <Icon type="pie-chart" />
                            <span>我的订单</span>
                            </Link>
                        </Menu.Item>
                        
                        <Menu.Item key="2">
                        <Link to="/usercenter/userinfo">
                            <Icon type="desktop" />
                            <span>我的资料</span>
                            </Link>
                        </Menu.Item>
                        
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    
                        <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 380,
                        }}
                        >
                            <Route  path="/usercenter/userinfo" component={MyInfoComponent} />
                            <Route path="/usercenter/useroder" component={MyOrderComponent} />
                        </Content>
                    
                </Layout>
            </Layout>
        );


    }
}