import React, { Component, Fragment } from 'react'
import { Layout, Row, Col } from 'antd';
import { Link} from 'react-router-dom';
import SectionTitleComponet from './SectionTitle';
import basicClass from '../../assets/indexpage/0.9.png'
import autoClass from '../../assets/indexpage/0.7.png'
import performClass from '../../assets/indexpage/0.8.png'
import manageClass from '../../assets/indexpage/0.10.png'
import dataanyclsClass from '../../assets/indexpage/0.11.png'

const { Content } = Layout;


const data = [
  {
    'title': '基础测试班',
    'image':basicClass,
    'nums': 2180,
    'price':6880
  },
  {
    'title': '自动化测试提升班',
    'image':autoClass,
    'nums': 2180,
    'price':5880
  },
  {
    'title': '性能测试提升班',
    'nums': 2180,
    'image':performClass,
    'price':5880
  },
  {
    'title': '产品经理就业班',
    'image':manageClass,
    'nums': 2180,
    'price':5880
  },
  {
    'title': '数据分析就业班',
    'image':dataanyclsClass,
    'nums': 2180,
    'price':5880
  }
]


const item = data.map((val,index)=>{
  return(
      <li style={{marginLeft:9,marginTop:10,float:'left',padding:'7px 7px 10px',listStyle:'none'}}>
      <div style={{margin:"5px",position:'relative'}}>
        <div style={{background:'#fff'}}>
          <div style={{width:370,height:261}}>
            <img src={val.image} alt={val.title}/>
          </div>
          <div style={{position:'absolute',left:0,top:185,width:104,height:41, justifyContent:'center', textAlign:'center',lineHeight:'41px', background:'#1a54e7',color:'#fff',cursor:'pointer'}}>
          <span>¥{val.price}元</span>
          </div>
        </div>
        <div style={{textAlign:'left',padding:'5px 0'}}>
          <div style={{fontSize:18,color:'#000000'}}>{val.title}</div>
          <div><span>{val.nums}人在学习</span>  | <span><Link to='/detail'>查看详情</Link> </span></div>
        </div>
      </div>  
      </li>
  )
})

// cnost item

export default class ScheduleComponet extends Component {
  render() {
    return (
      <Fragment>
        <Row gutter={24} type='flex' justify='center'>
          <Col span={20} >
            <SectionTitleComponet subtitle="Curriculum Schedule" title="课程列表" />
          </Col>
        </Row>
        <Row>
        <ul style={{margin:0 }}>
          {item}
        </ul>
        </Row>
      </Fragment>
      
        
      
    )
  }
}
