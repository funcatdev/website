import React, { Component } from 'react'
import { Layout, Row, Col } from "antd";

import SectionTitleComponet from './SectionTitle';

import phone from '../../assets/indexpage/0.15.png';
import QQ from '../../assets/indexpage/0.16.png';
import wechat from '../../assets/indexpage/0.17.png';
import address from '../../assets/indexpage/0.18.png';


const data = [
    {
        title: "联系电话",
        content: "15900951907",
        image:phone
    },
    {
        title: 'QQ',
        content: '5900951907',
        image:QQ
    },
    {
        title: '微信',
        content: '5900951907',
        image:wechat
    },
    {
        title: '地址',
        content: '上海市虹口区乍浦路SOHU3',
        image:address
    }
]

const itemStyle = {
    'width': '215px',
    'height': '157px',
	'borderRadius': '10px',
    'border': 'solid 2px #ffffff',
    'margin': '0 20px',
    'marginTop': '100px'
}

const contentStyle = {
    'color':'#fff',
    'height':'100px',
    'marginTop':'57px'
}

const avatarStyle = {
    'width': '80px',
    'height': '80px',
    'position': 'absolute',
    'top': '-44px',
    'left': '31%',
    'background':' #fff',
    'borderRadius': '40px'
}

let colcontent = data.map((val, index) => (
    <Col style={itemStyle} key={index} md={6} sm={12}>
        <div style={avatarStyle} >
            <img src={val.image} alt={val.title}/>
        </div>
        <div style={contentStyle} >
            <span >{val.title}</span><br />
            <span >{val.content}</span>
        </div>
    </Col>
))

export default class ConactUs extends Component {
    render() {
        return (
            <Layout className="section" style={{background:'#1a54e7'}}>
                <SectionTitleComponet subtitle="ConactUs" title="联系我们" white="borderRadius" />
                <Row className="section" gutter={24} type="flex" justify="center">
                    {colcontent}
                </Row>
            </Layout>
        )
    }
}
