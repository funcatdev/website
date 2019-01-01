import React, { Component } from 'react';
import { Layout, Row, Col, Button, Modal } from 'antd';

import banner from '../../assets/detailpage/productmanager/0.12.png'

const { Content } = Layout;



export default class BannerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    handleOk(){
        this.setState({
            modalVisible:false
        })
    }
    setModal1Visible(modalVisible) {
        this.setState({ modalVisible })
        // this.getCheckNum();
    }

    render() {
        return (
            <Content style={{ height: 300, margin: '50px 0', background: '#ffffff' }}>
                <Row>
                    <Col span={12}>
                        <div className="ImageBanner" style={{ width: 450, height: 275, float: "right", background: '#11919a' }}>
                            <img src={banner} style={{width:450,height:275}}/>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="description" style={{ padding: '50px 0 0 50px' }}>
                            <div className="title" style={{ fontSize: '26px' }}>
                                理论+实践</div>
                            <div style={{ fontSize: '16px' }}>产品入门到精通</div>
                            <div>
                            </div>
                            <div style={{ paddingTop: '15px' }}>
                                <div className="title" style={{ fontSize: '26px' }}>
                                    就业课程设计</div>
                                <div style={{ fontSize: '16px' }}>2个月从小白到1年+产品经历</div>
                            </div>

                            <Button style={{ marginTop: '20px' }} onClick={() => { this.setModal1Visible(true) }}>资料下载</Button>
                        </div>

                    </Col>

                </Row>
                <Modal
                    title='资料下载'
                    closable={false}
                    centered={true}
                    maskClosable={false}
                    visible={this.state.modalVisible}
                    footer={[
                        <Button key="submit" type="primary"  onClick={()=> this.handleOk()}>
                            确定
                        </Button>
                      ]}

                >
                    <p>
                        百度网盘下载地址：http://localhost:3000/detail
                    </p>
                </Modal>
            </Content>
        )
    }
}
