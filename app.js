const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('index');
});
app.get('/dashboard', function(req, res) {
  res.render('dashboard');
});
app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});
