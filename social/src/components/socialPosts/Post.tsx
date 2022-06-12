
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Comment } from 'antd';
import { useAppSelector } from '../../store/hooks';
import './SocialPost.css';

const Post: React.FC = () => {

    const posts = useAppSelector((state) => state.posts.posts );

    return (
        <ul className='social-post' >
            {posts.map((post) => (
                <li key={post.id}>
                    <Comment 
                    avatar={<Avatar size={32} icon={<UserOutlined/>} />}
                    author={<a href="#" >Name Surname</a>}
                    content={<p>{post.text}</p>}
                    />
                </li>
            ))}
        </ul>

    )
}

export default Post;