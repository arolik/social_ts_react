import { UserOutlined } from "@ant-design/icons";
import { Avatar, Comment, Tooltip } from "antd";

import moment from "moment";
import PostInterface from "./PostInterface";


interface PostType  {
    userId: number,
    id: number,
    body: string,
    title: string,
}

interface IPost {
    post: PostType
}

const Post: React.FC<IPost> = ({post}) => {

    return (
        <>
            <Comment className="social-posts_list"
                actions={[
                    <PostInterface id={post.id} />
                ]}
                author={<a>Han Solo</a>}
                avatar={<Avatar icon={<UserOutlined />} />}
                content={
                    <p style={{ whiteSpace: 'normal' }}>{post.body}</p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
        </>
    )
}

export default Post;