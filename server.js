var express = require('express')
var app = express()


//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
next();
});

app.get('/list/:id',function(req,res){

    var id = req.params.id;
    console.log('id:' + id)
    // res.sendFile(__dirname + '/lists.json')
    res.json({
      id:id,
      name:'aaa'
    })
})


app.listen(3000,function(){
  console.log('server start')
})
