const {User} = require('../db');
const jwt = require('jsonwebtoken');
const z= require('zod');
const userSchema = z.object({
    username: z.string(),
    password: z.string().min(3).max(20),
});

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
        res.status(401).json({
            message: "Unauthorize run"
        })
    }
    req.username = decoded.username;
    req.password = decoded.password;
    User.findOne({username: decoded.username, password: decoded.password})
    .then( function( user){
        if(!user){
            res.status(401).json({
                message: "Unauthorized"
            })
        }
        else{
            next();
        }
    })
    
}

module.exports = userMiddleware;