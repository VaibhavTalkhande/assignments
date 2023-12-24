// Middleware for handling auth

const { Admin} = require('../db');
const z= require('zod');

const adminSchema = z.object({
    username: z.string(),
    password: z.string().min(3).max(20),
});
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const user = {
        username: username,
        password: password
    }
    const result = adminSchema.safeParse(user);
    if(result.success){
        Admin.findOne({username: username, password: password}, function(err, admin){
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