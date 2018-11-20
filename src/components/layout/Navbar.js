import React  from 'react';
import { Layout, Menu } from 'antd';

const {Header} = Layout;

const Navbar = ()=>{
    return (
        <Header style={{background:'#ffffff'}} >
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">关于我们</Menu.Item>
            <Menu.Item key="3">联系我们</Menu.Item>
            <Menu.Item key="4">咨询电话  17521707586</Menu.Item>
          </Menu>
        </Header>
    );
}


export default Navbar;