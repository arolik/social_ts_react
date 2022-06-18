import { Col, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import './socialHeader.css';


const SocialHeader: React.FC = () => {

  const menuItems = [
    {
      key: 'home',
      label: <Link to="/">Home</Link>
    },
    {
      key: 'friends',
      label: <Link to="/friends">Friends</Link>
    },
    {
      key: 'nextItem',
      label: <Link to="/">nextItem</Link>
    }
  ]

    return (
        <Row justify='center' >
        <Col span={20} >
          <Header className="social-header" >
            <Menu theme='dark'  mode='horizontal' items={menuItems} >
            </Menu>
          </Header>
        </Col>
      </Row>
    )
}

export default SocialHeader;