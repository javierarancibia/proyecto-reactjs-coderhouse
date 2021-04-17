import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Tasaciones Inmobiliarias</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Nuestro Trabajo</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Casas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Apartamentos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Terrenos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    )
}


export default NavBar