
import {  Divider, Row, Typography } from "antd"
import MyPosts from "./listPosts/MyPosts";
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
            <Divider className="social-info_divider" ></Divider>
            <MyPosts/>
        </>
    )
}

export default SocialProfile;