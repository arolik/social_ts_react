import { Col, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import './socialHeader.css';


const SocialHeader: React.FC = () => {

    return (
        <Row justify='center' >
        <Col span={20} >
          <Header className="social-header" >
            <Menu theme='dark'  mode='horizontal' >
              <Menu.Item>text</Menu.Item>
              <Menu.Item>text</Menu.Item>
              <Menu.Item>text</Menu.Item>
            </Menu>
          </Header>
        </Col>
      </Row>
    )
}

export default SocialHeader;