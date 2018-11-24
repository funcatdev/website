
import React from 'react';
import { Layout, Col } from 'antd'
const { Footer } = Layout

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <span>版权所有 © 上海凡猫教育科技有限公司</span> <br/>
            <span>地址：上海市虹口区四川北路 沪ICP备17048255号-1</span>
        </Footer>
    );
}

export default FooterComponent;