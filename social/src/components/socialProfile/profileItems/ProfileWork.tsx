import {  BankTwoTone, EditOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { socialTan} from "../../../colors";
import './../SocialInfo.css';
const { Text } = Typography;


const ProfileWork: React.FC = () => {

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item">
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <BankTwoTone twoToneColor={socialTan} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary">work</Text>
                        </Row>
                        <Row>
                            <Text>my work</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} >change work</Button>
            </Col>

        </Row>
    )
}

export default ProfileWork;