import { model, Schema } from "mongoose";

const blacklistschema=new Schema({
    token:{type:String,required:true}
})
const blackmodel=model("token",blacklistschema);

export default blackmodel;