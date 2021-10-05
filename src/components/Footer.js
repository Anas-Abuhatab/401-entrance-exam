import React, { Component } from 'react';
import {Navbar,Container,Nav}from 'react-bootstrap';

 class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                           <h1 style={{color:"white"}}>Made by Anas</h1>
                            </Nav>
                            <Nav>         
                             
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer
