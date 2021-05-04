import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        
        <Navbar bg="dark" expand="lg" variant="dark">
            <Link to={'/'}>
                <Navbar.Brand href="#home">Galeria Digital</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <Link to={'/category/:categoryId'}>
                            <NavDropdown.Item href="#action/3.1">Oleos</NavDropdown.Item>
                        </Link>
                        <Link to={'/category/:categoryId'}>
                            <NavDropdown.Item href="#action/3.2">Acrilicos</NavDropdown.Item>
                        </Link>
                        <Link to={'/category/:categoryId'}>
                            <NavDropdown.Item href="#action/3.3">Grabados</NavDropdown.Item>
                        </Link>    
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    )
}


export default NavBar