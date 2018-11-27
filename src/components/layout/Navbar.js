import React,{ Component}from 'react';
import { Layout, Menu,Modal,Form,Input,Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignInComponent from '../auth/SignIn'

const FormItem = Form.Item;
const { Header } = Layout;
const userStyle = {
  'float': 'right',
  'background': 'transparent',
  'line-height': '30px',
  'border': '1px solid',
  'text-align': 'center',
  'margin-top': '16px',
  'padding': '0 15px',
  'border-radius': '15px'
}

export default class Navbar extends Component {
  constructor(props){
    super(props);

    this.state={
      modalVisible:false
    }
  }

  setModal1Visible(modalVisible){
    this.setState({modalVisible})
  }
  
  render(){
    return (
      <Header style={{ background: '#ffffff' }} >
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          
          <Menu.Item key="1"><Link to='/' >首页</Link></Menu.Item>
          <Menu.Item key="2">关于我们</Menu.Item>
          <Menu.Item key="3">联系我们</Menu.Item>
          <div style={userStyle}>
            
            <span key="4" onClick={() => this.setModal1Visible(true)}>注册</span>
            
            /
            <Link to="login">
            <span>登陆</span>
            </Link>
           
          </div>
          <Modal
            title="用户注册"
            style={{ top: 20 }}
            visible={this.state.modalVisible}
            onOk={() => this.setModal1Visible(false)}
            onCancel={() => this.setModal1Visible(false)}
          >
          
           <SignInComponent />
          
            
          </Modal>
        </Menu>
  
      </Header>
    );

  }
  
  
}