const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const connectdb=require("./config/dbconnection")
const app= express();
const port=process.env.PORT || 5000;

connectdb();
app.use(express.json());//middleware to request body from the server side 
app.use('/api/contacts',require("./Routes/contactroute"))//middleware
app.use('/api/users',require("./Routes/userroute"))
app.use(errorhandler) 

app.listen(port, ()=> { 
    console.log(`server running on port ${port}`);
})