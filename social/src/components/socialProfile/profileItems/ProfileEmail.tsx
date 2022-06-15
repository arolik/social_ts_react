import { EditOutlined, MailTwoTone } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Typography } from "antd";
import { ChangeEvent, useState } from "react";
import { socialDobgerBlue } from "../../../colors";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createNewEmail } from "../../../store/ProfileSlice";
import './../SocialInfo.css';
const { Text } = Typography;


const ProfileEmail: React.FC = () => {

    const basicTitle: string = 'Enter your email';
    const [currentEmail, changeEmail] = useState('');
    const [isShowModalEmail, setIsShowModalEmail] = useState(false);
    const email = useAppSelector((state) => state.profileItems.profileItems.emails.currentEmail );
    const dispatch = useAppDispatch();

    function showWindowForChangeEmail () {
        setIsShowModalEmail(true);
    }

    function publicNewEmail () {
        dispatch(createNewEmail(currentEmail));
        setIsShowModalEmail(false);
        changeEmail('');
    }

    function cancelPublicNewEmail () {
        setIsShowModalEmail(false);
        changeEmail('');
    }

    function setNewEmail (e: ChangeEvent<HTMLInputElement>) {
        let text = e.target.value;
        changeEmail(text);
    }

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item" >
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <MailTwoTone twoToneColor={socialDobgerBlue} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary" >email</Text>
                        </Row>
                        <Row>
                            <Text>{email}</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} onClick={showWindowForChangeEmail} >change email</Button>
            </Col>
            <Modal title={basicTitle} visible={isShowModalEmail} onOk={publicNewEmail} onCancel={cancelPublicNewEmail} >
                <Input placeholder="enter your email" value={currentEmail} onChange={setNewEmail} />
            </Modal>
        </Row>
    )
}

export default ProfileEmail;