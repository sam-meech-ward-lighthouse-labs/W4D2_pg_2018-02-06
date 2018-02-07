// const client = new Client();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'development',
    host: 'localhost',
    database: 'costo',
    password: 'development',
    port: 5432,
  }
});



app.get('/', (req, res)=> {

  // Get request url parameter (to the right of the ?)
  const searchTerm = req.query.search;

  const knexQuery = knex
  .select('*')
  .from('grocery_shopping_items')
  .where('name', 'like',  `%${searchTerm}%`);

  console.log(knexQuery.toString());

  knexQuery.asCallback((error, rows) => {

    res.render('index', {rows});
  })

});

app.listen(3000);