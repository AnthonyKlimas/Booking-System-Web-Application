//Import the Pool class from the pg library
const { Pool } = require('pg');

//Create variable pool to create a containter for the database
const pool = new Pool({
    user: 'postgres',
    password: 'licebeware',
    host: 'localhost',
    port: 5432,
    database: 'booking_system'
});

//Exports pool variable when file is called
module.exports = pool;