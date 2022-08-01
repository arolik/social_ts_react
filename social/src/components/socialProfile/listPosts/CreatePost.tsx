import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Input, Modal, Row } from "antd";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { addNewPost } from "../../../store/PostsSlice";



const CreatePost: React.FC = () => {

    let createPostTitle: string = 'What are you thinking about now?';
    const [isShowModalCreatePost, setIsShowCreateModalPost] = useState(false);
    const [currentPostValue, changePostValue] = useState('');
    const dispatch = useAppDispatch();

    function showWindowForCreatePost () {
        setIsShowCreateModalPost(true);
    }

    function publicNewPost () {
        dispatch(addNewPost(currentPostValue));
        setIsShowCreateModalPost(false);
        changePostValue('');
    }

    function cancelPublicCreatePost () {
        setIsShowCreateModalPost(false);
        changePostValue('');
    }

    function setNewPost (e: ChangeEvent<HTMLInputElement>) {
        let text = e.target.value;
        changePostValue(text);
    }


    return (
        <Row align="middle" >
            <Col span={4} >
                <Avatar size={50} icon={<UserOutlined />} ></Avatar>
            </Col>
            <Col span={20}>
                <Button className="social-info_create-post-btn" onClick={showWindowForCreatePost} >{createPostTitle}</Button>
            </Col>
            <Modal title={createPostTitle} visible={isShowModalCreatePost} onOk={publicNewPost} onCancel={cancelPublicCreatePost} >
                <Input value={currentPostValue} onChange={setNewPost} />
            </Modal>
        </Row>
    )
}

export default CreatePost;