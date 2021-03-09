import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Coffee Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <NavDropdown title="Another" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Drop1">products</NavDropdown.Item>
                            <NavDropdown.Item href="#Drop2"> price</NavDropdown.Item>
                            <NavDropdown.Item href="#Drop3">contact</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign In</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Logn In  
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="text-light text-right Header--banner">
                <h1 className="display-4 text-center font-weight-bold Header--text">
                    Coffee Shop
                </h1>
            </div>
        </header>
    )
}

export default Header