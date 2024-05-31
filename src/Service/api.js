import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-last-12b3a.cloudfunctions.net',
    headers: {
        'Content-Type': 'application/json',
    },
})


export default instance