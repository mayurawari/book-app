import { model, Schema } from "mongoose";

const bookschema=new Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    price:{type:String,required:true}
})

const bookmodel=model("books",bookschema);

export default bookmodel;