

var Db = require('tingodb')().Db,
  assert = require('assert');


var db = new Db(__dirname + '/db', {});;
module.exports = function (callback) {
  console.log("here");

  db.collection('user').createIndex({
    email: 1
  }, { unique: true }, function (err, result) {
    if (err) return callback(err, result);
    else {
      callback(err, db);
    }
  });

}
