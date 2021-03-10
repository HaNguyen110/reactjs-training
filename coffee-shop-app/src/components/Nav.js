import React from 'react';
import logo from '../logo.png';
// import './App.css';
//import { Container } from 'react-bootstrap';


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div>
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo..."/></a>
                <button className="navbar-toggler" type="button" 
                        data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="text-light nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-light nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-light nav-link" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-light nav-link" href="#">service</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-light nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav