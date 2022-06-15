import { EditOutlined, SmileTwoTone } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Typography } from "antd";
import { ChangeEvent, useState } from "react";
import { socialGoldColor } from "../../../colors";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createNewStatus } from "../../../store/ProfileSlice";
import './../SocialInfo.css';
const { Text } = Typography;


const ProfileStatus: React.FC = () => {

    const basicTitle: string = 'What are you thinking about now?';
    const [currentStatus, changeStatus] = useState('');
    const [isShowModalStatus, setIsShowModalStatus] = useState(false);
    const status = useAppSelector((state) => state.profileItems.profileItems.statuses.currentStatus );
    const dispatch = useAppDispatch();

    function showWindowForChangeStatus () {
        setIsShowModalStatus(true);
    }

    function publicNewStatus () {
        dispatch(createNewStatus(currentStatus));
        setIsShowModalStatus(false);
        changeStatus('');
    }

    function cancelPublicNewStatus () {
        setIsShowModalStatus(false);
        changeStatus('');
    }

    function setNewStatus (e: ChangeEvent<HTMLInputElement> ) {
        let text = e.target.value;
        changeStatus(text);
    }

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item" >
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image" >
                        <SmileTwoTone twoToneColor={socialGoldColor} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary">status</Text>
                        </Row>
                        <Row>
                            <Text>{status}</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />}  onClick={showWindowForChangeStatus} >change status</Button>
            </Col>
            <Modal title={basicTitle} visible={isShowModalStatus} onOk={publicNewStatus} onCancel={cancelPublicNewStatus} >
                <Input placeholder="enter your new status" value={currentStatus} onChange={setNewStatus} />
            </Modal>
        </Row>
    )
}

export default ProfileStatus;