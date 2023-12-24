const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log(err);
}
);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    "username":{
        type: String,
        required: true,
    },
    "password": {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    "username": String,
    "password": String,

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    "title": String,
    "description": String,
    "price": Number,
    "imageLink": String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}