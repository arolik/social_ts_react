
import { Col, Layout, Menu, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import './App.css';
import SocialContent from './components/socialContent/SocialContent';
import SocialHeader from './components/socialHeader/SocialHeader';
import SocialSider from './components/socialSider/SocialSider';
import SocialSubbSider from './components/socialSubbSider/SocialSubbSider';

const App: React.FC = () => {
  return (
    <Layout>
      <SocialHeader />
      
      <Row justify='center' >
        <Col span={20}>
          <Layout hasSider >       
              <SocialSider />
              <SocialContent />
              <SocialSubbSider />
          </Layout>
        </Col>
      </Row>
      
    </Layout>
  );
}

export default App;
