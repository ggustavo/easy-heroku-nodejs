const express = require('express');
const bodyParser= require('body-parser')

//======================= Express =========================
const app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.send('Hello World!');
})

app.listen(port, function() {
    console.log('Listening ' + port);
})



