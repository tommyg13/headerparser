var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     var info = {
         'ipaddress': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
         
     };
     res.send(info);
});

module.exports = router;
