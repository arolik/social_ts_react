
import {  Divider, Row, Typography } from "antd"
import SocialAvatar from "./SocialAvatar";
import SocialInfo from "./SocialInfo";


const SocialProfile: React.FC = () => {

    return (
        <>
            <SocialAvatar />
            <Row>
                <Divider orientation="left">
                    <Typography.Title level={4} >Name Surname</Typography.Title>
                </Divider>
            </Row>
            <SocialInfo />
            
            <Divider></Divider>
        </>
    )
}

export default SocialProfile;