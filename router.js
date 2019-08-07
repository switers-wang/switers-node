const testError = require('./actions/testError');
const helloWorld = require('./actions/helloWorld');
const testHtml = require('./actions/testHtml');
module.exports = {
    get: {
        '/testError': testError,
        '/helloWorld': helloWorld,
        '/testHtml': testHtml
    },
    post: {
        '/postError': helloWorld
    }
}