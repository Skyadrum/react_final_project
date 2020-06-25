import eventApi from '../Api/eventApi'

export const newEvent = (data) => {
    return{
        type: 'SUBSFORM',
        payload: data
    }
}

// Peticion a la Api

export const getEvents = () => {
    return{
        type: 'GET_EVENTS',
        payload: 
    }
}