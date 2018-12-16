import React, { Component,Fragment } from 'react';
import { Row,Col,Table,Collapse,Card,Button} from 'antd';
import StudentofferComponent from './studentoffer';

import '../../styles/detailcourse.css';

const Panel = Collapse.Panel;


export default class CourselistComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            filteredInfo: null,
            sortedInfo: null
        }
    }
  render() {
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
      }, {
        title: 'Age',
        dataIndex: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
      }];
      const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }];

      const text = (
        <p style={{ paddingLeft: 24 }}>
          A dog is a type of domesticated animal.
          Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.
        </p>
      )
    return (
        <Fragment>
        <Row  type='flex' justify='center'>
            <Col span={16}>
            <h1 style={{textAlign:'center'}}>产品经理前景</h1>
            <p>我们所处的互联网时代，以技术为中心已逐步向产品为中心转化， “产品经理” 是任何互联网企业不可或缺的职位，薪资和发展前景也是众多人转型，入行的动力。一个优秀的产品经理不但能引导产品的发展，而且能引导公司的发展。</p>
            </Col>
        </Row>
        <Row type="flex" justify='center'>
        <Col span={16}>
        <Row gutter={8} type="flex" justify='center'>
            <Col span={12}>
            <Table columns={columns} bordered dataSource={data} size="small" />
            </Col>
            <Col span={12}>
            <Table columns={columns} bordered dataSource={data} size="small" />
            </Col>
        </Row>
        </Col>
            </Row>
        
        <Row  type='flex' justify='center'>
            <Col span={16}>
            <h1 style={{textAlign:'center'}}>课程大纲</h1>
            <p style={{textAlign:'center'}}>产品从0 到1 从1到N</p>
            </Col>

        </Row>
        <Row type='flex' justify='center'>
            <Col span={16}>
            <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel showArrow={false} disabled={true} style={{fontSize:20,background:"#1a54e7",color:'#fff',cursor:'pointer'}} header="凡猫教育产品经理课表" key="0"></Panel>
    <Panel header="第一周：初识产品经理；必备工具讲解" key="1">
      {text}
    </Panel>
    <Panel header="第二周：原型设计工具" key="2">
      {text}
    </Panel>
    <Panel header="第三周：产品原型设计；商业/市场需求文档" key="3">
      {text}
    </Panel>
    <Panel header="第四周：产品设计、产品需求文档；以用户体验为中心的设计" key="4">
      {text}
    </Panel>
    <Panel header="第五周：产品实战：电商APP、电商APP后台产品" key="5">
      {text}
    </Panel>
    <Panel header="第六周：项目实战：金融产品" key="6">
      {text}
    </Panel>
    <Panel header="第七周：项目实战：团队产品设计；求职指导；毕业答辩" key="7">
      {text}
    </Panel>
    <Panel header="第八周：项目实战：B端产品设计；产品运营；数据分析；项目管理" key="8">
      {text}
    </Panel>
   
  </Collapse>
            </Col>
        </Row>
        <Row  type='flex' justify='center'>
            <Col span={16}>
            <h1 style={{textAlign:'center'}}>老师介绍</h1>
            
            </Col>
        </Row>
        <Row type='flex' justify='center'>
            <Col span={20}>
            <Row gutter={8} type='flex' justify='center'>
                <Col span={8}>
                <Card style={{textAlign:'center'}}>
                    <h2>杨老师</h2>
                    <h4>5年产品经理</h4>
                    <p>平安银行总行，零售网络事业部品经理。负责过多款产品，熟悉产品整个生命周期的管理，产品运营和数据分析等</p>
                    <h4>负责过的产品</h4>
                    <Button style={{margin:'2px'}} size='small' type='primary'>平安车E通</Button>
                    <Button style={{margin:'2px'}} size='small' type='primary'>气融助手</Button>
                    <Button style={{margin:'2px'}} size='small' type='primary'>T平台</Button>
                </Card>
                </Col>
                <Col span={8}>
                <Card style={{textAlign:'center'}}>
                    <h2>辛迪</h2>
                    <h4>5年产品经理</h4>
                    <p>曾在一线互联网公司担任产品负责人，也曾在创始公司担任产品VP。负责一线公司50余条产品线设计，用户研究和体验评估，统领过整套产品生态的设计，搭建和运营。</p>
                    <h4>负责过的产品</h4>
                    <Button style={{margin:'2px'}} size='small' type='primary'>教学系统</Button>
                    <Button style={{margin:'2px'}} size='small' type='primary'>课程电商</Button>
                </Card>
                </Col>
                <Col span={8}>
                <Card style={{textAlign:'center'}}>
                    <h2>雪莉酒</h2>
                    <h4>4年产品经理</h4>
                    <p>负责电商，金融，人工智能等产品，涉及产品前后台，产品对象面向Ç端和乙端，产品端覆盖PC，移动端。
曾辅导上百名同学转行产品经理。</p>
                    <h4>负责过的产品</h4>
                    <Button style={{margin:'2px'}} size='small' type='primary'>机器学习</Button>
                    <Button style={{margin:'2px'}} size='small' type='primary'>汽车金融</Button>
                    <Button style={{margin:'2px'}} size='small' type='primary'>车工坊</Button>
                </Card>
                </Col>
            </Row>
            </Col>
        </Row>



        <Row  type='flex' justify='center'>
            <Col span={16}>
            <h1 style={{textAlign:'center'}}>学生就业</h1>
            <StudentofferComponent />
            </Col>
        </Row>
        <Row  type='flex' justify='center'>
            <Col span={16}>
            <Row gutter={8} style={{borderRadius:'40px',height:'92px',background:'#1a54e7',textAlign:'center',lineHeight:'92px'}}>
                <Col span={12} style={{fontSize:'28px',color:'#fff', fontWeight:500}}><span>产品经理就业班</span><span style={{paddingLeft:'15px'}}>仅售¥5880</span></Col>
                <Col span={12}><Button size='large' style={{borderRadius:'22px'}} >立即购买</Button><Button size='large' ghost={true} style={{marginLeft:'20px', borderRadius:'22px'}}>电话咨询</Button></Col>
            </Row>
                
            </Col>
        </Row>
        </Fragment>
    )
  }
}
