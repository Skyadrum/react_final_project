import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'


class EventList extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        Valor_1
                    </Col>
                    <Col>
                        Valor_2
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default connect()(EventList)