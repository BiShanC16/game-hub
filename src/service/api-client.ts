import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8cfa39509731461690a27d262219ccd1'
    }
})