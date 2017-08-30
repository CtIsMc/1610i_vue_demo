var express = require('express');
var router = express.Router();

var data = require('./data')

router.get('/data', function(req, res) {
  res.send(data);
});

router.get('/del', function(req, res) {
  var id = req.query.id

  var index = data.findIndex(function(value,index){
      return value.id == id
  })
  // console.log(index)
  data = data.splice(index,1)
  console.log(data)

  // res.send(data);
});


module.exports = router;
