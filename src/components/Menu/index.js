import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './menu.css'
import logo from './logo.png'


const Menu = () => {
    return(
        
        <Navbar bg="warning" variant="warning" sticky="top" expand="lg">
            <Navbar.Brand>
                <img src={ logo } alt="Devil May Cry" className='logo'/>
            </Navbar.Brand>

            <Nav className="ml-auto">
                <Link to="/">
                    <Button variant="outline-primary" className='btn' size="sm">Home</Button>
                </Link>

                <Link to="/subsForm">
                    <Button variant="outline-success" className='btn' size="sm">Register</Button>
                </Link>
            </Nav>
        </Navbar>
        
    )
}

export default Menu