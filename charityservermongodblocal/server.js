const express = require('express');
const {default:mongoose} = require('mongoose');
const cors = require('cors');
const PORT = 5000;
const myDB = require('./charitymodal/database');


// Front setup:
const app = express();
app.use(express.json());
app.use(cors());

// Database setup:

mongoose.connect("mongodb://localhost:27017/Charityhelper")
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.error("Error in mongodb database connection",err);
});

// Backend setup:
app.get("/",(req,res)=>{
    res.send("welcome to backend  charity server");
    res.end();
});

app.post("/contactdata",async(req,res)=>{
    const {cname,semail,smobile} = req.body;
    const newContactdata = {cname,semail,smobile};
    console.log(newContactdata);
    try{
        if(!cname || !semail || !smobile){
            console.error("Error in saving contact data to database client error 400");
            return res.status(404).json({Error:"Error in saving contact data to database client error 400"});
        }
        else{
            const contactdata = new myDB(newContactdata);
            await contactdata.save();
            console.log("Contact data saved successfully to database");
            return res.status(200).json({Message:"Contact data saved successfully to database"});
        };
        
    }
    catch(err){
        console.error("Error in saving contact data to database server error 500",err);
        return res.status(500).json({Error:"Error in saving contact data to database server error 500"});
    };

})


// Deployemnts setup:
app.listen(PORT,(err)=>{
if(err){
    console.error("Error in server setup",err);
}
else{
    console.log(`Server is running on port ${PORT}`);  
}
});