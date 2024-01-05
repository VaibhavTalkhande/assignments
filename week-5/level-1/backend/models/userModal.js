const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const bcrypt = require('bcrypt')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/mernauth')
.then(
    console.log("mongodb connected")
);
const User = new Schema({
   email:{
    type:String,
    required:true,
    unique: true
   },
   password:{
    type: String,
    required: true,
   } 
})
User.statics.signup =async function(email,password){
    //validation
    if(!email || !password){
        throw Error('All Fiels must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error("Email is invalid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough');
    }

    const exist = await this.findOne({email})
    if (exists){
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({email, password: hash})
    return user;
}

module.exports= mongoose.model('User',User);