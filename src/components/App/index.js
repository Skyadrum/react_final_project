import React from 'react'

import Menu from '../Menu'
import { BrowserRouter, Route } from 'react-router-dom'
import { Col, Container } from 'react-bootstrap'

import SearchForm from '../SearchForm'
import SubsForm from '../SubsForm'
import EventList from '../EventList'

import './app.css'


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Menu />
                <h1 className='title'>Search for events of your interest or in your city</h1>
                <Route path="/" exact component={ SearchForm }></Route>
                <Route path="/SubsForm" component={ SubsForm }></Route>
            </BrowserRouter>
            <Container>
                <Col>
                    {/* <EventList/> */}
                </Col>
            </Container>
        </div>
    )
}

export default App