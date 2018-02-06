DROP TABLE IF EXISTS sellers;
DROP TABLE IF EXISTS grocery_shopping_items;

CREATE TABLE sellers (
  id SERIAL PRIMARY KEY,
  usernam VARCHAR(255),
  "password" VARCHAR(255)
);

CREATE TABLE grocery_shopping_items (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(255),
  price INTEGER,
  seller_id INTEGER
);

-- test Data:

INSERT INTO sellers (usernam, "password")
VALUES('costco', 'hot dogs'),
('kirkland', 'hot dogs');

INSERT INTO grocery_shopping_items ("name", price, seller_id)
VALUES('hot dogs', 150, 1),
('vodka', 800, 2),
('oranges', 10000, 2),
('matcha tea', 20000, 1),
('black tea', 10, 1);
