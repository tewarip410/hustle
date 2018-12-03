const express = require('express');
const app = express();
const port = 3000;
let router = require('express').Router();
var admin = require("firebase-admin");
app.use(express.static('public'));
app.set('view engine', 'ejs');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cs252-c5e8f.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");
var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/dashboard', function(req, res) {
  
  res.render('dashboard');
});
/*app.post('/dashboard',function(req,res){

  console.log(req.body.habit)  
  console.log(req.body.type)  
});*/
app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});
module.exports = router;
