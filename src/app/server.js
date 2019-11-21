var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');


var db = mongo.connect("mongodb://localhost:27018/Todo",function (err, response) {
    if(err){
        console.log(err);
    }else{
        console.log('Connected to ' + db, '+',+response);
    }
    
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    next();
})

var Schema = mongo.Schema;

var TodoSchema = new Schema({
    task:{type:String},
    status:{type:String},
},{versionKey:false});

var model = mongo.model('Tasks',TodoSchema,'Tasks');

    app.post("/api/addtask",function(req,res){
        console.log(req.body);
        var task = new model(req.body)
        task.save(function(err,data){
            if(err){
                res.send({data:err})
            }else{
                res.send({data:"success"})
            }
        })
    })

      app.get("/api/getTasks",function(req,res){
        let tasks = []
         model.find({status:'todo'},function(err,data){
            
            data.forEach(element => {
                tasks.push(element['task']);
                console.log(tasks);
                return tasks;
            });
            
        });
    })

    app.listen(8080,function(){
        console.log('Listening on port 8080!')
    })

