import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Input, Modal, Row } from "antd";
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createPost } from "../../store/PostsSlice";
import Post from "./Post";
import './SocialPosts.css';

const SocialPosts: React.FC = () => {
    
    const [isShowFieldforPost, handleFieldForPost] = useState(false);
    const [postText, setPostText] = useState('');
    const dispatch = useAppDispatch();
    
    const showField = () => {
        handleFieldForPost(true);
    }

    function publishPost () {
        dispatch(createPost(postText));
        handleFieldForPost(false);
    }

    const cancelCreatePost = () => {
        handleFieldForPost(false);
    }

    function writePostText (e: ChangeEvent<HTMLInputElement> ) {
        let text = e.target.value;
        setPostText(text);
    }

    return (
        <>
            <Row align="middle" >
                <Avatar size={50} icon={<UserOutlined/>} />
                <Button type="primary" 
                icon={<EditOutlined />} className="social-posts_btn_handle" onClick={showField} >
                New Post
                </Button>
                <Modal title="Create your Post" visible={isShowFieldforPost} 
                onOk={publishPost} onCancel={cancelCreatePost} >
                    <Input value={postText} onChange={writePostText} />
                </Modal>
            </Row>
            <Divider></Divider>
            <Post />
        </>
    )
}

export default SocialPosts;