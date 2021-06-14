import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined

} from '@ant-design/icons';
import { useState } from 'react';
import './App.css'
import Cadastro from './component/Cadastro/Cadastro';
import Login from './component/Login/Login'
import Home from './component/home/home'
import Listadeusuario from './component/listausuario/listadeusuario';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App (){
  const [collapsed, setCollapsed] = useState(false)
  return<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="0" icon={<HomeOutlined />}>
              Inicio
            </Menu.Item>
           
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Login
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              Listagem de Usuario 
            </Menu.Item>
           
            <Menu.Item key="9" icon={<FileOutlined />}>
              Cadastro
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><h1>Gerenciamento de usuario</h1></Breadcrumb.Item>
              
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Router>
          <div className="App">
            <div className="App-intro">
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Listadeusuario" component={Listadeusuario} />
            <Route exact path="/Cadastro" component={Cadastro} />
          </div>
        </div>
      </Router>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> ©2018 Yuri Cainã.</Footer>
        </Layout>
      </Layout>
}




export default App;