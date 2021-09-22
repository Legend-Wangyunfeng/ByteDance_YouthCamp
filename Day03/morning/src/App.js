import {Input, Menu, Row, Col, Button} from 'antd'
import { UnorderedListOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import {MailOutlined} from '@ant-design/icons'
import './App.css';
import 'antd/dist/antd.css'

const {SubMenu} = Menu
function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <h1><a id="logo"><img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>Antd Design</a></h1>
        </Col>
        <Col flex="1">
          <div id="searchbox">
            <Input placeholder="搜索"></Input>
          </div>
        </Col>
        <Col>
        <Menu mode="horizontal" id="menu">
          <Menu.Item>设计</Menu.Item>
          <Menu.Item>文档</Menu.Item>
          <Menu.Item>组件</Menu.Item>
          <Menu.Item>资源</Menu.Item>
          <Menu.Item>国内镜像</Menu.Item>
          <SubMenu title=" " icon={<UnorderedListOutlined />}>
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
        </Col>
      </Row>
      <Row justify="center">
        <div id="biglogo">
          <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/basement_prod/80e7d303-aa05-4c2d-94e9-2255ab5cea6c.svg"></img>
          {/* <MailOutlined id="dot"></MailOutlined> */}
        </div>
        
      </Row>
      <Row justify="center">
        <div id="btns">
          <Button type="primary" shape="round">开始使用</Button>
          <Button type="secondary" shape="round">设计语言</Button>
        </div>    
      </Row>
    </div>
  );
}

export default App;
