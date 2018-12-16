import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu,Modal,Form } from 'antd';

import RegisterComponent from '../auth/SignIn'
import LoginFormComponent from '../auth/SignUp'

const { Header } = Layout;
const userStyle = {
    'float': 'right',
    'background': 'transparent',
    'lineHeight': '30px',
    'border': '1px solid',
    'textAlign': 'center',
    'marginTop': '16px',
    'padding': '0 15px',
    'borderRadius': '15px',
    'cursor': 'pointer'
  }


class SignOutLinks extends Component{

    constructor(props){
        super(props);
        this.state={
            modalVisible:false,
            title:'',
            isLogin:false
          }
    }

    setModelVisible(modalVisible,title,isLogin){
        this.setState({modalVisible,title,isLogin})
    }
    
    render(){
        return(
            <Fragment>
            <div style={userStyle}>
            <span onClick={() => this.setModelVisible(true,'注册',true)}>注册</span>
            /
            <span onClick={() => this.setModelVisible(true,'登陆',false)}>登陆</span>
            
          </div>
          <Modal
            title={this.state.title}
            centered={true}
            visible={this.state.modalVisible}
            onCancel={() => this.setModelVisible(false,this.state.title,this.state.isLogin)}
            footer={null}
          >
          
            {this.state.isLogin ? <RegisterComponent /> : <LoginFormComponent /> } 
            
          </Modal>
          </Fragment>
        )
    }

}

export default SignOutLinks;