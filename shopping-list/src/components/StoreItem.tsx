// import React, { useCallback } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import formatCurrency from '../utilites/formatCurrency'
import { useShoppingList } from '../context/ShoppingListContext'
import { useCallback } from 'react'
type itemType = { id: number, name: string, price: number, author: string, image: string }

function StoreItem({ id, name, price, image }: itemType) {
    const { getItemQuantity , increaseItemQuantity, decreaseItemQuantity, removeItem} = useShoppingList()
    const quantity = getItemQuantity(id)

    const handleIncrease = useCallback(() => increaseItemQuantity(id), [increaseItemQuantity, id]);
    const handleDecrease = useCallback(() => decreaseItemQuantity(id), [decreaseItemQuantity, id]);
    const handleRemove = useCallback(() => removeItem(id), [removeItem, id]);

    return (
        <Card key={id}>
            <Card.Img variant="top" src={image} height='200px' style={{ objectFit: 'cover' }} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <Row className='mt-auto justify-content-center'>
                    {quantity == 0 ?
                        (<Button className='btn btn-primary' onClick={handleIncrease}>Add to Cart</Button>
                        ) :
                        (
                            <Col xs='auto'>
                                <div className='d-flex'>
                                    <Button className='btn btn-primary me-4'  onClick={handleDecrease}>-</Button>
                                    <span className='mt-2'>{quantity}</span>
                                    <Button className='btn btn-primary ms-4'  onClick={handleIncrease}>+</Button>
                                </div>
                                <Button className='btn btn-danger mt-1' style={{width:'100%'}}  onClick={handleRemove}>Remove</Button>
                            </Col>
                        )}
                </Row>
            </Card.Body>
        </Card>
    )
}

export default StoreItem