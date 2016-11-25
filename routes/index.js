module.exports = function (db, app) {
  var authentication = require('../helper/token_auth.js')(db, 'users');
  
  var user = require('../controller/user.js')(db);
  app.get('/user/:id', user.getUser);
  app.post('/user', user.addUser);
  app.post('/user/login', user.userLogin);
  app.post('/user/:id/forgotpassword/email', user.forgotpassword);
  app.post('/user/:id/forgotpassword/sms', user.forgotpasswordSMS);
  app.post('/user/:id/Changepassword', user.ChangePassword);


   var client = require('../controller/client.js')(db);
   app.get('/client/:id', client.getclient);
   app.post('/client', client.addclient);
   app.post('/client/login', client.clientLogin);
   app.post('/client/:id/forgotpassword/email', client.forgotpassword);
   app.post('/user/:id/forgotpassword/sms', client.forgotpasswordSMS);
   app.post('/client/:id/Changepassword', client.ChangePassword);

  };
