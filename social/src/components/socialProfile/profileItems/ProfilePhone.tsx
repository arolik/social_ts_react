import {  EditOutlined, PhoneTwoTone } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { socialSpringGreen } from "../../../colors";
import './../SocialInfo.css';
const { Text } = Typography;

const ProfilePhone: React.FC = () => {

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item">
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <PhoneTwoTone twoToneColor={socialSpringGreen} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary">phone</Text>
                        </Row>
                        <Row>
                            <Text>my phone</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />}>change phone</Button>
            </Col>

        </Row>
    )
}

export default ProfilePhone;