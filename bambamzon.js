// Setting NPM packages

const tablefy = require("tablefy");

const inquirer = require("inquirer")

const mysql = require("mysql");

//Setup Tablefy global

const table = new tablefy

// Create connection to sql db

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bambamzon_DB"
});

//Execute table show and information input via NPM instructions

function newTable() {
    connection.query("Select * FROM storefront", (err, results) => {
        if (err) throw err;
        table.draw(results);
        pointOfSale();
    });
}

//Execute the selection of product as well as quantity purchase.
//Inquirer interaction will be built in as well on this tree.
//Interaction with MySql database and table
//Quantity and ID selection
//Update table


function pointOfSale() {
    connection.query("Select * FROM  storefront", function (err) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "Please select the unique ID of the item you wish to purchase."

            },
            {
                name: "units",
                type: "input",
                message: "Please indicate the number of items you wish to purchase."

            }
        ]).then(function (input) {
            var itemNum = input.id;
            var quan = input.units;

            connection.query("SELECT *  FROM storefront WHERE ?", { id: itemNum }, function (err, results) {
                if (err) throw err;

                var itemInfo = results[0];

                if (quan <= itemInfo.quantity_on_hand) {
                    console.log("This selection is valid.  We will go ahead and place your order!")
            

                    var updateQueryString = "UPDATE storefront SET quantity_on_hand = " +
                    (itemInfo.quantity_on_hand - quan) + " WHERE ID = " + itemNum;
                    connection.query(updateQueryString, function (err) {
                        if (err) throw err;
                        console.log("Your Order has been placed!  $" + itemInfo.price * quan + " is worth the adventure you are about to have!");
                        connection.end();
                    });

                } else {
                    console.log("We apologize, there are not enough of this items on hand.  Please select a lower quantity.")
                    newTable();
                };
            });
        })
    });
};

function runBAMBAM() {
    newTable();
};

runBAMBAM();
