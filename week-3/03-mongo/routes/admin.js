const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const z= require('zod');

const adminSchema = z.object({
    username: z.string(),
    password: z.string().min(3).max(20),
});
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const result = adminSchema.safeParse({username: username, password: password});
    if(result.success){
        Admin.findOne({username: username}, function(err, admin){
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }
            else if(admin){
                res.status(409).json({
                    message: "Conflict"
                })
            }
            else{
                const admin = new Admin({
                    username: username,
                    password: password
                })
                admin.save(function(err, admin){
                    if(err){
                        res.status(500).json({
                            message: "Internal server error"
                        })
                    }
                    else{
                        res.status(201).json({
                            message: "Created"
                        })
                    }
                })
            }
        })
    }
    else{
        res.status(400).json({
            message: "Bad request"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const course = {
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    }
    const result = courseSchema.safeParse(course);
    if(result.success){
        const course = new Course({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink
        })
        course.save(function(err, course){
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }
            else{
                res.status(201).json({
                    message: "Created"
                })
            }
        })
    }
    else{
        res.status(400).json({
            message: "Bad request"
        })
    }
}
);

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const courses = Course.find({}, function(err, courses){
        if(err){
            res.status(500).json({
                message: "Internal server error"
            })
        }
        else{
            res.status(200).json({
                message: "OK",
                courses: courses
            })
        }
    })
}
);


module.exports = router;