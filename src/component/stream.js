import '../style/App.css';
import '../style/stream.css';
import { ButtonToolbar, ButtonGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Seat(props) {
    function handleClick(e) {
        e.preventDefault();
        toast(props.id + "號同學請上台領獎");
    }
    return (
        <Button onClick={handleClick}>{props.id}</Button>
    );
}

function Stream() {
    return (
        <div className="App-header">
            <div>
                <div className="streamframe">
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/IWHSCUVRU3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div>
                    <Container>
                        <Row className="justify-content-md-center">
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="First group">
                                        <Seat id="01" /> <Seat id="02" />
                                    </ButtonGroup>
                                </Col>

                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="Second group">
                                        <Seat id="03" /> <Seat id="04" /> <Seat id="05" /> <Seat id="06" />
                                    </ButtonGroup>
                                </Col>

                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="Third group">
                                        <Seat id="07" /> <Seat id="08" />
                                    </ButtonGroup>
                                </Col>
                            </ButtonToolbar>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-md-center">
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="First group">
                                        <Seat id="09" /> <Seat id="10" />
                                    </ButtonGroup>
                                </Col>

                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="Second group">
                                        <Seat id="11" /> <Seat id="12" /> <Seat id="13" /> <Seat id="14" />
                                    </ButtonGroup>
                                </Col>

                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="Third group">
                                        <Seat id="15" /> <Seat id="16" />
                                    </ButtonGroup>
                                </Col>
                            </ButtonToolbar>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-md-center">
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="First group">
                                        <Seat id="17" /> <Seat id="18" />
                                    </ButtonGroup>
                                </Col>

                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="Second group">
                                        <Seat id="19" /> <Seat id="20" /><Seat id="21" /><Seat id="22" />
                                    </ButtonGroup>
                                </Col>

                                <Col md='auto'>
                                    <ButtonGroup className="mr-2" aria-label="Third group">
                                        <Seat id="23" /><Seat id="24" />
                                    </ButtonGroup>
                                </Col>
                            </ButtonToolbar>
                        </Row>
                    </Container>
                </div>
            </div>
        </div >
    );
}

export default Stream;