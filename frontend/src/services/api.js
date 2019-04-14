import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-drive-box.herokuapp.com'
})

export default api