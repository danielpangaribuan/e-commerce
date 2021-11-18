import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsPerson } from 'react-icons/bs';
import '../assets/styles/header.css';

const Header = () => {

    const onButtonLogin = () => {
        
    }

    return (
        <div className="header-container">
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav>
                        <Nav.Link href="/">Products</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/login" className="login-button" onClick={ onButtonLogin }>
                                <BsPerson />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;