import React from 'react';
import { Layout,List,Card, Col, Row} from 'antd';


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

const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];

const CourseContent = ()=>(
    <>
    <h3>课程优势</h3>
    <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </>
);


const AboutUs = ()=>(
    <>
    <h3>关于我们</h3>
    <p>凡猫教育在互联网教育和咨询行业深耕4年，主要业务和互联网培训和企业互联网转型咨询和服务，旨在打造互联网的人才生态圈。我们深知现在职场人士的迷茫，针对于学生不同性格和经历，针对学生设计不同的课程体系内容。已举办互联网行业分享沙龙200多场，培训学生3000多人进去了国内大中型的互联网公司，实现了转行梦。我们的使命是让所有转行者都能够轻松入行互联网行业，从事自己喜欢的事业同时获得可观的收入。</p>
    </>
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
            <CourseContent />
            <AboutUs/>
        </Content>
    );
}

export default Dashborder;