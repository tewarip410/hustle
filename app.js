const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
let router = require('express').Router();
var admin = require("firebase-admin");
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
 extended: true
 }));
var serviceAccount = require("./serviceAccountKey.json");


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/dashboard', function(req, res) {
  
  res.render('dashboard');
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});
module.exports = router;
