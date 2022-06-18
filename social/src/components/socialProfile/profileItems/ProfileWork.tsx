import {  BankTwoTone, EditOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Typography } from "antd";
import { ChangeEvent, useState } from "react";
import { socialTan} from "../../../colors";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createNewWork } from "../../../store/ProfileSlice";
import './../SocialInfo.css';
const { Text } = Typography;

const ProfileWork: React.FC = () => {

    const basicTitle: string = 'Enter your work place';
    const [currentWork, changeWork] = useState('');
    const [isShowModalWork, setIsShowModalWork] = useState(false);
    const work = useAppSelector((state) => state.profileItems.profileItems.works.currentWork );
    const dispatch = useAppDispatch();

    function showWindowForChangeWork () {
        setIsShowModalWork(true);
    }

    function publicNewWork () {
        dispatch(createNewWork(currentWork));
        setIsShowModalWork(false);
        changeWork('');
    }

    function cancelPublicNewWork () {
        setIsShowModalWork(false);
    }

    function setNewWork (e: ChangeEvent<HTMLInputElement>) {
        let text = e.target.value;
        changeWork(text);
    }

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item">
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <BankTwoTone twoToneColor={socialTan} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary">work</Text>
                        </Row>
                        <Row>
                            <Text>{work}</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} onClick={showWindowForChangeWork} >change work</Button>
            </Col>
            <Modal title={basicTitle} visible={isShowModalWork} onOk={publicNewWork} onCancel={cancelPublicNewWork} >
                <Input value={currentWork} onChange={setNewWork} />
            </Modal>

        </Row>
    )
}

export default ProfileWork;