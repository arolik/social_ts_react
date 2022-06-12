import { Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";
import SocialMessages from "../socialMessages/SocialMessages";
import SocialNews from "../socialNews/SocialNews";
import SocialPosts from "../socialPosts/SocialPosts";
import './SocialContent.css';
import SocialProfile from "../socialProfile/SocialProfile";

const SocialContent: React.FC = () => {

    return (
        <Col span={13} offset={1} >
            <Content className="social-content_wrapper">
                <Routes>
                    <Route path="/profile" element={<SocialProfile/>}></Route>
                    <Route path="/posts" element={<SocialPosts/>} ></Route>
                    <Route path="/messages" element={<SocialMessages/>} ></Route>
                    <Route path="/news" element={<SocialNews/>} ></Route>
                </Routes>
            </Content>
        </Col>
    )
}

export default SocialContent;