const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/week-5');
const cardSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    linkedin:{
        type:String,
    },
    twitter:{
        type:String,
        required:true
    },
    interests:{
        type:String,
        required:true,   
    },
    }
    ,{timestamps:true}
    
);

const Card = mongoose.model('Card',cardSchema);
module.exports = Card;
