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
    const result = userSchema.safeParse(token);
    if(result.success){
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            res.status(401).json({
                message: "Unauthorized"
            })
        }
        User.findOne({username: decoded.username, password: decoded.password}, function(err, user){
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }
            else if(!user){
                res.status(401).json({
                    message: "Unauthorized"
                })
            }
            else{
                next();
            }
        })
    }
    else{
        res.status(401).json({
            message: "Unauthorized"
        })
    }
    
}

module.exports = userMiddleware;