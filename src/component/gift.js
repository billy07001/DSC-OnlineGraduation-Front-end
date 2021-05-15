import '../style/App.css';
import '../style/gift.css';
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import flower from '../view/flower.jfif';
import teddybear from '../view/teddybear.jfif';

const giftitems = [
    { name: "flower", img: flower },
    { name: "teddybear", img: teddybear }
];

console.log(giftitems);
function Gift() {
    return (
        <div className="App-header">
            <div className="selectgift">
                <p>挑選想要送的禮物</p>
            </div>

            <div>
                <Container>
                    <Row>
                        {giftitems.map((giftitem, index) => {
                            return (
                                <Col className="giftitem">
                                    <Card key={index}>
                                        <Card.Img variant="top" src={giftitem.img} />
                                        <Card.Body>
                                            <Card.Title>{giftitem.name}</Card.Title>
                                            <Card.Text>

                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col >
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Gift;