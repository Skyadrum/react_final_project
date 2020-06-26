import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getEvents } from '../../Actions'

class EventList extends React.Component {

    componentDidMount(){
        this.props.getEvents()
    }


    render() {
        return (
            <Container>
                {
                    this.props.events.map((event) => {
                        
                        return <Row key={ event.id }>
                                    <Col>Name: { event.name } </Col>
                                    <Col>Url: { event.resource_uri } </Col>
                               </Row>

                    })
                }  
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        events: state.eventList
    }
}

export default connect(mapStateToProps, { getEvents })(EventList)