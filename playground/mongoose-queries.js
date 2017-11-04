const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user1} = require('./../server/models/user');


//query users collection


// var id = '59fd9f948a4e6c3658ca4f2b';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// // Todo.find lets you query as many todos as you like
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// // Todo.findOne returns 1 doc at most, grabs the 1st one that matches the query you have
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// // look for a document by its identifier
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));


user1.findById('59fb170f46a2c45b4bbd40df').then((user) => {
    if(!user){
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});