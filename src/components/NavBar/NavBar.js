import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Tasaciones Inmobiliarias</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home" className="mx-4">Inicio</Nav.Link>
                <Nav.Link href="#features" className="mx-4">Nuestro Trabajo</Nav.Link>
                <Nav.Link href="#pricing" className="mx-4">Contacto</Nav.Link>
            </Nav>
            <Form inline>
                <CartWidget />
            </Form>
        </Navbar>
    )
}


export default NavBar