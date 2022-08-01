
import { Col, Row } from "antd";
import ProfileCity from "./profileItems/ProfileCity";
import ProfileEmail from "./profileItems/ProfileEmail";
import ProfilePhone from "./profileItems/ProfilePhone";
import ProfileStatus from "./profileItems/ProfileStatus";
import ProfileWork from "./profileItems/ProfileWork";


const SocialInfo: React.FC = () => {

    return (
        <Row justify="start" >
                <Col flex="auto" >
                    <ProfileStatus />
                    <ProfileEmail />
                    <ProfilePhone />
                    <ProfileWork />
                    <ProfileCity />
                </Col>
            </Row>
    )
}

export default SocialInfo;