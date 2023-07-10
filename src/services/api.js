import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com'
})
const token = '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';
api.defaults.headers.common['Authorization'] = `token ${token}`;

export default api;