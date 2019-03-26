/**
 * This module will require configuration module to config MySQL JSON module and then return that connection to 
 * the server through module.exports
 */
const config = require('../config/dbconf');
const mysql = require('mysql-json');
const connection = new mysql(config);


module.exports = connection;
