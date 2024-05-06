import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingList } from '../context/ShoppingListContext'
import ListItem from './ListItem'

function ShopingCart({isOpen}: {isOpen: boolean}) {
    const {closeCart, listItems} = useShoppingList()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {listItems.map((item) => (
                    <ListItem key={item.id} {...item} />
                ))}
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShopingCart