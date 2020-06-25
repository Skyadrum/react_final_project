import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import './search.css'

const Search = () => {
    return(
        <Card className='cards animated fadeIn' border="info">
            <Card.Header className='card-header'>Show Time!!!</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group >
                        <Form.Label>Search by name or city</Form.Label>
                        <Form.Control type="text" placeholder="Sear by event name, band or singer" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Event category</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="outline-info" size="lg">Find your event</Button>
                    </Form.Group>
                </Form>
                
            </Card.Body>
        </Card>
    )
}

export default Search