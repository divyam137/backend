const asynchandler=require("express-async-handler")
const jwt = require("jsonwebtoken")

const validatetoken= asynchandler(async(req,res,next)=>{
    let token;
    let authheader=req.headers.authorization || req.headers.Authorization
    if(authheader && authheader.startsWith("Bearer")){
        token=authheader.split(" ")[1];
        jwt.verify(token, process.env.ACCESSTOKEN, (err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");

            }
            //console.log(decoded)
            req.user = decoded.user;//Purpose: This line attaches the authenticated user's information (extracted from the JWT)
                                    // to the req object, making it accessible in subsequent middlewares or route handlers. 
                                    //This is important because after validating the token, you’ll likely need to know which 
                                    //user is making the request to control access to certain resources.
                                    next();
        })
        if(!token){
            res.status(401);
            throw new Error("User not authorized")
        }
    }
})

module.exports=validatetoken