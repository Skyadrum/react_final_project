import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './menu.css'


const Menu = () => {
    return(
        
        <Navbar bg="warning" variant="warning" sticky="top" expand="lg">
            <Navbar.Brand>
                <h1>Eventide!!!</h1>
            </Navbar.Brand>

            <Nav className="ml-auto">
                <Link to="/">
                    <Button variant="outline-primary" className='btn' size="lg">Home</Button>
                </Link>

                <Link to="/subsForm">
                    <Button variant="outline-success" className='btn' size="lg">Register</Button>
                </Link>
            </Nav>
        </Navbar>
        
    )
}

export default Menu