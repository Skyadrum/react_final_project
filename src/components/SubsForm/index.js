import React from 'react'
import { Form,Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { newEvent } from '../../Actions'

import './subForm.css'

const SubsForm = (props) => {

    const eventName = React.createRef()
    const eventEmail = React.createRef()
    const eventDsc = React.createRef()

    const handlerForm = () => {
        const eventObj = {
            eventName: eventName.current.value,
            email: eventEmail.current.value,
            dsc: eventDsc.current.value
        }
        props.newEvent(eventObj)

        cleanForm();
    }

    const cleanForm = () => {
        eventName.current.value = ''
        eventEmail.current.value = ''
        eventDsc.current.value = ''
    }

    return(
        <Card className='cards'>
            <Card.Header className='card-header'>New Event!!!</Card.Header>
            <Card.Body>
            <Form>
                <Form.Group >
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Rock and Roll!!!" ref={ eventName } />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" ref={ eventEmail } />
                </Form.Group>
                
                
                <Form.Group >
                    <Form.Label>Tell Us about your event!!!</Form.Label>
                    <Form.Control as="textarea" rows="5" maxLength='150s' placeholder='150 characters max' ref={ eventDsc } />
                </Form.Group>

                <Button variant="outline-info" type="button" size="lg" onClick={ handlerForm } >
                    Submit
                </Button>
            </Form>
                
            </Card.Body>
        </Card>
    )
}

export default connect(null, { newEvent })(SubsForm)