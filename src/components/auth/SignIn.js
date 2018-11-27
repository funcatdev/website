import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class SignIn extends Component {

  constructor(props){
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8, offset: 4 },
    };
    

    return (
     
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="手机号码"
        >
        <Row>
          <Col span={20}>
          {getFieldDecorator('手机', {
            rules: [{ required: true, message: '请输入正确的手机号码' }],
          })(
            <Input   />
          )}
          </Col>
        </Row>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="验证码"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input />
              )}
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </FormItem>
        
        <FormItem {...formTailLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
        </Form>
        
    )
  }
}

const SignInComponent = Form.create()(SignIn);
export default SignInComponent;