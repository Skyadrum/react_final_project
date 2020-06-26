import { combineReducers } from 'redux'

const events = [
    {
        eventName: 'Event 1',
        email: 'Patito@gmail.com',
        dsc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget mi id lorem fringilla gravida. Sed vel neque nibh. Sed varius neque ac ipsum pharetra ultricies.'
    }, 
    {
        eventName: 'Event 2',
        email: 'Patito_2@gmail.com',
        dsc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget mi id lorem fringilla gravida. Sed vel neque nibh.'
    }        
]


const subsFormReducer = (eventList = events, action) => {
    switch(action.type){
        case 'SUBSFORM':
            return [...eventList, action.payload]
        default:
            return eventList
    }

}

const eventReducer = (eventList = [], action) => {
    switch(action.type){
        case 'GET_EVENT':
            return action.payload
        default:
            return eventList
    }

}


export default combineReducers({
    newEvents: subsFormReducer,
    eventList: eventReducer
})