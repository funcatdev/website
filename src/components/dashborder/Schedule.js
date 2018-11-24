import React, { Component } from 'react'
import { Layout, Row, Col,Card,Icon,Avatar } from 'antd';
import SectionTitleComponet from './SectionTitle';

const { Content } = Layout;
const { Meta } = Card

const data = [
  {
    'title': '基础就业班',
    'nums': 2180
  },
  {
    'title': '自动化测试提升班',
    'nums': 2180
  },
  {
    'title': '性能测试提升班',
    'nums': 2180
  },
  {
    'title': '产品经理就业班',
    'nums': 2180
  },
  {
    'title': '数据分析就业班',
    'nums': 2180
  }
]

const item = data.map((val,index)=>{
  return(
    <Col md={7} sm={12}>
        <Card
        style={{ width: 300 }}
        title="hellowor"
        headStyle={{fontSize:12}}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        >
      <Meta
        style={{textAlign:"left"}}
        title={val.title}
        description={val.nums+"正在学习"}
      />
    </Card>
    </Col>
  )
})

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
