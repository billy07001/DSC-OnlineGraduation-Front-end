import '../style/App.css';
import '../style/sign.css';
import React, { useState, useEffect } from 'react';
import { Toast, Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Signboard() {
    return (
        <canvas id="clothes"></canvas>
    );
}

function signing() {
    let canvas = document.querySelector('#clothes');
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 16;
    let isDrawing = false;
    let hue;
    let lastX = 0;
    let lastY = 0;

    let direction = true;
    function draw(e) {
        if (!isDrawing) return;
        ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        // hue=0;
        if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1) {
            direction = !direction;
        }
    }
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));
}

function Sign() {
    const [allmsgs, setAllmsgs] = useState([]);
    const [nowmsgs, setNowmsgs] = useState("");

    function handleSubmit(e) {
        const storage = window.localStorage;
        const submit = JSON.stringify({
            giver: storage.getItem("username"),
            content: nowmsgs
        });

        console.log(submit);

        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        e.preventDefault()
        fetch('http://localhost:3000/api/blogs', {
            method: "POST",
            headers,
            body: submit,
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
            });
    }



    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            if (!ignore) {
                const result = await axios('http://localhost:3000/api/blogs');
                setAllmsgs(result.data.msgs);
            }
        }

        fetchData();
        return () => { ignore = true };
    });

    useEffect(() => { signing() })


    return (
        <div className="App-header">
            <div>
                <Container className="messageform">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>輸入留言</Form.Label>
                            <Form.Control as="textarea" rows={3} value={nowmsgs} onChange={e => setNowmsgs(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            送出
                    </Button>
                    </Form>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        {allmsgs.map((allmsg) => (
                            <Col className="message">
                                <Toast>
                                    <Toast.Header>
                                        <strong className="mr-auto">{allmsg.giver}</strong>
                                    </Toast.Header>
                                    <Toast.Body>{allmsg.content}</Toast.Body>
                                </Toast>
                            </Col>
                        )
                        )}
                    </Row>
                </Container>
            </div>

            <div className="signboard">
                <p>留下感人的一句話</p>
                <Signboard />
            </div>
        </div>
    );
}

export default Sign;