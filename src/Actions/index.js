import eventApi from '../Api/eventApi'

export const newEvent = (data) => {
    return{
        type: 'SUBSFORM',
        payload: data
    }
}

// Peticion a la Api: https://www.eventbriteapi.com/v3/categories/103/?token=AQ2463AUT4HQLOJAEHDO

export const getEvents = (category) => {

    return async (dispatch, getState) => {
        const tokenAuth = 'AQ2463AUT4HQLOJAEHDO'
        const idCategory = category
        console.log('Id Categoria desde Action: ', idCategory);
        const events = await eventApi.get(`categories/?token=${tokenAuth}`)

        dispatch({
            type: 'GET_EVENT',
            payload: events.data.categories
        })
    }
}
