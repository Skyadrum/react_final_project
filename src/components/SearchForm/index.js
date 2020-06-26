import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { getEvents } from '../../Actions'
import { connect } from 'react-redux'

import './search.css'

class Search extends React.Component {

    componentDidMount(){
        this.props.getEvents()
    }

    render(){
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
                                {
                                    this.props.events.map((event) =>{
                                        return <option key={ event.id } value={ event.id }  >{event.name}</option>
                                    })
                                }
                            
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
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        events: state.eventList
    }
}

export default connect(mapStateToProps,{ getEvents })(Search)