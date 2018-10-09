const express = require("express");
const app = express();
const path = require("path");

app.use('/static', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
   res.render('index_old.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
