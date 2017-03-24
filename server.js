var express = require('express');
var bodyParser = require('body-parser');
var users = require('./users');

var app = express();
app.use(bodyParser.json());


app.get('/api/users', users.getUsers);
app.delete('api/users/:id', users.deleteUser);


app.listen(3000, function () {
    console.log("listening on port 3000");
})
