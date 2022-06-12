import { EditOutlined, SmileTwoTone } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { socialGoldColor } from "../../../colors";
import './../SocialInfo.css';
const { Text } = Typography;


const ProfileStatus: React.FC = () => {

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item" >
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image" >
                        <SmileTwoTone twoToneColor={socialGoldColor} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary" >status</Text>
                        </Row>
                        <Row>
                            <Text> my new status</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} >change status</Button>
            </Col>
        </Row>
    )
}

export default ProfileStatus;