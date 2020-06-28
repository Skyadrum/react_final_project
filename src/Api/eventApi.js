import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.eventbriteapi.com/v3/' //Aqui se configura la peticion a la Api
})
