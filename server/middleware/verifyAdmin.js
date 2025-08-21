const jwt  = require("jsonwebtoken");


 const verify_token_admin = (req,res,next) =>{
    
  const token = req.cookies.jwtadmin;
  if(!token){
     return res.redirect("/");
  }else{
       jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
          if(err){
              return res.redirect("/adminDashboard");
          }
          else{
                req.user = decoded;
                next();
          }
       })
  }

   
}   

module.exports = verify_token_admin;