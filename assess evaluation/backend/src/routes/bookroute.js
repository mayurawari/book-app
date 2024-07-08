import { Router } from "express";
import bookmodel from "../config/models/bookmodel.js";
import role from "../middlewares/role.js";

const bookroute=Router();


//create books
bookroute.post("/books",role(["admin"]),async(req,res)=>{
    const {title,author,price} =req.body;

     try {
        const existbook=await bookmodel.findOne({title:title});

        if(existbook){
            return res.status(400).send({message:"This book already exist"});
        }

        const newbook=await bookmodel({title,author,price});
        await newbook.save();

        return res.status(201).send("Book created successfully");
     } catch (error) {
        console.log(error);
     }
})

//getting books
bookroute.get("/",role(["admin","user"]),async(req,res)=>{
    const {title,author,price} =req.body;
   try {
    const getbbooks= await bookmodel.find();

    res.status(302).json(getbbooks);
   } catch (error) {
    console.log(error);
   }
})

//deleting books
bookroute.delete("/:id",role(["admin"]),async(req,res)=>{
    const {id} =req.params;
   try {
    const getbooks= await bookmodel.findByIdAndDelete(id);
    
    res.status(302).json(getbooks);
   } catch (error) {
    console.log(error);
   }
})

export default bookroute;