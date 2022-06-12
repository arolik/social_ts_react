import { ToolOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row } from "antd";



const SocialAvatar: React.FC = () => {

    return (
        <Row justify="space-between" align="middle" >
                <Col>
                    <Avatar size={128} icon={<UserOutlined/>}></Avatar>
                </Col>
                <Col>
                    <Button type="primary" icon={<ToolOutlined/>}>edit profile</Button>
                </Col>
            </Row>
    )
}

export default SocialAvatar;