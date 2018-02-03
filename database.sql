CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  ItemID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(45) NOT NULL,
    DepartmentName VARCHAR(45) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from products;

INSERT INTO products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Dog Collar","Pet Supplies",7.99,150),
    ("Dog Leash","Pet Supplies",8.99,200),
    ("Cabbage Seeds","Garden Supplies",3.50,50),
    ("Bed Comforter","Home Decor",77.00,5),
    ("Sneakers","Footwear",54.00,35),
    ("Jacket","Apparel",62.00,42),
    ("Dishes","Home",35.00,25),
    ("The Road","Books",15.50,57),
    ("Beloved","Books",15.50,35),
    ("Strawberry Seeds","Garden",3.50,23)