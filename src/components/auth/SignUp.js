import React, { Component } from 'react';
import { Layout, Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
const {Content} = Layout 
const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16,offset:4 },
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16, offset: 4 },
    };
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem {...formItemLayout}>
          {getFieldDecorator('phoneNum', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号码" />
          )}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '输入正确的密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
        </FormItem>
        <FormItem {...formTailLayout}>
          <a className="login-form-forgot" href="">忘记密码</a>
          <span style={{float:'right'}}>没有账号，<a href="">注册一个</a></span>
        </FormItem>
      </Form>
    )
  }
}
const LoginFormComponent = Form.create()(NormalLoginForm);
export default LoginFormComponent;