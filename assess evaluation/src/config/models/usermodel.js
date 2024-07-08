import { model, Schema } from "mongoose";


const userschema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["user","admin"],default:"user"}
})

const usermodel=model("users",userschema);

export default usermodel;