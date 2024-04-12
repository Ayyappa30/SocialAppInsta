import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Indira2020#",
    database: "social"
});

// Connect to the database
db.connect(function(err) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
    
    // Execute the query
    db.query("SELECT * FROM users", function (err, result, fields) {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Query results:', result);
    });
});

export default db;
