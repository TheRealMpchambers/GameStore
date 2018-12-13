DROP DATABASE IF EXISTS bambamzon_DB;

CREATE DATABASE bambamzon_DB;

USE bambamzon_DB;

CREATE TABLE storefront(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    item_name VARCHAR(255) NOT NULL,
    category_name VARCHAR(255) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    quantity_on_hand INT(10) default 0 NOT NULL
    );

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Zero Horizon Dawn", "Action Role Playing", 39.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Final Fantasy", "Role Playing Game", 59.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Call of Duty", "First Person Shooter", 29.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Red Dead Redemption", "Action Role Playing", 59.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Star Citizen", "Space Sim", 69.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Star Craft 2", "Real Time Strategy", 39.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Stellaris", "Real Time Strategy", 49.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Halo 2", "First Person Shooter", 39.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Diablo 3", "Role Playing Game", 39.99, 10);

INSERT INTO storefront (item_name, category_name, price, quantity_on_hand)
VALUES ("Rage 2", "action role-playing", 39.99, 10);
