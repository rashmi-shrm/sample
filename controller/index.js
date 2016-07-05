var express = require('express');
var router = express.Router();

router.use('/gallery', require('./route'));

var path = require('path');
var appDir = path.dirname(require.main.filename);
console.log(appDir);

router.get('/', function (req, res) {
   //res.sendFile('views/index.html', {'root': './'});
   res.sendFile(appDir+'/view/index.html');
})

module.exports = router;
