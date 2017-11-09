const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user1} = require('./../server/models/user');


// Todo.remove = removes multiple records
// Todo.remove({}).then((result) => {
//     console.log(result);
// });


//Todo.findOneAndRemove = The data will be removed from the database, but you will get the object back.
// Todo.findOneAndRemove({})

// Todo.findByIdAndRemove


// Todo.findOneAndRemove({_id: '5a043eabfe627476a2aba560'}).then((todo) => {

// });

Todo.findByIdAndRemove('5a043eabfe627476a2aba560').then((todo) => {
    console.log(todo);
});