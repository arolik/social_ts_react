import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Comment, Divider, Row, Tooltip } from "antd"
import moment from "moment";
import { createElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import CreatePost from "./CreatePost";
import HandlePosts from "./HandlePosts";
import Posts from "./Posts";


const MyPosts: React.FC = () => {
    
    return (
        <Row>
            <Col span={24} >
                <CreatePost />
                <Divider className="social-info_divider"></Divider>
                <HandlePosts/>
                <Col >
                <Posts /> 
                </Col>  
            </Col>
        </Row>
    )
}

export default MyPosts;