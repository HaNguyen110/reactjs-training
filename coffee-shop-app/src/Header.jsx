import React from 'react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavbarBrand href="home">Coffee Shop</NavbarBrand>
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