
const role=(roles)=>{
  

    return function(req,res,next){
        const userrole=req.user.role;

        if(roles.includes(userrrole)){
            return next();

        }
        else{
            return res.status(403).json({message:"not authorized"});
        }
    }
    

};

export default  role;