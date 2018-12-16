import React, { Component, Fragment } from 'react'

import {Menu, Avatar} from 'antd';

export default class SignInLinks extends Component{
    render(){
        return(
            <Menu.Item style={{float:'right',cursor:'pointer'}} key="6" ><Avatar size="large">张 </Avatar></Menu.Item>
        )
    }
}