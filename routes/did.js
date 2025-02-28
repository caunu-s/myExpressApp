var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
    const filePath = path.join(__dirname, '../sample.json');
    res.download(filePath, 'sample.json', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading file');
      }
    });
});

module.exports = router;
