import React, { Component, Fragment } from 'react';
import {Table} from 'antd';

export default class StudentofferComponent extends Component {
  render() {
      const columns=[{
          title:'姓名',
          dataIndex:'name',
          key:'name'
      },{
          title:'原岗位',
          dataIndex:'job',
          key:'job'
      },{
          title:'原薪水',
          dataIndex:'money',
          key:'money'
      },{
          title:'就业单位',
          dataIndex:'company',
          key:'company'
      },{
          title:'就业薪资',
          dataIndex:'newMoney',
          key:'newMoney'
      }]
    const data = [
        {key:'1',name:'姜鑫',job:'外贸业务',money:'5k',company:'广州美人信息技术有限公司',newMoney:'9k'},
        {key:'2',name:'姜鑫',job:'外贸业务',money:'5k',company:'广州美人信息技术有限公司',newMoney:'9k'},
        {key:'3',name:'姜鑫',job:'外贸业务',money:'5k',company:'广州美人信息技术有限公司',newMoney:'9k'},
        {key:'4',name:'姜鑫',job:'外贸业务',money:'5k',company:'广州美人信息技术有限公司',newMoney:'9k'},
        {key:'5',name:'姜鑫',job:'外贸业务',money:'5k',company:'广州美人信息技术有限公司',newMoney:'9k'},
        {key:'6',name:'姜鑫',job:'外贸业务',money:'5k',company:'广州美人信息技术有限公司',newMoney:'9k'},
        {key:'7',name:'姜鑫',job:'外贸业务',money:'5k',company:'广州美人信息技术有限公司',newMoney:'9k'}
    ]
    return (
      <Fragment>
        <Table dataSource={data} columns={columns} pagination={false}/>

      </Fragment>
    )
  }
}
