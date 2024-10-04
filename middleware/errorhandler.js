const errorhandler = (err,req,res,next) => {
    const statuscode=res.statusCode? res.statusCode:500
    switch(statuscode)
    {
        case 404:
        res.json({title:"not found" ,
                message: err.message,
                stackTrace: err.stack});
                break;

        case 400:
            res.json({title:"Vaidation Failed",
                 message: err.message,
                 stackTrace: err.stack});
                 break;
         case 500:
            res.json({title:"server error",
                 message: err.message,
                 stackTrace: err.stack});
                 break;
         case 401:
            res.json({title:"unauthorized",
                 message: err.message,
                 stackTrace: err.stack});
                 break;
         case 403:
            res.json({title:"forbidden",
                 message: err.message,
                 stackTrace: err.stack});
                 break;
    } 
   
    
};
  
module.exports=errorhandler;