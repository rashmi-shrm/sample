var express = require('express');
var router = express.Router();
var config=require('../config/config.js');
var request = require('request');

// Search by category and page no
var url;
router.get('/:category/:page', function(req,res){
  request({
      url: 'https://pixabay.com/api/?key='+config.api_key+'&q='+req.params.category+'&page='+req.params.page+'&image_type=photo&pretty=true',
      json: true
  }, function (error, response, body) {
      console.log(error, response, body);
      if (response.statusCode != 200) {
        res.status(500).send({ error: 'No results found' });
      } else {
      console.log(response.statusCode);
        res.json(body);
      }
  });
});

//Search by image id
router.get('/:id', function(req,res){
  request({
      url: 'https://pixabay.com/api/?key='+config.api_key+'&id='+req.params.id,
      json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.json(body);
      }

      else{
        console.log("something went wrong");
      }
  })
})


module.exports = router
