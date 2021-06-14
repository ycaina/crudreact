import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Form, Table, Input, Modal,  Button } from 'antd';
const authGateway = require('../../service/auth/auth-service'); 

   


export default function  Listadeusuario (){
  const [] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
 

    
  
   
    
      const onFinish = async () =>{	
        
               
        let req = {
          headers: {
           Authorization: "Bearer" + localStorage.getItem('token')
           
          }
          

        }
        
        console.log(req)
        await axios.default.get('http://127.0.0.1:8686/user', req).then(res => {
              console.log(res)
    
          }).catch(err => {
            console.log(err)
          })
 
  
        
        
          }
    
     
console.log(onFinish())

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const colunas = [
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome"
  },
  {
    title: "E-mal",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "Id"
  },
  {
    title: "Erarquia",
    dataIndex: "erarquia",
    key: "erarquia"
  },
  {
    title: "Ação",
    dataIndex: "editar",
    key: "editar",
    render: fila =>  <> 
    <Button type="primary"  onClick={showModal}>Editar</Button>  {" "}  <Button type="primary" danger>Excluir</Button>
    </>
  }
 
]

const data =[
  {
    key: '2',
    nome: 'Yuri Cainã',
    email: 'yuri.moraes@gmail.com',
    id: 1,
    erarquia: "ADM"

  },
  {
    key: '3',
    nome: 'Carlos',
    email: 'carlos.moraes@gmail.com',
    id: 2,
    erarquia: "ADM"

  },
  {
    key: '4',
    nome: 'Maria',
    email: 'maria.moraes@gmail.com',
    id: 3,
    erarquia: "ADM"

  },
  {
    key: '5',
    nome: 'Sara',
    email: 'sara.moraes@gmail.com',
    id: 4,
    erarquia: "ADM"

  }
]

const onFinishFailed = (errorInfo) => {
  console.log('Falha:', errorInfo.errorFields);
};

   
      return(
        <>
        <div >
         <Modal title="Editar Cadastro" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
         <Form layout='vertical'
           
          
         >
         <Form.Item
         name={['nome']}
         label='Nome:'
         >
        <Input   style={{ width:450  }} required type='text' placeholder=' Digite o nome' />

         </Form.Item>
      
        </Form> 
          <Form
        layout='vertical'>
         <Form.Item
         name={['email']}
         label='E-mail:'
         >
             <Input   style={{ width:450  }}  required type='mail' placeholder='Ex. exemplo@exemplo.com.br' />

         </Form.Item>
       </Form>
       <Form
        layout='vertical'>
         <Form.Item
         name={['entidade']}
         label='Entidade:'
         >
             <Input   style={{ width:450  }}  required type='text' placeholder='Ex. ADM ou Usuario comum' />

         </Form.Item>
       </Form>
       
    
        
          </Modal>
          <br/>
          <Table
          columns={colunas}
          dataSource={data}
          onFinish={onFinish}
          />

        </div>
      </>
      )
    };
   