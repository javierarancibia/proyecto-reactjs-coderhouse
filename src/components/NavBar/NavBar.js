import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {useCartContext} from '../../containers/context/CartContext'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const {items, cantidadUnidades} = useCartContext()

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
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <Link to={'/category/oleo'}>
                            <NavDropdown.Item href="#action/3.1">Oleos</NavDropdown.Item>
                        </Link>
                        <Link to={'/category/serigrafia'}>
                            <NavDropdown.Item href="#action/3.2">Serigrafias</NavDropdown.Item>
                        </Link>
                        <Link to={'/category/grabado'}>
                            <NavDropdown.Item href="#action/3.3">Grabados</NavDropdown.Item>
                        </Link>    
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Link to={'/cart'}> 
                { items.length ? <h3 className="text-white"> {cantidadUnidades()} items en tu carrito - Ir a pagar</h3> : <CartWidget />  }
            </Link>
        </Navbar>
    )
}


export default NavBar