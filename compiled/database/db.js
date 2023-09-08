"use strict";
const mysql2 = require('mysql2');
//create the connection below
const database = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '$2y$10$7bSXs6OY9aJ59I2k5I4by.Sz75yrI.U633xgK39/4HJmdXcM2yzny',
    database: 'darkrp'
});
database.connect((err) => {
    if (err) {
        console.error("An error has occurred:" + err);
        return;
    }
    console.log("The DarkRP Database connected successfully!");
});
module.exports = { database };
