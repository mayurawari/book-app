import blackmodel from "../config/models/blacklist.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const key=process.env.SECRET_KEY;

const auth=async(req,res,next)=>{
    const headers= req.headers.authorization;
    if(!headers){
        return res.status(404).send({message:"token not found"});
    }

    const token=headers.split(" ")[1];

    const blacklist=await blackmodel.findOne({token});
    if(blacklist){
        return res.status(400).send({message:"this token is blacklisted and logged out"});
    }

    jwt.verify(token,key,(err,result)=>{
      if(err)console.log(err);
      
      else{
        req.user=result;
        next();
      }
    })

};
export default auth;
