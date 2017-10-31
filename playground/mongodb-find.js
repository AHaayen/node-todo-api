//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongDB server');

//     db.collection('Todos').find({
//         _id: new ObjectID('59f85643c8a8704307608652')
//     }).toArray().then((docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos', err);
//     }); 

//     //db.close();
// });

// db.collection('Todos').find().count().then((docs) => {
//     console.log(`Todos count: ${count}`);
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// }); 

db.collection('Users').find({name: 'Andres'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});

//db.close();
});