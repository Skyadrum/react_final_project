import React from 'react'
import { Form,Card, Button, Col, Row, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { newEvent } from '../../Actions'

import '../animate.css'
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
        showResults('none')
        showSpinner('block');

        // Aqui va el timer para mostrar resultados
        setTimeout(() => {
            showResults('block')
            showSpinner('none');
        }, 3000);

        console.log('Se activa spinner');
        cleanForm();
    }

    const cleanForm = () => {
        eventName.current.value = ''
        eventEmail.current.value = ''
        eventDsc.current.value = ''
    }

    const showSpinner = (display) =>{
        const spinner = document.querySelector('.contenido-spinner')
        spinner.style.display = display
    }

    const showResults = (display) =>{
        const table = document.querySelector('.resultado')
        table.style.display = display
    }

    return(
        <div className='cards animated fadeIn'>
        <Card  border='info'>
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

        <Card className="margin-20 contenido-spinner">
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </Card>

        <Card className='resultado margin-20'>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Event Description</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    props.listEvents.map((evento) => {
                        return <tr>
                                    <td>{ evento.eventName }</td>
                                    <td>{ evento.dsc }</td>
                                    <td>{ evento.email }</td>
                                </tr>
                    }) 
                } */}
            </tbody>
        </Table>
        </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listEvents: state.newEvent
    }
}

export default connect(mapStateToProps, { newEvent })(SubsForm)