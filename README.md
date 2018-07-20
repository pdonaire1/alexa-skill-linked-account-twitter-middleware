# alexa-skill-linked-account-twitter-middleware
nodejs middleware to link alexa custom skill with twitter oauth using amazon alexa account linking service

*pre-info: it's not possible to integrate twitter api with amazon alexa skill account linking service directly. the solution is adapting twitter & alexa API's by developing a middleware which integrates alexa skill user with twitter api. it moves requests access tokens, passes amazon's required parameters.*

this is a simple nodejs + express middleware is configured to work on heroku.
- holds amazon's required parameters on session,
- performs standard oauth requests to obtain key & secret
- no database. returns token and secret in "TOKEN,SECRET" format to amazon alexa.

notes:
- do not forget to define env variables on heroku dashboard

# Steps to configure:
1. enter to twitter and create an app: https://apps.twitter.com/
2. clone the repo from https://github.com/eercanayar/alexa-skill-linked-account-twitter-middleware.git
3. deploy to heroku https://devcenter.heroku.com/articles/getting-started-with-nodejs#prepare-the-app
3.1. set the heroku enviroment variables
```
heroku config:set CALLBACK_URL=https://myherokuapp.herokuapp.com/oauth/callback \
  CONSUMER_KEY=MyKeyProvidedByTwitter \
  CONSUMER_SECRET=MySecretProvidedByTwitter \
  SESS_SECRET=MySecretSession
```
#4. Go to alexa skill
#4.1 Go to the skill and click on account linking
#4.1.1 select implicit grant and set the values:
set the Authorization URI to https://myheroku.com/oauth/request_token
Access Token URI: 
Client ID: myazymo_sess_secret


alexa skill functions compatible with this middleware:
- nodejs: [*eercanayar/alexa-skill-linked-account-twitter-nodejs*](https://github.com/eercanayar/alexa-skill-linked-account-twitter-nodejs)
- netcore10: [*eercanayar/alexa-skill-linked-account-twitter-dotnet-core*](https://github.com/eercanayar/alexa-skill-linked-account-twitter-dotnet-core)

**Visit wiki and learn more about Alexa Skill Development and read detailed section for this sample skill; [Alexa-Skills-Kit-(ASK)-Development-Tutorial#step-3-exchange-calculator-skill-with-nodejs--alexa-sdk--account-linking-with-twitter](https://github.com/eercanayar/alexa-skills-ask-tutorial/wiki/Alexa-Skills-Kit-(ASK)-Development-Tutorial#step-3-exchange-calculator-skill-with-nodejs--alexa-sdk--account-linking-with-twitter)**

*eercan @Accenture Istanbul*
