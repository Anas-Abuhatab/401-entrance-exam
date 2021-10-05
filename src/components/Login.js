import React, { Component } from 'react';
import LoginButton from './LoginButton';
import {Card}from 'react-bootstrap'
class Login extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Card.Text>
                            <LoginButton/>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default Login
