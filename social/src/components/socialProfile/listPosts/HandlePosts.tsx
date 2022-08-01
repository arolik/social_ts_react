import { Button, Col, Row } from "antd";


const HandlePosts: React.FC = () => {

    return (
        <Row justify="space-between" >
            <Col>
                <Button>all posts</Button>
            </Col>
            <Col>
                <Button>likes posts</Button>
            </Col>
            <Col>
                <Button>Save posts</Button>
            </Col>
        </Row>
    )
}

export default HandlePosts;