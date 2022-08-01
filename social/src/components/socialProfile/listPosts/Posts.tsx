import { UserOutlined } from "@ant-design/icons";
import { Avatar, Comment, Tooltip } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchPosts } from "../../../store/PostsSlice";
import PostLike from "./PostInterface";
import moment from "moment";
import Post from "./Post";

const Posts: React.FC = () => {

    const posts = useAppSelector(state => state.posts.posts);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <>
            {posts.map((post) => {
                return <Post post={post} key={post.id} />
            })}
        </>
    )
}

export default Posts;