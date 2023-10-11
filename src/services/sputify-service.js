import axios from 'axios';

// Basic instance
// TODO: baseUrl parameter should be placed in app config.
export default axios.create({
    baseURL: 'http://localhost:3000'
});