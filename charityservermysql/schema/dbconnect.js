const mysql2 = require('mysql2');

// const myDb = new  mysql2.createPool({});

const myDB = new mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'charity',
    port: 3306
});

myDB.connect((err)=>{
    if(err){
        console.log('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database successfully!');
    }
});
module.exports = myDB;