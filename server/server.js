var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {user1} = require('./models/user');

var app = express();
const port = process.env.POR || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo ({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/1234523

// :id = URL Parameters
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    };

    Todo.findById(id).then((todo) => {
        if(!todo){
           return res.status(404).send();
        }

        res.send({todo});
        // res.send(todo);
    }).catch((e) => {
        res.status(400).send();
    });
    
   

    //valid id using isValid
        // 404 if its not valid
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});


module.exports = {app};