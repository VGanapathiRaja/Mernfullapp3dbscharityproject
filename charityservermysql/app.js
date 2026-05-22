const express = require('express');
const myDB = require('./schema/dbconnect');
const cors = require('cors');
const Port = 4040;

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Welcome to the Charity Server!');
});

server.post("/connect", async (req, res) => {
    const { cname, cemail, cmobile, cmessage } = req.body;
    const fData = { cname, cemail, cmobile, cmessage };
    console.log(fData);
    try{
        if (!cname || !cemail || !cmobile || !cmessage) {
            console.log("Please fill all the fields");
            res.status(400).json({ error: 'Please fill all the fields client 404' });
        }
        else {
            const myinsertQuery = 'INSERT INTO charityconnect (cname, cemail, cmobile, cmessage) VALUES (?, ?, ?, ?)';
            await  myDB.promise().query(myinsertQuery, [cname, cemail, cmobile, cmessage]);
            console.log('Data inserted successfully into MySQL database!');
            res.status(200).json({ message: 'Data inserted successfully into the database' });
        }

    }
    catch(err){
        console.log('Error inserting data into MySQL database:', err);
        res.status(500).json({ error: 'Failed to insert data into the database server error 505' });
    }

});



// server.post("/connect",async(req,res)=>{
//     const {cname,cemail,cmobile,cmessage} = req.body;
//     const fData = {cname,cemail,cmobile,cmessage};
//     console.log(fData);
//     try{
//         if(!cname || !cemail || !cmobile || !cmessage){
//             console.log("Please fill all the fields");
//             res.status(400).json({ error: 'Please fill all the fields client 404' });
//         }
//         else{
//                 const myinsertQuery = 'insert into charityconnect(cname,cemail,cmobile,cmessage) values(?,?,?,?)';
//                 await myDB.query(myinsertQuery,[cname,cemail,cmobile,cmessage],(e,s)=>{
//                     if(e){
//                         console.log('Error inserting data into MySQL database:', e);
//                         res.status(500).json({ error: 'Failed to insert data into the database server error 505' });
//                     }
//                     else{
//                         console.log('Data inserted successfully into MySQL database!');
//                         res.status(200).json({ message: 'Data inserted successfully into the database' });
//                     };
//                 });
//         }
//     }
//     catch(err){
//         console.log('Error inserting data into MySQL database:', err);
//         res.status(500).json({ error: 'Failed to insert data into the database server error 505' });
//     }
// });




server.listen(Port,(err)=>{
    if(err){
        console.log('Error starting the server:', err);
    } else {
        console.log(`Server is running on port ${Port}`);
    }
});