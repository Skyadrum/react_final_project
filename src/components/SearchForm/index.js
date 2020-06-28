import React, { useEffect } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { getEvents } from '../../Actions'
import { connect } from 'react-redux'

import './search.css'

const Search = (props) => {

    const eventCategory = React.createRef()

    useEffect(() => {
        props.getEvents()
    }, []);

    const sendCategory = () => {
        const category = eventCategory.current.value
        props.getEvents(category)
    }

    return(
        <Card className='cards animated fadeIn' border="info">
            <Card.Header className='card-header'>Show Time!!!</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group >
                        <Form.Label >Event category</Form.Label>
                        <Form.Control as="select" ref={ eventCategory }>
                            {
                                props.events.map((event) =>{
                                    return <option key={ event.id } value={ event.id }  >{event.name}</option>
                                })
                            }

                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="outline-info" size="lg" type="button" 
                        onClick={ sendCategory } >Find your event</Button>
                    </Form.Group>
                </Form>

            </Card.Body>
        </Card>
    )
}



const mapStateToProps = (state) => {
//   console.log('Estado',state.eventList);
  return {
      events: state.eventList
  }
    
}

export default connect(mapStateToProps,{ getEvents })(Search)
