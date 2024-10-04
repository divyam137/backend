const express=require("express")
const { registeruser, loginuser, currentuser } = require("../controller/usercontroller")
const validatetoken = require("../middleware/validatetoken")
const router = express.Router()
//public
router.post("/register", registeruser)
//public
router.post("/login", loginuser)
//private
router.get("/current", validatetoken, currentuser)

        module.exports= router;