var fs = require('fs');
var info = require('./get');


fs.appendFile('log.txt',  info, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });