import React from "react";
import { Button, Form } from "react-bootstrap";

import '../style/App.css';
import '../style/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        const submit = JSON.stringify(this.state);
        const storage = window.localStorage;

        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        event.preventDefault();
        fetch('http://localhost:3000/api/login', {
            method: "POST",
            headers,
            body: submit,
        })
            .then(res => res.json())
            .then(json => {
                storage.setItem("username", json.user.name);
                alert("登入成功");
                window.location.href = "/";
            });
    };

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email" bsSize="large">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" bsSize="large">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="password" bsSize="large">
                        <Form.Check inline label="畢業生" name="group1" type='radio' id='graduate' />
                        <Form.Check inline label="訪客" name="group1" type='radio' id='visitor' />
                    </Form.Group>

                    <Button
                        block
                        type="submit"
                        bsSize="large"
                        disabled={!this.validateForm()}
                    >
                        Login
              </Button>
                </Form>
            </div>
        );
    }
}

export default Login;