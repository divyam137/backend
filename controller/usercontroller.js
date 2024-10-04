const asynchandler=require("express-async-handler")
const userschema=require("../models/usermodel")
const bcrypt=require("bcrypt")
const jwt= require("jsonwebtoken")
// description register a user
//@route GET /api/users/register
//@access public
const registeruser=asynchandler(async(req,res)=>{
    const{username, email, password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const useravailable=await userschema.findOne({email});
    if(useravailable)
        {
            res.status(400);
            throw new Error("Email already exist")
        }
//now if there is no error we will save the user but we cant save password the simple way therefore we use bcrypt
    const hashpassword = await bcrypt.hash(password,10);
    console.log(hashpassword)
    const user = await userschema.create({
    username,
    email,
    password: hashpassword,
    })
    console.log(`user created ${user}`);
    if(user)
        {
          res.status(201).json({
            _id: user.id,
            email:user.email
          })  
        }
        else
        {
            res.status(400)
            throw new Error("user data not valid")
        }
    res.json({message:"register the user"})

})
// description login a user
//@route GET /api/users/login
//@access public
const loginuser=asynchandler(async(req,res)=>{
    const {email, password}=req.body
    if(!email || !password){
        res.status(400)
        throw new Error ("All fields are necessary")
    }
    const user=await userschema.findOne({email})
        if(user && (await bcrypt.compare(password,user.password)))
            {
                const accesstoken=jwt.sign({
                    user:{
                        username: user.username,
                        email: user.email,
                        id: user.id,
                    }
                },process.env.ACCESSTOKEN,
                  {expiresIn: "50m"})
                res.status(200).json(accesstoken)
            }
            else
                {
                    res.status(401)
                    throw new Error("Email or password not valid")
                }

})
// description information of a user
//@route GET /api/users/current
//@access private
const currentuser=asynchandler(async(req,res)=>{
    res.json(req.user)

})

module.exports={registeruser,loginuser,currentuser}