// Setting NPM packages as vars

const tablefy = require("tablefy");

const inquirer = require("inquirer")

const mysql = require("mysql");

let table = new tablefy

// Create connection to sql db

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "placeholder",
    database: "bambamzon_DB"
});

function newTable() {
    connection.query("Select * FROM storefront", (err, res) => {
        if (err) throw err;
        table.draw(res);
        pointOfSale();
    });
}

function pointOfSale() {
    connection.query("Select * FROM  storefront", function (err, res) {
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

            },
        ])
    })
}
