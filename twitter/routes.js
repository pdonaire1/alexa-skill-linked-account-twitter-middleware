const TwitterController = require('./controller')
module.exports = function (app) {
    app.get('/oauth/request_token', TwitterController.request_token);
    app.get('/oauth/callback', TwitterController.callback);
}