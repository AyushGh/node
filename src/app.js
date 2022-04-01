const express = require('express');
const { createPost } = require('./controllers/post.controller');
const { getUsersWithPostCount } = require('./controllers/user.controller');
const { checkValidation, isValid } = require('./Validaton/checkValidation');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/posts', checkValidation, isValid, createPost);
app.get('/users', getUsersWithPostCount);

module.exports = app;