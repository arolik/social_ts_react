import {  EditOutlined, PhoneTwoTone } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Typography } from "antd";
import { ChangeEvent, useState } from "react";
import { socialSpringGreen } from "../../../colors";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createNewPhone } from "../../../store/ProfileSlice";
import './../SocialInfo.css';
const { Text } = Typography;


const ProfilePhone: React.FC = () => {

    const basicTitle = 'Enter your phone number';
    const [currentPhone, changePhone] = useState('');
    const [isShowModalPhone, setIsShowModalPhone] = useState(false);
    const phone = useAppSelector((state) => state.profileItems.profileItems.phones.currentPhone );
    const dispatch = useAppDispatch();

    function showWindowForChangePhone () {
        setIsShowModalPhone(true);
    }

    function publicNewPhone () {
        dispatch(createNewPhone(currentPhone));
        setIsShowModalPhone(false);
        changePhone('');
    }

    function cancelPublicNewPhone () {
        setIsShowModalPhone(false);
    }

    function setNewPhone (e: ChangeEvent<HTMLInputElement>) {
        let text = e.target.value;
        changePhone(text);
    }

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item">
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <PhoneTwoTone twoToneColor={socialSpringGreen} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary">phone</Text>
                        </Row>
                        <Row>
                            <Text>{phone}</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} onClick={showWindowForChangePhone} >change phone</Button>
            </Col>
            <Modal title={basicTitle} visible={isShowModalPhone} onOk={publicNewPhone} onCancel={cancelPublicNewPhone} >
                <Input placeholder="enter your phone" value={currentPhone} onChange={setNewPhone} />

            </Modal>
        </Row>
    )
}

export default ProfilePhone;