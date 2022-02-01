import React from 'react';
import  { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function Nav() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <h1>Rent-a-Tool</h1>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/tools">Tools</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default Nav;