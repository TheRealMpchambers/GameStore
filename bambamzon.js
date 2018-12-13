// Setting NPM packages as vars

var tablefy = require("tablefy");

var inquirer = require("inquirer")

var mysql = require("mysql");

// Create connection to sql db

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "placeholder",
    database: "bambamzon_DB"
});




