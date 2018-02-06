// const  Client  = require('pg').Client;
const { Client } = require('pg');


function performQuery(query, terms, callback) {
  const client = new Client({
    user: 'development',
    host: 'localhost',
    database: 'costo',
    password: 'development',
    port: 5432,
  });

  client.connect((error) => {
    if (error) {
      throw error;
    }

      client.query(query, terms, (err, res) => {
        if (err) {
          throw err;
        }
        callback(res.rows);
        console.log("🖕");

        client.end();
      });
  });
  console.log("🤗");
  return;
}


function getGroceryShoppingItems(searchTerm, callback) {
    const query = `
    SELECT * FROM grocery_shopping_items 
    WHERE name LIKE $1::text ORDER BY name`;

    const terms = [`%${searchTerm}%`]

    performQuery(query, terms, callback);
}

exports.getGroceryShoppingItems = getGroceryShoppingItems;