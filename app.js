var express = require('express');

var app = express();


app.get('/', (req,res) => {
  res.send("node 3 project")
})

app.set('view engine', 'ejs');
app.use(express.json());

module.exports = app;
