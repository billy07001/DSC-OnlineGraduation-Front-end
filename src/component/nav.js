import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import '../style/App.css';

function Welcomeinfo() {
    const studentName = window.localStorage.getItem("username");
    if (window.localStorage.getItem("username")) {
        return "Hello " + studentName;
    }
    else {
        return "請登入";
    }
}

function Topnav() {
    return (
        <Navbar className="Navbar" expand="lg" variant="dark">
            <Link to="/"><Navbar.Brand>雲畢典</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="Nav__link" to="/stream"><Nav.Link href="#stream">典禮會場</Nav.Link></Link>
                    <Link className="Nav__link" to="/photo"><Nav.Link href="#photo">拍照</Nav.Link></Link>
                    <Link className="Nav__link" to="/take"><Nav.Link href="#take">領畢業證書</Nav.Link></Link>
                    <Link className="Nav__link" to="/sign"><Nav.Link href="#sign">個人留言板</Nav.Link></Link>
                    <Link className="Nav__link" to="/gift"><Nav.Link href="#gift">畢業禮物</Nav.Link></Link>
                </Nav>

                <Navbar.Brand><Welcomeinfo /></Navbar.Brand>
                <Form inline>
                    <Link className="Nav__link" to="/login"><Button variant="success" type="submit" href="#login">畢業生登入</Button></Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Topnav;