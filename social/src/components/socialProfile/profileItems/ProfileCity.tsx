import {  EditOutlined, EnvironmentTwoTone } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { socialDarkLateGrey } from "../../../colors";
import './../SocialInfo.css';
const { Text } = Typography;



const ProfileCity: React.FC = () => {

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item">
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <EnvironmentTwoTone twoToneColor={socialDarkLateGrey} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary">city</Text>
                        </Row>
                        <Row>
                            <Text>my city</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} >change city</Button>
            </Col>

        </Row>
    )
}

export default ProfileCity;