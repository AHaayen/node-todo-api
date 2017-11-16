const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10/*rounds*/, (err, salt) => {
//     // in here -> the hashing
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$RW3g0roZqYjtfaX7GD9R2.5ZAQ3ktJz69jt7ouoZwQXC.i3zjQrlq';
// bcrypt.compare takes the plain value. and the hash value, and then it lets you know if they equal each other
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});


// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc'); // this is the value we're gonna send the user when sign up or log in
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am user number 2';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // JSON web token

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else {
//     console.log('Data was changed. Do not trust!!');
// }