// Middleware for handling auth
const { Admin} = require('../db');
const jwt = require('jsonwebtoken');
const z= require('zod');
const adminSchema = z.object({
    username: z.string(),
    password: z.string().min(3).max(20),
});
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const result = adminSchema.safeParse(token);
    if(result.success){
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            res.status(401).json({
                message: "Unauthorized"
            })
        }
        Admin.findOne({username: decoded.username, password: decoded.password}, function(err, admin){
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }
            else if(!admin){
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

module.exports = adminMiddleware;