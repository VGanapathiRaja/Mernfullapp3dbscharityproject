const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = 4000;
const myDB = require('./charitydb/modal');

// Front setup:
app.use(express.json());
app.use(cors());

// Database setup:

mongoose.connect("mongodb+srv://vgrsoftlogic:vgrganapathi@cluster0.ezxwamt.mongodb.net/charity?appName=Cluster0")
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

app.post("/subscribdata",async(req,res)=>{
    const {semail,smobile} = req.body;
    const newSubscribdata = {semail,smobile};
    console.log(newSubscribdata);
    try{
        if(!semail || !smobile){
            console.error("Error in saving subscribe data to database client error 400");
            return res.status(404).json({Error:"Error in saving subscribe data to database client error 400"});
        }
        else{
            const subscribdata = new myDB(newSubscribdata);
            await subscribdata.save();
            console.log("Subscribe data saved successfully to database");
            return res.status(200).json({Message:"Subscribe data saved successfully to database"});
        };
        
    }
    catch(err){
        console.error("Error in saving subscribe data to database server error 500",err);
        return res.status(500).json({Error:"Error in saving subscribe data to database server error 500"});
    };
});



// Deployemnts setup:
app.listen(PORT,(err)=>{
if(err){
    console.error("Error in server setup",err);
}
else{
    console.log(`Server is running on port ${PORT}`);  
}
}   );