var express = require('express')

var app = express()

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


//跨域   CORS   cross orgin resource sharing   跨域资源请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
next();
});

app.get('/users/:id',function(req,res){

  var id = req.params.id;

console.log('id:' + id)

var name = req.query.name;


    //send  sendFile json
    res.send({
      id:id,name:name
    })

    // res.json({
    //   id:0,name:'aaaaa'
    // })

    // console.log(__dirname)
    // res.sendFile(__dirname + '/lists.json')
})

app.post('/lists',function(req,res){

    console.log('post----')
    // var id = req.body.id;
    // var name = req.body.name;

    // res.send({
    //   id:id + '@server',
    //   name:name + '@server'
    // })
})


app.listen(3456,function(){
  console.log('服务器启动。。。。')
})
