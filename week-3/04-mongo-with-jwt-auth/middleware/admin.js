// Middleware for handling auth
const { Admin} = require('../db');
const jwt = require('jsonwebtoken');
const z= require('zod');
const env = require('dotenv');
env.config();
const adminSchema = z.object({
    username: z.string(),
    password: z.string().min(3).max(20),
});
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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
        Admin.findOne({username: decoded.username, password: decoded.password})
        .then( function( admin){
            if(!admin){
                res.status(401).json({
                    message: "Unauthorized"
                })
            }
            else{
                next();
            }
        })
    
}

module.exports = adminMiddleware;