import React, { Component } from 'react';
import {Navbar,Container,Nav}from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/FavWatch">FavWatch</Nav.Link>
                            </Nav>
                            <Nav>         
                                    {isAuthenticated?<LogoutButton/>:<LoginButton/>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        )
    }
}

export default withAuth0(Header)
