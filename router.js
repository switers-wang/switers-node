const testError = require('./actions/testError');
const helloWorld = require('./actions/helloWorld');

module.exports = {
    get: {
        '/testError': testError,
        '/helloWorld': helloWorld
    },
    post: {
    }
}