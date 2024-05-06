import React from 'react'
import { useShoppingList } from '../context/ShoppingListContext'
import StoreItems from '../data/items.json'
import { Button, Stack } from 'react-bootstrap'
import formatCurrency from '../utilites/formatCurrency'
function ListItem({id, quantity}: {id: number, quantity: number}) {
   const {removeItem} = useShoppingList()
   const item = StoreItems.find(i => i.id === id)
   if(!item) return null
    return (
    <Stack direction='horizontal' gap={3}>
        <img src={item.image} alt={item.name} height='100px' style={{ objectFit: 'cover' }} />
        <div>
            <h4>{item.name}</h4>
            <div>{formatCurrency(item.price)}</div>
            <div>Quantity: {quantity}</div>
            <Button className='btn btn-danger' onClick={() => removeItem(id)}>Remove</Button>
        </div>
    </Stack>
  )
}

export default ListItem