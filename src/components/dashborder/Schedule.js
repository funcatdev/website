import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd';
import { Link} from 'react-router-dom';
import SectionTitleComponet from './SectionTitle';

const { Content } = Layout;


const data = [
  {
    'title': '基础就业班',
    'nums': 2180,
    'price':5880
  },
  {
    'title': '自动化测试提升班',
    'nums': 2180,
    'price':5880
  },
  {
    'title': '性能测试提升班',
    'nums': 2180,
    'price':5880
  }
]

const data2 = [
  {
    'title': '产品经理就业班',
    'nums': 2180,
    'price':5880
  },
  {
    'title': '数据分析就业班',
    'nums': 2180,
    'price':5880
  }
]

const item = data.map((val,index)=>{
  return(

    <Col key={index} md={7} sm={12}>
      <div style={{margin:"10px 5px"}}>
        <div style={{background:'#fff'}}>
          <div style={{width:300,height:231}}></div>
          <div style={{position:'absolute',left:16,top:150,width:104,height:41, justifyContent:'center', textAlign:'center',lineHeight:'41px', background:'#1a54e7',color:'#fff'}}>
          <span>¥{val.price}元</span>
          </div>
        </div>
        <div style={{textAlign:'left',padding:'5px 0'}}>
          <div style={{fontSize:18,color:'#000000'}}>{val.title}</div>
          <div><span>{val.nums}人在学习</span>  | <span><Link to='/detail'>查看详情</Link> </span></div>
        </div>
      </div>  
    </Col>
  )
})

// cnost item

export default class ScheduleComponet extends Component {
  render() {
    return (
      <Content className='section'>
        <SectionTitleComponet subtitle="Curriculum Schedule" title="课程列表" />
        <Row gutter={24} type="flex" justify="center">
          {item}
        </Row>
      </Content>
    )
  }
}
