import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Row } from "antd"
import { useAppSelector } from "../../../store/hooks";
import CreatePost from "./CreatePost";


const MyPosts: React.FC = () => {

    const posts = useAppSelector((state) => state.posts.posts )
    console.log(posts);
    return (
        <Row>
            <Col span={24} >
                <CreatePost />
                <Divider></Divider>
                <Row>
                    <ul>
                        {posts.map((post) => {
                            return <li key={post.id}>{post.text}</li>
                        })}
                    </ul>
                </Row>
            </Col>
            
        </Row>
    )
}

export default MyPosts;