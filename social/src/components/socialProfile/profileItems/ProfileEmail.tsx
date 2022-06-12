import { EditOutlined, MailTwoTone } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { socialDobgerBlue } from "../../../colors";
import './../SocialInfo.css';
const { Text } = Typography;

const ProfileEmail: React.FC = () => {

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item" >
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <MailTwoTone twoToneColor={socialDobgerBlue} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary" >email</Text>
                        </Row>
                        <Row>
                            <Text>my email</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} >change email</Button>
            </Col>
        </Row>
    )
}

export default ProfileEmail;