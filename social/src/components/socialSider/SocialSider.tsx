import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const SocialSider: React.FC = () => {

    type Item = {
        key: string,
        label: ReactNode
    }

    const menuItems: Array<Item> = [
        {
            key: 'profile',
            label: <Link to="/profile">profile</Link>
        },
        {
            key: 'friends',
            label: <Link to="/friends">friends</Link>
        },
        {
            key: 'messages',
            label: <Link to="/messages">messages</Link>
        },
        {
            key: 'groups',
            label: <Link to="/groups">groups</Link>
        },
        {
            key: 'news',
            label: <Link to="/">news</Link>
        }
    ]

    return (
        <Sider width={250} >
            <Menu items={menuItems} >
            </Menu>
        </Sider>
    )
}

export default SocialSider;
