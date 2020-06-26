import eventApi from '../Api/eventApi'

export const newEvent = (data) => {
    return{
        type: 'SUBSFORM',
        payload: data
    }
}

// Peticion a la Api

export const getEvents = () => {
    
    return async (dispatch, getState) => {
        const tokenAuth = 'AQ2463AUT4HQLOJAEHDO'
        const events = await eventApi.get(`categories/?token=${tokenAuth}`)

        dispatch({
            type: 'GET_EVENT',
            payload: events.data.categories
        })
    }
}