const mongoose=require("mongoose")

const contactschema=mongoose.Schema({
    user_id:{
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: "userschema"
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type : String,
        required : true
    },
    contactinfo :{
        type:String,
        required: true
    },
}, {timestamps: true,
})

module.exports= mongoose.model("contactschema", contactschema);