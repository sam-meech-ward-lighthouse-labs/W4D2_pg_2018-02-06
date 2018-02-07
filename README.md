# Knex Query Builder

* What is it?
  - Gives us a way to build and run queries. That isn't SQL.
* What are the benefits?
  - Easy to write queries (easier at least)
  - Works with multiple different SQL databases
  - Migrations
* How do we use it?
  - Knex has some of the better online documentation http://knexjs.org/
* Migrations?
  - Allow us to track versions of database.
  - Allow us to define our database schema in JavaScript.
  - I forgot to mention this in class, but it's very important: **Do not modify a migration once it has been made available to another developer.** If you need to change something, make a new migration file.

* Seeds?
  - Use seed files to populate the database with some data.
  `knex seed:make seeds` would produce a file with a basic template.

### Snippets

```
knex init
knex migrate:make 
knex migrate:latest  
knex migrate:rollback
```

```
knex seed:make seeds
knex seed:run
```