const express= require("express");
const router=express.Router();
const {getContact,deleteContact,updateContact,getuniqueContact,createContact} = require("../controller/contactcontroller.js");
const validatetoken = require("../middleware/validatetoken.js");



router.use(validatetoken) // we could have used validate token individually but we want to make all of them private so this is also a method
router.route('/').get (getContact).post(createContact)
router.route('/:id').get (getuniqueContact).put (updateContact).delete (deleteContact)


module.exports=router; 