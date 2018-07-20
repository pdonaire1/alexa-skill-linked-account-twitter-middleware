require('dotenv').config()

const express = require('express');
var session = require('cookie-session')

const app = express();
app.set('trust proxy', 1)
app.set('port', (process.env.PORT || 5000));

app.use(session({ secret: process.env.SESS_SECRET, cookie: { maxAge: 2592000 }}))


require('./routes')(app);
  
app.listen(app.get('port'), () => {
  console.log('Express server started on port 5000');
});

