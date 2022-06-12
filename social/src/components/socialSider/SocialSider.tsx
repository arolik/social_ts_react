import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Link } from "react-router-dom";

const SocialSider: React.FC = () => {

    return (
        <Sider width={250} >
            <Menu>
                <Menu.Item><Link to="/profile">profile</Link> </Menu.Item>
                <Menu.Item><Link to="/posts">posts</Link></Menu.Item>
                <Menu.Item><Link to="/messages">messages</Link></Menu.Item>
                <Menu.Item><Link to="/news">news</Link></Menu.Item>
                </Menu>
        </Sider>
    )
}

export default SocialSider;
