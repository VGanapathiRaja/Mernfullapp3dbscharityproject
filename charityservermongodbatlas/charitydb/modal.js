const mongoose = require('mongoose');

const Mycharitydb = new mongoose.Schema({
    semail:{
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    smobile:{
        type: BigInt,
        required: true,
        min: 10,
        max: 10 
    }
},{
    collection: 'concatinfo'
});
module.exports= mongoose.model("concatinfo",Mycharitydb,"concatinfo");