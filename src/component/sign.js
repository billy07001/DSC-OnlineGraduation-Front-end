import '../style/App.css';
import '../style/sign.css';
import React, { useEffect } from 'react';
import { Toast, Form, Button, Container, Row, Col } from 'react-bootstrap';

const allmsgs = [];

function Sign() {

    useEffect(() => {
        let headers = {
            "Accept": "application/json"
        }
        fetch('http://localhost:3000/api/blogs', {
            method: "GET",
            headers,
        })
            .then(res => res.json())
            .then(json => {
                json.msgs.map((msg) => {
                    allmsgs.push({ giver: msg.giver, content: msg.content });
                })
            });
    });
    const all = allmsgs.map((allmsg, index) => {
        return (
            <Col className="message">
                <Toast key={index}>
                    <Toast.Header>
                        <strong className="mr-auto">{allmsg.giver}</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>{allmsg.content}</Toast.Body>
                </Toast>
            </Col>
        )
    });

    console.log(allmsgs);
    return (
        <div className="App-header">
            <div className="messageform">
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>輸入留言</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        送出
                    </Button>
                </Form>
            </div>
            <div>
                <Container>
                    <Row>
                        {all}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Sign;