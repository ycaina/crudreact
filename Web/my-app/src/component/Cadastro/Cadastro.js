import React, { useEffect, useState }  from 'react';

import { Form, Input, Button,Card, Alert, Space, Checkbox, Radio  } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined } from '@ant-design/icons';
import axios from "axios";
import Password from 'antd/lib/input/Password';



export default  function  LoginPage (){

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.onFinish = this.onFinish.bind(this.onFinish);
    }
     
    }

    


 
const  onFinish = async (value) =>{	
  setSataerro(true)
  await axios.default.post('http://127.0.0.1:8686/user', value)
 .then(res => {
    console.log('Banco:', value)
    console.log("Sucesso",res)
  }).catch(err =>{

    let dataerro = this.err.response.data.err
     
    console.log('Erro:', dataerro )
    


  })
 
}

const [form] = Form.useForm()
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = (value) => {
    console.log('Success:', value);
  };

}

  const onFinishFailed = (errorInfo) => {
    console.log('Falha:', errorInfo.errorFields);
  };

  console.log(this)

  const [dataerro, setSataerro] = React.useState('');

      return ( <Card>
      <div >
    

      <Form
      style={{ width:500 }}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <Form.Item
        label="Nome"
        name="name"
        rules={[
          {
            required: true,
            message: 'Informe o nome',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label=" E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Informe o E-mail',
          },
        ]}
      >
        <Input />
      </Form.Item>
    
      <Form.Item
        label="Senha"
        name="password"
        rules={[
          {
            required: true,
            message: 'Digite a Senha!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
                  
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Lembrar a Senha!</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form.Item>
    </Form> 
       
       
      </div>
       
        </Card>
        )
    };
