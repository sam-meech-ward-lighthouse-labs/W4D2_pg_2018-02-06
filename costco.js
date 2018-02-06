// const client = new Client();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const db = require('./db');

app.get('/', (req, res)=> {

  // Get request url parameter (to the right of the ?)
  const searchTerm = req.query.search;
  
  db.getGroceryShoppingItems(searchTerm, (rows) => {
    res.render('index', {rows});
  });

});

app.listen(3000);