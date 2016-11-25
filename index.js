var express = require("express");
var app = express();


require("./config/express.js")(app);

require("./config/tingodb.js")(function(err, db){
  if(err) throw err;
   require("./routes/index.js")(db, app);
  app.listen(5000);
  console.log("Application listening on port 5000");
});

module.exports = app;
