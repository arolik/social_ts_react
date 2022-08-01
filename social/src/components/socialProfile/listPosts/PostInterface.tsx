import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row } from "antd"
import { ChangeEvent, createElement, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { ChangeFetchPost, RemoveFetchPost } from "../../../store/PostsSlice";

interface IPostParams {
    id: number
}

const PostInterface: React.FC<IPostParams> = ({id}) => {
    
    const deletePostTitle = 'Delete post';
    const editPostTitle = 'Edit';
    const changePostTitle = 'change your post';
    const dispatch = useAppDispatch();
    const [fill, setFill] = useState<string | null>(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [isShowWindowChangePost, setIsShowWindowChangePost] = useState(false);
    const [postValue, setPostValue] = useState('');

    function changeLikes() {
        setLike(1);
        setDislike(0);
        setFill('like');
    }

    function changeDislikes() {
        setDislike(1);
        setLike(0);
        setFill('dislike');
    }

    function deletePost () {
        dispatch(RemoveFetchPost(id));
    }

    function showWindowChangePost () {
        setIsShowWindowChangePost(true);
    }

    function setNewPostValue (e: ChangeEvent<HTMLInputElement>) {
        let text = e.target.value;
        setPostValue(text);
    }

    function cancelChangePost () {
        setIsShowWindowChangePost(false);
        setPostValue('');
    }

    function createNewPostValue () {
       dispatch(ChangeFetchPost({id, postValue}));
        setIsShowWindowChangePost(false);
        setPostValue('');
    }
    
    

    return (
        
        <Row gutter={24} justify='space-between'>
            <Col span={10}>
                <Row >
                    <Col span={12}>
                        <span onClick={changeLikes} >
                            {createElement(fill === 'like' ? LikeFilled : LikeOutlined)}
                            <span>{like}</span>
                        </span>

                    </Col>
                    <Col span={12}>
                        <span onClick={changeDislikes} >
                            {createElement(fill === 'dislike' ? DislikeFilled : DislikeOutlined)}
                            <span>{dislike}</span>
                        </span>
                    </Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row justify='end'>
                    <Col >
                        <Button onClick={showWindowChangePost} >{editPostTitle}</Button>    
                    </Col>
                    <Col >
                        <Button onClick={deletePost} >{deletePostTitle}</Button>  
                    </Col>
                    <Modal title={changePostTitle} visible={isShowWindowChangePost} onOk={createNewPostValue} onCancel={cancelChangePost} >
                        <Input value={postValue} onChange={setNewPostValue} />
                    </Modal>
                </Row>
            </Col>

        </Row>
    )
}

export default PostInterface;