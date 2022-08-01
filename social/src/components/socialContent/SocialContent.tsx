import { Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";
import SocialMessages from "../socialMessages/SocialMessages";
import SocialNews from "../socialNews/SocialNews";

import SocialProfile from "../socialProfile/SocialProfile";
import SocialFriends from "../socialFriends/SocialFriends";
import SocialGroups from "../socialGroups/SocialGroups";

const SocialContent: React.FC = () => {

    return (
        <Col span={13} offset={1} >
            <Content className="social-content_wrapper">
                <Routes>
                    <Route path="/profile" element={<SocialProfile/>}></Route>
                    <Route path="/friends" element={<SocialFriends/>}></Route>
                    <Route path="/messages" element={<SocialMessages/>} ></Route>
                    <Route path="/groups" element={<SocialGroups/>} ></Route>
                    <Route path="/" element={<SocialNews/>} ></Route>
                </Routes>
            </Content>
        </Col>
    )
}

export default SocialContent;