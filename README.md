# PostgreSQL

* What was the point of yesterday?

You learned how to the SQL language to CRUD data in a postgres database. Now we're going to learn how to do all of that from our node apps.

### PostgreSQL in node

We use the pg package to communicate with postgres from our node app.

pg https://www.npmjs.com/package/pg

### PostgreSQL Users

  - To connect to postgres, we need to access it as a user. 
  - On our vagrant machines, we can connect as vagrant, postgres, or development. 
  - You can create new users / roles that have different permissions and can do different things within the database.

### CRUD Node

  - WE created and read to our database in node.
  - All we need to do is pass `pg` an SQL query and it will execute that query on the database.

### Secure input (SQL Injection)

If we don't sanitize our input, malicious users can write their own SQL and inject it into our query. 

```
'; INSERT INTO grocery_shopping_items ("name", price) VALUES ('ice cream', '2'); --
```

This will add a new shopping item called ice cream for only 2 cents.

```
'; DROP TaBlE grocery_shopping_items; --
```

This will delete our entire shopping items table 😱

Make sure your data gets sanitized before inserting it into an sql statement. With `pg` we should pass in parameters like this:

```js
const queryString = "SELECT * FROM grocery_shopping_items WHERE name LIKE $1::text ORDER BY name";
client.query(queryString, [`%${searchTerm}%`], (error, response) => {

});
```

### Refactor

It's bad practice to couple all of our code together.

It's good practice to abstract away the database.

### Links

- [Postgres Numeric Types](https://www.postgresql.org/docs/9.3/static/datatype-numeric.html)
- [pg queries](https://node-postgres.com/features/queries)
- [Fun fun function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
- [Higher Order Functions](https://www.youtube.com/watch?v=BMUiFMZr7vk)


![Little bobby tables](http://imgs.xkcd.com/comics/exploits_of_a_mom.png)

---

## snippets


`CREATE DaTaBaSe costo;`


```
\i -- insert sql
\c -- switch to database
\dt -- list tables
\list -- list databases
\conninfo -- connection info
CREATE DATABASE   OWNER  ;
psql --username= --dbname=
```
```
\du -- list roles
CREATE ROLE   WITH LOGIN PASSWORD  ''  SUPERUSER;
NOCREATEDB NOCREATEROLE NOREPLICATION;
SELECT * FROM pg_roles;
GRANT INSERT ON films TO PUBLIC;
GRANT ALL PRIVILEGES ON kinds TO manuel;
```
