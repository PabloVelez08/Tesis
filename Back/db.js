const mysql = require('mysql');

// const db = mysql.createPool({
//     host: 'borud0cj8e3osyhoejz6-mysql.services.clever-cloud.com',
//     user: 'uncxccl0wkrnb9te',
//     password: 'IXEi57HN8PKrfILARcD5',
//     database: 'borud0cj8e3osyhoejz6'
// });

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ejemplo1'
});

module.exports = db;