import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">digimons</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/favorite">Favorite</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        )
    }
}

export default Header
