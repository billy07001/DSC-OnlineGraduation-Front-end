import '../style/App.css';
import '../style/photo.css';
import React, { useEffect } from 'react'
//import html2canvas from 'html2canvas'
import { Container, Row, Col, Button } from 'react-bootstrap';
import diploma from '../view/diploma.jpg';
import photo1 from '../view/photo1.jpg';

function Photo() {
    useEffect(() => {

    });
    return (
        <div className="App-header">
            <div className="photo">
                <Container>
                    <Row>
                        <Col>
                            <img className="photoimg" src={diploma} alt="Diploma" />
                        </Col>

                        <Col>
                            <img className="photoimg" src={photo1} alt="photo1" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                合成
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Photo;