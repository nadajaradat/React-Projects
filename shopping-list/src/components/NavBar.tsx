import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingList } from '../context/ShoppingListContext'
function NavBar() {
    const { openCart, listQuantity } = useShoppingList()
    return (
        <Navbar sticky='top' className='bg-white shadow-sm mb-3'>
            <Container className='me-auto'>
                <Nav>
                    <Navbar.Brand to="/" as={NavLink}>Shopping List</Navbar.Brand>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button 
                    onClick={openCart}
                    variant="outline-primary"
                    style={{ width: '3.5rem', height: '3.5rem', position: 'relative' }}>list
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                        style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 25%)' }}>{listQuantity}</div>
                </Button>
            </Container>
        </Navbar>
    )
}

export default NavBar