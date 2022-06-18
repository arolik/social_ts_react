import {  EditOutlined, EnvironmentTwoTone } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Typography } from "antd";
import { ChangeEvent, useState } from "react";
import { socialDarkLateGrey } from "../../../colors";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createNewCity } from "../../../store/ProfileSlice";
import './../SocialInfo.css';
const { Text } = Typography;

const ProfileCity: React.FC = () => {

    const basicTitle: string = 'Enter your city';
    const [currentCitty, changeCity] = useState('');
    const [isShowModalCity, setIsShowModalCity] = useState(false);
    const city = useAppSelector((state) => state.profileItems.profileItems.cities.currentCity );
    const dispatch = useAppDispatch();

    function showWindowForChangeCity () {
        setIsShowModalCity(true);
    }

    function publicNewCity () {
        dispatch(createNewCity(currentCitty));
        setIsShowModalCity(false);
        changeCity('');
    }

    function cancelPublicNewCity () {
        setIsShowModalCity(false);
    }

    function setNewCity (e: ChangeEvent<HTMLInputElement>) {
        let text = e.target.value;
        changeCity(text);
    }

    return (
        <Row align="middle" justify="space-between" className="social-info_myInfo_item">
            <Col>
                <Row align="middle" >
                    <Col className="social-info_image">
                        <EnvironmentTwoTone twoToneColor={socialDarkLateGrey} style={{ fontSize: '32px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Text type="secondary">city</Text>
                        </Row>
                        <Row>
                            <Text>{city}</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Button type="primary" icon={<EditOutlined />} onClick={showWindowForChangeCity} >change city</Button>
            </Col>
            <Modal title={basicTitle} visible={isShowModalCity} onOk={publicNewCity} onCancel={cancelPublicNewCity} >
                <Input value={currentCitty} onChange={setNewCity} />
            </Modal>

        </Row>
    )
}

export default ProfileCity;