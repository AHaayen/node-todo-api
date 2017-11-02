var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String, 
        required: true,
        minLength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });


// var theTodo = new Todo({
//     text: ' Lets do this '
// });

// theTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined,2));

// }, (e) => {
//     console.log('Unable to save', e);
// });

// User1
// email - require it - trim it - set type(String) - set min length of 1

var User1 = mongoose.model('User1', {
    email: {
        type: String, 
        required: true,
        minLength: 1,
        trim: true
    } 
});

var user = new User1({
    email: 'andreshaayen@gmail.com    '
});

user.save().then((doc) => {
    console.log('User saved!', doc);
}, (e) => {
    console.log('Unable to save user', e);
});