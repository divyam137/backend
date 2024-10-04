const asynchandler=require("express-async-handler")//instaloling the package and using it prevents to use try catch error
const contactschema=require("../models/contactmodel")
// description get all contacts
//@route GET /api/contact
//@access private
const getContact=asynchandler(async(req,res)=>{
    const contact=await contactschema.find({user_id: req.user.id});
    res.status(200).json(contact)

})
// description create new contacts
//@route POST /api/contact
//@access private
const createContact = asynchandler(async (req, res) => {
    try {
        const { name, email, contactinfo } = req.body;
        if (!name || !email || !contactinfo) {
            res.status(400);
            throw new Error("All Fields are necessary");
        }
        const contact = await contactschema.create({
            name,
            email,
            contactinfo,
            user_id: req.user.id,
        });
        res.status(201).json(contact);
    } catch (error) {
        console.error("Error creating contact:", error.message); // Log the specific error message
        res.status(500).json({ message: "Server error", error: error.message }); // Send back the error message for debugging
    }
});

// description get contacts
//@route GET /api/contact/:id
//@access private
const getuniqueContact=asynchandler(async(req,res)=>{
    const contact=await contactschema.findById({
        _id: req.params.id,
        user_id:req.user.id

    })
    if(!contact){
        res.status(404);  
       throw new Error("Contact not found");
    }
    res.status(200).json(contact)

})
// description update contacts
//@route PUT /api/contact/:id
//@access private
const updateContact=asynchandler(async(req,res)=>{
    const contact=await contactschema.findById({_id:req.params.id,
        user_id:req.user.id
    })
    if(!contact){
        res.status(404);  
       throw new Error("Contact not found");
    }
    const updatedcontact = await contactschema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedcontact)
    
})
// description delete contacts
//@route DELETE /api/contact/:id
//@access private
const deleteContact=asynchandler(async(req,res)=>{
    const contact=await contactschema.findById({
        _id: req.params.id,
        user_id:req.user.id
    })
    if(!contact){
        res.status(404);  
       throw new Error("Contact not found");
    }
    await contactschema.deleteOne({_id:req.params.id});
    res.status(200).json(contact)
    
})
module.exports={ getContact,deleteContact,updateContact,getuniqueContact,createContact}
