import React from 'react';
import { Layout ,Card, Col, Row} from 'antd';


const { Content } = Layout
const { Meta } = Card;


const CardItem = ()=>(
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="//img3.mukewang.com/5a43337e0001160006000338-240-135.jpg" />}
  >
    <Meta
      title="产品经理"
      description="最近在学：1660人"
    />
  </Card>
);


const Dashborder = () => {
    return (
        <Content style={{ padding: '50px' }}>
            <h3>课程列表</h3>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
   
                <Row gutter={24}>
                    <Col className="gutter-row" span={8}>
                        <CardItem />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <CardItem />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <CardItem />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <CardItem />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <CardItem />
                    </Col>
                </Row>
          
                
            </div>
        </Content>
    );
}

export default Dashborder;