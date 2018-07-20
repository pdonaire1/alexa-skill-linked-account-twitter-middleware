const twitter = require('./twitter/routes');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send("Hello!");
    });
    twitter(app);
};