import React,{ Component}from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';

import {connect} from 'react-redux'

import LogoPng from '../../assets/logo.png'

const { Header } = Layout;


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state= {
      isLogin:false
    }
  }

  render(){
    const {auth} = this.props;
    return (
      <Header style={{ background: '#ffffff',position:'fixed', width:'100%',left:0, top:0,right: 0, zIndex: 1000 }} >
        
        <a className="logo"  href='/'>
        <image src={LogoPng}  alt='logo'/>
        <span>凡猫学院</span>
        </a>
      
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to='/' >首页</Link></Menu.Item>
          <Menu.Item key="2" >关于我们</Menu.Item>
          <Menu.Item key="3">联系我们</Menu.Item>
          {auth ? <SignOutLinks /> : <SignInLinks />}
        </Menu>
      </Header>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    auth:state.auth.authError
  }
}

export default connect(mapStateToProps)(Navbar);