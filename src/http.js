import axios from 'axios'
const httptool = axios.create({
    baseURL: 'http://wthrcdn.etouch.cn/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export default httptool;