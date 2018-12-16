import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import {Menu, Avatar} from 'antd';

export default class SignInLinks extends Component{
    render(){
        return(
            <Menu.Item style={{float:'right',cursor:'pointer'}} key="6" ><Link to="/usercenter/userinfo"><Avatar size="large">凡猫 </Avatar></Link></Menu.Item>
        )
    }
}