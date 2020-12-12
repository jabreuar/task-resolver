const axios = require('axios');
const { GET_TASK_URI, POST_TASK_URI } = require('./api.config');

async function get() {
    try {
        let data = (await axios.get(GET_TASK_URI)).data;
        return data;
    } catch (error) {
        console.error(`An error has ocurred while trying to fetch a task: ${error.response} `);
        return { id: '0', operation: 'An error happened. Please try Again' };
    }
}

async function post(result) {
    try {
        return (await axios.post(POST_TASK_URI, result)).data;
    } catch (error) {
        return error.response.data;
    }
};
module.exports = {
    get,
    post
};
