const mongoose=require("mongoose")

const connectdb=async ()=>{
    try {
        const connect=await mongoose.connect(process.env.CONNECTIONSTRING)
        console.log("connection established",
            connect.connection.host,
            connect.connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectdb 