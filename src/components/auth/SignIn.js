import React, { Component } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import {connect} from 'react-redux'
import axios from 'axios';
import {createNewUser} from '../../store/actions/authAction'


const FormItem = Form.Item;

class SignIn extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      count: 180,
      disabled: false,
      phoneNum:null,
      authinfoErr:false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        axios.post('/api/v1/verifycode',values).then(res=>{
          console.log("res======",res);
          if(res.status == 200){
            this.props.createNewUser(this.state.phoneNum);
          }else{
            this.setState({
              authinfoErr:true,

            })
            console.log("todo: 手机号或者验证码有误")
          }
          
        }).catch(err=>{
          console.log('err',err);
        })
      }
    });
  }

  getVerifyCode() {
    //注册手机号
    console.log("获取验证码")
    axios.post('/api/v1/contact',{phoneNum:this.state.phoneNum}).then((res)=>{
      console.log(res.data,res.status)
      // if(this)
    })
    
    this.interval = setInterval(() => {
      let c = this.state.count;
      this.setState({
        count: c - 1,
        disabled: true
      })
      if (this.state.count === 0) {
        this.setState({
          count: 180,
          disabled: false
        })
        clearInterval(this.interval);
      }
    }, 1000);
  }
  changePhoneNum(e){
    e.preventDefault();
    this.setState({
      phoneNum:e.target.value
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16, offset: 4 },
    };


    return (

      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="手机号码"
        >
          <Row>
            <Col span={20}>
              {getFieldDecorator('phoneNum', {
                rules: [
                  { required: true, message: '请输入正确的手机号码' },
                  { validator:this.validataorPhoneNum}
                ],
              })(
                <Input placeholder="手机号码" disabled={this.state.disabled} onChange={this.changePhoneNum.bind(this)}/>
              )}
            </Col>
          </Row>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="验证码"
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('checkCode', {
                rules: [{ required: true, message: '请输入正确的验证码' }],
              })(
                <Input />
              )}
            </Col>
            <Col span={12}>
              <Button disabled={this.state.disabled}  onClick={this.getVerifyCode.bind(this) }>{!this.state.disabled ? '获取验证码' : this.state.count + "秒后重试"}</Button>
            </Col>
          </Row>

        </FormItem>
        
        {this.state.authinfoErr ? (<FormItem style={{margin:0,color:'red'}}  {...formTailLayout}><span>输入信息有误!请检查手机号码或者验证码</span></FormItem>) : (<></>)}
        
        
        <FormItem {...formTailLayout}>
          <Button type="primary" htmlType="submit">注册</Button>
        </FormItem>
      </Form>

    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    createNewUser:(newUser)=> dispatch(createNewUser(newUser))
  }
}

const RegisterComponent = Form.create()(SignIn);
export default connect(null,mapDispatchToProps)(RegisterComponent);