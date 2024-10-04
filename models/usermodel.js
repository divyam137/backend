const mongoose=require("mongoose")

const userschema=mongoose.Schema(
    {
        username :{
            type: String,
            required: [true, "Please add username"]
        },
        email:{ type:String,
        required:[true, "Please enter Email Address"],
        unique:[true, " Email already exist"]
        },
        password:{
            type: String,
            required:[true, "Please enter a password"]
        },
    },{timestamps : true,}
)
module.exports=mongoose.model("userschema",userschema);