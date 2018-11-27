import React, { Component } from 'react';
import { Layout, Row, Col, Button } from 'antd';
const { Content } = Layout;



export default class BannerComponent extends Component {
    render() {
        return (
            <Content style={{height:300,margin:'50px 0',background:'#ffffff'}}>
                <Row>
                    <Col span={12}>
                        <div className="ImageBanner" style={{width:450,height:275,float:"right",background:'#11919a'}}>

                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="description" style={{padding:'50px 0 0 50px'}}>
                            <div className="title" style={{fontSize:'26px'}}>
                                    理论+实践</div>
                                <div style={{fontSize:'16px'}}>产品入门到精通</div>
                            <div>
                        </div>
                        <div style={{paddingTop:'15px'}}>
                        <div className="title" style={{fontSize:'26px'}}>
                                就业课程设计</div>
                            <div style={{fontSize:'16px'}}>2个月从小白到1年+产品经历</div>
                        </div>
                            
                            <Button style={{marginTop:'20px'}}>资料下载</Button>
                        </div>
                        
                    </Col>

                </Row>
            </Content>
        )
    }
}
