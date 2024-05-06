import React from 'react'
import storeItems from "../data/items.json"
import { Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
function Store() {
    return (
        <>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {storeItems.map((item, index) => (
                    <Col key={index}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store