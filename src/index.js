const { Console } = require('console');
const express = require('express');

const api = express();
api.use(express.static(__dirname + '/public'));
api.listen(3000, () => {
    console.log('API is running!')
});

//api.get('/', (req, res) => {
    //res.send("Hello World!")
//})

api.post('/add', (req, res) => {
    res.send("Api used.")
})