import React, { Component } from 'react';
import {Layout,Row,Col} from 'antd';
import SectionTitleComponet from './SectionTitle';

const {Content} = Layout;

export default class AboutUsComponent extends Component {
  render() {
    return (
      <Content className="section">
          <SectionTitleComponet subtitle="AboutUs" title="关于我们" />
          <Row gutter={16} type="flex" justify="center">
            <Col span={16}>
            凡猫教育在互联网教育和咨询行业深耕4年，主要业务和互联网培训和企业互联网转型咨询和服务，旨在打造互联网的人才生态圈。我们深知现在职场人士的迷茫，针对于学生不同性格和经历，针对学生设计不同的课程体系内容。已举办互联网行业分享沙龙200多场，培训学生3000多人进去了国内大中型的互联网公司，实现了转行梦。我们的使命是让所有转行者都能够轻松入行互联网行业，从事自己喜欢的事业同时获得可观的收入。
            </Col>
          </Row>
         </Content>
    )
  }
}
