
var express = require('express');
var app = express();


app.use(express.static('public'));


app.get("/", function (req, res, next) {
  var ip = req.headers['x-forwarded-for'];
  ip = ip.split(',')[0];
  
  var language = req.headers['accept-language'];
  language = language.split(',')[0];
  
  var software = req.headers['user-agent'];
  console.log(software.split(';'));
  software = software.split(';')[1];
  
  var infoObj = {
    'IP Address' : ip,
    'Language' : language,
    'Software' : software
  };;
  res.send(infoObj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

